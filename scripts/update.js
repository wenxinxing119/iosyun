#!/usr/bin/env node
/**
 * 存量应用自动更新脚本
 * 从 App Store API 拉取最新数据，检测限免/降价/评分变化
 * 用法: node scripts/update.js
 */

import { readFileSync, writeFileSync } from 'fs';

const DATA_FILE = 'js/data.js';

function readApps() {
  const content = readFileSync(DATA_FILE, 'utf8');
  const match = content.match(/const defaultApps = (\[[\s\S]*?\]);/);
  if (!match) throw new Error('无法解析 data.js');
  return JSON.parse(match[1]);
}

function writeApps(apps) {
  let content = readFileSync(DATA_FILE, 'utf8');
  const start = content.indexOf('const defaultApps = [');
  const end = content.indexOf('];\n// Load from localStorage');
  if (start < 0 || end <= start) throw new Error('无法定位 defaultApps');
  const before = content.slice(0, start);
  const after = content.slice(end + 2);
  writeFileSync(DATA_FILE, before + 'const defaultApps = ' + JSON.stringify(apps, null, 2) + ';' + after);
}

async function fetchApp(aid) {
  for (const country of ['cn', 'us']) {
    try {
      const resp = await fetch(`https://itunes.apple.com/lookup?id=${aid}&country=${country}`);
      if (resp.status !== 200) continue;
      const json = await resp.json();
      if (json.resultCount > 0) {
        const r = json.results[0];
        let scrns = [];
        if (r.screenshotUrls?.length > 0) scrns = r.screenshotUrls;
        else if (r.ipadScreenshotUrls?.length > 0) scrns = r.ipadScreenshotUrls;
        return {
          price: r.formattedPrice || (r.price === 0 ? '免费' : '¥' + r.price),
          isFree: r.price === 0,
          rating: Math.round((r.averageUserRating || 0) * 10) / 10,
          reviewCount: r.userRatingCount || 0,
          version: r.version || '',
          size: r.fileSizeBytes ? Math.round(r.fileSizeBytes / 1048576) + ' MB' : '',
          compatibility: r.minimumOsVersion ? 'iOS ' + r.minimumOsVersion + '+' : '',
          screenshots: scrns,
          icon: r.artworkUrl512 || r.artworkUrl100 || '',
          appStoreUrl: r.trackViewUrl || '',
        };
      }
    } catch (e) { /* next */ }
  }
  return null;
}

async function main() {
  const apps = readApps();
  console.log(`🔄 检查 ${apps.length} 个应用...\n`);

  let changed = 0;
  const report = [];

  for (const app of apps) {
    // 提取 App Store ID
    const idMatch = app.appStoreUrl?.match(/id(\d+)/);
    const iconMatch = app.icon?.match(/\/.*\/(\d+)x\d+bb/);
    const aid = (idMatch?.[1]) || (iconMatch?.[1]);
    if (!aid) {
      console.log(`  ${app.name}: ⚠️ 无 App Store ID，跳过`);
      continue;
    }

    process.stdout.write(`  ${app.name}...`);
    const fresh = await fetchApp(aid);

    if (!fresh) {
      console.log(' ❌ 无法获取');
      report.push({ name: app.name, status: '离线' });
      continue;
    }

    const diffs = [];
    if (fresh.price !== app.price) diffs.push(`价格: ${app.price} → ${fresh.price}`);
    if (fresh.rating !== app.rating) diffs.push(`评分: ${app.rating} → ${fresh.rating}`);
    if (fresh.reviewCount !== app.reviewCount) diffs.push(`评价数: ${app.reviewCount} → ${fresh.reviewCount}`);
    if (fresh.version !== app.version) diffs.push(`版本: ${app.version} → ${fresh.version}`);
    if (fresh.screenshots.length !== (app.screenshots || []).length) diffs.push(`截图: ${(app.screenshots||[]).length} → ${fresh.screenshots.length}张`);

    if (diffs.length > 0) {
      console.log(` 🔄 ${diffs.join(' | ')}`);

      // 检测降价/限免：如果从付费变成免费，记录原价
      if (fresh.isFree && !app.isFree) {
        app.originalPrice = app.price; // 保存原价
        diffs.push(`🎉 限免！原价: ${app.price}`);
      }
      if (!fresh.isFree && app.isFree) {
        app.originalPrice = null; // 恢复收费，清除原价标记
      }

      // 更新字段（保留自定义内容）
      app.price = fresh.price;
      app.isFree = fresh.isFree;
      app.rating = fresh.rating;
      app.reviewCount = fresh.reviewCount;
      app.version = fresh.version;
      app.size = fresh.size;
      app.compatibility = fresh.compatibility;
      app.icon = fresh.icon || app.icon;
      app.appStoreUrl = fresh.appStoreUrl || app.appStoreUrl;
      if (fresh.screenshots.length > 0) app.screenshots = fresh.screenshots;
      app.updatedAt = new Date().toISOString().slice(0, 10);

      changed++;
      report.push({ name: app.name, status: '已更新', diffs });
    } else {
      console.log(' ✅ 无变化');
      report.push({ name: app.name, status: '无变化' });
    }

    await new Promise(r => setTimeout(r, 300));
  }

  writeApps(apps);

  console.log(`\n📊 更新报告: 共 ${apps.length} 个 | 更新 ${changed} 个`);
  const offlines = report.filter(r => r.status === '离线');
  if (offlines.length > 0) console.log(`  ⚠️ 离线: ${offlines.map(r => r.name).join(', ')}`);

  const priceDiffs = report.filter(r => r.diffs?.some(d => d.includes('价格')));
  if (priceDiffs.length > 0) {
    console.log('\n🔥 价格变动:');
    priceDiffs.forEach(r => console.log(`  ${r.name}: ${r.diffs.find(d => d.includes('价格'))}`));
  }
}

main().catch(console.error);

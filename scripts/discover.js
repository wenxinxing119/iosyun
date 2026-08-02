#!/usr/bin/env node
/**
 * 热门应用发现
 * 综合 App Store 排行榜 + 热门搜索关键词
 * 用法: node scripts/discover.js
 */

const GENRE_MAP = {
  'Productivity':'效率','Utilities':'工具','Lifestyle':'生活','Health & Fitness':'健康',
  'Education':'教育','Finance':'财务','Business':'商务','Social Networking':'社交',
  'Entertainment':'娱乐','Music':'音乐','Photo & Video':'摄影','Travel':'旅行',
  'Food & Drink':'美食','Shopping':'购物','Sports':'体育','News':'新闻',
  'Navigation':'导航','Book':'图书','Medical':'医疗','Reference':'参考',
  'Weather':'天气','Games':'游戏','Developer Tools':'开发工具','Graphics & Design':'设计',
};

async function getExistingIds() {
  const { readFileSync } = await import('fs');
  try {
    const content = readFileSync('js/data.js', 'utf8');
    const match = content.match(/const defaultApps = (\[[\s\S]*?\]);/);
    if (!match) return new Set();
    const apps = JSON.parse(match[1]);
    const ids = new Set();
    apps.forEach(a => {
      const m = a.appStoreUrl?.match(/id(\d+)/);
      if (m) ids.add(parseInt(m[1]));
    });
    return ids;
  } catch(e) { return new Set(); }
}

// 从 RSS 排行榜获取 ID 列表
async function getTopCharts() {
  console.log('📊 抓取 App Store 排行榜...\n');
  const feeds = [
    { name: 'Top免费', url: 'https://rss.applemarketingtools.com/api/v2/cn/apps/top-free/25/apps.json' },
    { name: 'Top付费', url: 'https://rss.applemarketingtools.com/api/v2/cn/apps/top-paid/25/apps.json' },
    { name: '编辑精选', url: 'https://rss.applemarketingtools.com/api/v2/cn/apps/new-apps-we-love/25/apps.json' },
  ];

  const existingIds = await getExistingIds();
  const candidates = [];

  for (const feed of feeds) {
    try {
      const resp = await fetch(feed.url);
      const data = await resp.json();
      const apps = data.feed?.results || [];

      const filtered = apps
        .filter(a => !existingIds.has(parseInt(a.id)))
        .slice(0, 6);

      console.log(`  ${feed.name}: ${filtered.length} 个新候选`);
      filtered.forEach(a => console.log(`    ${a.name} → id:${a.id} | developer:${a.artistName}`));
      console.log('');

      candidates.push(...filtered.map(a => ({
        id: parseInt(a.id),
        name: a.name,
        developer: a.artistName,
        source: feed.name,
        icon: a.artworkUrl100 || '',
        appStoreUrl: a.url || `https://apps.apple.com/cn/app/id${a.id}`,
      })));
    } catch(e) {
      console.log(`  ${feed.name}: ❌ ${e.message}\n`);
    }
  }
  return candidates;
}

// 热门关键词搜索发现
async function searchTrending() {
  console.log('🎵 搜索热门关键词...\n');
  const keywords = ['效率工具','笔记','AI工具','修图','记账','专注力','小组件'];
  const existingIds = await getExistingIds();
  const results = [];

  for (const kw of keywords) {
    try {
      const resp = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(kw)}&entity=software&country=cn&limit=5`);
      const data = await resp.json();
      const fresh = (data.results || []).filter(r => !existingIds.has(parseInt(r.trackId)) && r.userRatingCount >= 50);
      fresh.forEach(r => {
        results.push({
          id: r.trackId,
          name: r.trackName,
          developer: r.sellerName || r.artistName,
          category: GENRE_MAP[r.primaryGenreName] || r.primaryGenreName || '其他',
          rating: Math.round((r.averageUserRating || 0) * 10) / 10,
          reviewCount: r.userRatingCount || 0,
          price: r.formattedPrice || (r.price === 0 ? '免费' : '¥' + r.price),
          isFree: r.price === 0,
          icon: r.artworkUrl100 || '',
          screenshots: (r.screenshotUrls?.length || 0),
          source: `搜索-${kw}`,
          appStoreUrl: r.trackViewUrl || `https://apps.apple.com/cn/app/id${r.trackId}`,
        });
      });
    } catch(e) {}
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`  发现 ${results.length} 个热门候选`);
  return results;
}

// 根据 App ID 拉取完整信息
async function fetchAppInfo(id) {
  for (const country of ['cn', 'us']) {
    try {
      const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&country=${country}`);
      const data = await res.json();
      if (data.results?.length > 0) return data.results[0];
    } catch(e) {}
  }
  return null;
}

function mb(bytes) {
  if (!bytes) return '未知';
  const m = bytes / (1024 * 1024);
  return m >= 1000 ? `${(m/1024).toFixed(0)} GB` : `${Math.round(m)} MB`;
}

// 自动将优质候选入库到 data.js
async function autoAddTopCandidates(candidates) {
  const { readFileSync, writeFileSync } = await import('fs');
  const content = readFileSync('js/data.js', 'utf8');
  const match = content.match(/const defaultApps = (\[[\s\S]*?\])/);
  if (!match) return 0;
  const apps = JSON.parse(match[1]);
  let nextId = Math.max(...apps.map(a => a.id)) + 1;

  // 优先高分搜索候选，再取排行榜
  const scored = candidates
    .filter(c => c.rating >= 4.0 || c.source.includes('搜索'))
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 8);

  let added = 0;
  for (const c of scored) {
    await new Promise(r => setTimeout(r, 400));
    const info = await fetchAppInfo(c.id);
    if (!info) { console.log(`  ✗ ${c.name}: 无数据`); continue; }

    const price = info.price || 0;
    const icon = info.artworkUrl512 || info.artworkUrl100 || '';
    const screenshots = (info.screenshotUrls || []).slice(0, 5);

    apps.push({
      id: nextId++,
      name: info.trackCensoredName || info.trackName,
      icon,
      category: c.category || GENRE_MAP[info.primaryGenreName] || '工具',
      price: price === 0 ? '免费' : (info.currency === 'USD' ? '$'+price.toFixed(2) : '¥'+price.toFixed(2)),
      originalPrice: null,
      isFree: price === 0,
      rating: Math.round((info.averageUserRating || 0) * 10) / 10,
      reviewCount: info.userRatingCount || 0,
      developer: info.artistName,
      appStoreUrl: info.trackViewUrl || c.appStoreUrl,
      size: mb(info.fileSizeBytes),
      version: info.version || '',
      compatibility: info.minimumOsVersion ? `iOS ${info.minimumOsVersion}+` : '未知',
      language: '中文',
      tags: [c.category || '工具'],
      description: (info.description || '').substring(0, 150).replace(/\n/g, ' '),
      screenshots,
      featured: false,
      isHot: false,
      updatedAt: new Date().toISOString().split('T')[0]
    });
    console.log(`  ✓ 入库: ${info.trackName} (id:${c.id})`);
    added++;
  }

  if (added > 0) {
    const newContent = content.replace(
      /const defaultApps = \[[\s\S]*?\];/,
      `const defaultApps = ${JSON.stringify(apps, null, 2)};`
    );
    writeFileSync('js/data.js', newContent, 'utf8');
  }
  return added;
}

async function main() {
  const chartList = await getTopCharts();
  const trendingList = await searchTrending();

  const all = [...chartList, ...trendingList];

  // 去重
  const seen = new Set();
  const unique = all.filter(a => {
    if (seen.has(a.id)) return false;
    seen.add(a.id);
    return true;
  });

  console.log('\n═══════════════════════════════════════');
  console.log('🎯 热门候选汇总\n');
  console.log('| 应用名 | App ID | 来源 | 价格 | 评分 |');
  console.log('|--------|--------|------|------|------|');

  unique.slice(0, 20).forEach(a => {
    const price = a.price || '?';
    const rating = a.rating > 0 ? `⭐${a.rating}` : '?';
    console.log(`| ${a.name.slice(0,20).padEnd(20)} | ${String(a.id).padStart(10)} | ${a.source} | ${price} | ${rating} |`);
  });

  // 自动入库优质候选
  console.log('\n🤖 自动入库优质应用...\n');
  const added = await autoAddTopCandidates(unique);
  console.log(`\n共发现 ${unique.length} 个候选，自动入库 ${added} 个`);
}

main().catch(console.error);

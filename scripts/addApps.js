const fs = require('fs');
const path = require('path');
const { generateSlug, uniqueSlug } = require('./slug-utils.cjs');

// Apps to add: [appId, category, language, tags]
const NEW_APPS = [
  [1242689729, '效率', '中文', ['番茄钟','时间管理','自律','专注']],
  [1623308204, '效率', '中文', ['任务管理','计划','打卡','日程']],
  [993066159, '效率', '中文', ['待办清单','提醒','GTD','极简']],
  [1392166974, '效率', '中文', ['日程计划','日历','打卡','时间管理']],
  [1214302139, '效率', '中文', ['大纲笔记','思维导图','知识管理']],
  [6459478672, '工具', '中文', ['AI助手','智能对话','写作','翻译']],
  [1605585211, '工具', '中文', ['音乐','推荐','播放器']],
  [6451407032, '工具', '中文', ['短剧','视频','娱乐']],
  [6464237904, '效率', '中文', ['笔记','学习','阅读','PDF']],
  [360593530, '效率', '中文', ['笔记','手写','PDF标注','录音']],
  [450748070, '效率', '中文', ['笔记','扫描','云同步','协作']],
  [6741474933, '摄影', '中文', ['胶片相机','自拍','复古','滤镜']],
  [768160271, '工具', '中文', ['航班','出行','值机']],
  [388624839, '工具', '中文', ['扫描','OCR','PDF','文档']],
  [954724812, '工具', '中文', ['股票','投资','行情']],
];

const dataFile = path.join(__dirname, '..', 'js', 'data.js');

async function fetchApp(id) {
  for (const country of ['cn', 'us']) {
    try {
      const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&country=${country}`);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        return data.results[0];
      }
    } catch(e) {}
  }
  return null;
}

function formatSize(bytes) {
  if (!bytes) return '未知';
  const mb = bytes / (1024 * 1024);
  return mb >= 1000 ? `${(mb/1024).toFixed(0)} GB` : `${Math.round(mb)} MB`;
}

function formatPrice(price, currency) {
  if (price === undefined || price === null || price === 0) return '免费';
  const symbol = currency === 'USD' ? '$' : '¥';
  return `${symbol}${price.toFixed(2)}`;
}

async function addOne(appId, category, language, tags) {
  const info = await fetchApp(appId);
  if (!info) { console.log(`  ✗ ${appId}: 未找到`); return null; }
  
  // Determine real price
  const rawPrice = info.price || 0;
  const rawCurrency = info.currency || 'CNY';
  let priceDisplay;
  let isFree = false;
  let originalPrice = null;
  
  if (rawPrice === 0) {
    priceDisplay = '免费';
    isFree = true;
  } else {
    priceDisplay = rawCurrency === 'USD' ? `$${rawPrice.toFixed(2)}` : `¥${rawPrice.toFixed(2)}`;
    isFree = false;
  }
  
  const screenshots = (info.screenshotUrls || []).slice(0, 5);
  const rating = Math.round((info.averageUserRating || 0) * 10) / 10;
  const name = info.trackName || info.trackCensoredName;
  const slug = generateSlug(name, appId) || ('app-' + appId);
  
  const app = {
    name,
    slug,
    icon: info.artworkUrl512 || info.artworkUrl100,
    category: category,
    price: priceDisplay,
    originalPrice: originalPrice,
    isFree: isFree,
    rating: rating,
    reviewCount: info.userRatingCount || 0,
    developer: info.artistName,
    appStoreUrl: info.trackViewUrl || `https://apps.apple.com/app/id${appId}`,
    size: formatSize(info.fileSizeBytes),
    version: info.version,
    compatibility: info.minimumOsVersion ? `iOS ${info.minimumOsVersion}+` : '未知',
    language: language,
    tags: tags,
    description: (info.description || '').substring(0, 150).replace(/\n/g, ' '),
    screenshots: screenshots,
    featured: false,
    isHot: false,
    updatedAt: new Date().toISOString().split('T')[0]
  };
  
  console.log(`  ✓ ${app.name} (${appId})`);
  return app;
}

async function main() {
  console.log(`📦 批量拉取 ${NEW_APPS.length} 个新应用...\n`);
  
  // Read existing data.js
  let existing = fs.readFileSync(dataFile, 'utf8');
  
  // Extract the defaultApps array
  const match = existing.match(/const defaultApps = (\[[\s\S]*?\]);/);
  if (!match) {
    console.error('❌ 无法解析 data.js 中的 defaultApps');
    return;
  }
  
  const apps = JSON.parse(match[1]);
  const existingIds = new Set(apps.map(a => a.id));
  const existingAppStoreIds = new Set();
  const usedSlugs = new Set(apps.map(a => a.slug).filter(Boolean));
  for (const a of apps) {
    const m = a.appStoreUrl && a.appStoreUrl.match(/id(\d+)/);
    if (m) existingAppStoreIds.add(parseInt(m[1]));
  }
  
  let nextId = Math.max(...apps.map(a => a.id)) + 1;
  let added = 0;
  
  for (const [appId, category, language, tags] of NEW_APPS) {
    if (existingAppStoreIds.has(appId)) {
      console.log(`  - ${appId}: 已存在，跳过`);
      continue;
    }
    
    // Rate limit
    await new Promise(r => setTimeout(r, 350));
    
    const app = await addOne(appId, category, language, tags);
    if (app) {
      app.id = nextId++;
      app.slug = uniqueSlug(app.slug || ('app-' + app.id), usedSlugs);
      apps.push(app);
      added++;
    }
  }
  
  if (added === 0) {
    console.log('\n⚠️  没有新应用需要添加');
    return;
  }
  
  // Rebuild data.js file
  const newAppsJson = JSON.stringify(apps, null, 2);
  const newContent = existing.replace(
    /const defaultApps = \[[\s\S]*?\];/,
    `const defaultApps = ${newAppsJson};`
  );
  
  fs.writeFileSync(dataFile, newContent, 'utf8');
  console.log(`\n✅ 已添加 ${added} 个新应用到 data.js，共 ${apps.length} 个`);
}

main().catch(e => { console.error(e); process.exit(1); });

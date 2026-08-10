/**
 * 自动发现新应用
 * 
 * 每天从 iTunes Search API 搜索不同关键词，发现新应用加入数据库
 * 目标：每月 ~100 个新应用（每天 3-4 个）
 * 
 * 由 GitHub Actions 每天定时运行
 */

const dataFile = new URL('../js/data.js', import.meta.url).pathname;

// ============================================================
// 搜索关键词库（轮换，避免每天搜重复内容）
// ============================================================
const SEARCH_TERMS = [
  '效率工具', '摄影修图', '设计绘画', '健康健身',
  '笔记日记', '阅读资讯', '财务管理', '学习教育',
  '音乐音频', '视频编辑', '旅行导航', '天气时钟',
  '游戏推荐', '社交聊天', '购物比价', '扫描OCR',
  'PDF编辑', '密码管理', '文件管理', '隐私安全',
  '日历提醒', '待办清单', '冥想睡眠', '食谱烹饪',
  '翻译词典', '编程开发', '科学计算', '写作文案',
  '小组件', '壁纸主题', '自动化', '远程控制',
];

// ============================================================
// 工具函数
// ============================================================
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function itunesSearch(term) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&country=cn&entity=software&limit=50`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`iTunes API ${res.status}`);
  const data = await res.json();
  return data.results || [];
}

async function itunesLookup(trackId) {
  const url = `https://itunes.apple.com/lookup?id=${trackId}&country=cn`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`iTunes Lookup ${res.status}`);
  const data = await res.json();
  return data.results?.[0] || null;
}

// 判断设备支持
function parsePlatform(supportedDevices) {
  if (!supportedDevices || !supportedDevices.length) return 'iPhone / iPad';
  const platforms = [];
  const has = (s) => supportedDevices.some(d => d.includes(s));
  if (has('iPhone')) platforms.push('iPhone');
  if (has('iPad')) platforms.push('iPad');
  if (has('Mac') || has('DeskTop')) platforms.push('Mac');
  if (has('Watch') || has('AppleWatch')) platforms.push('Apple Watch');
  if (has('AppleTV') || has('TV')) platforms.push('Apple TV');
  return platforms.length ? platforms.join(' / ') : 'iPhone / iPad';
}

// 从描述/类别生成标签
function generateTags(name, genre, description) {
  const tagMap = {
    '效率': ['效率', '工具', '生产力'],
    '摄影与录像': ['摄影', '拍照', '修图'],
    '图形和设计': ['设计', '绘画', '创意'],
    '健康健美': ['健康', '健身', '运动'],
    '教育': ['学习', '教育', '知识'],
    '财务': ['理财', '记账', '金融'],
    '音乐': ['音乐', '音频', '播放器'],
    '娱乐': ['娱乐', '视频', '媒体'],
    '社交': ['社交', '聊天', '社区'],
    '购物': ['购物', '比价', '电商'],
    '旅游': ['旅游', '出行', '导航'],
    '天气': ['天气', '时钟', '日历'],
    '工具': ['工具', '实用', '便捷'],
    '商务': ['办公', '商务', '协作'],
    '医疗': ['医疗', '健康', '养生'],
    '美食佳饮': ['美食', '烹饪', '食谱'],
    '参考': ['词典', '翻译', '百科'],
    '软件开发': ['编程', '开发', '代码'],
    '生活': ['生活', '日常', '实用'],
    '新闻': ['资讯', '新闻', '阅读'],
    '图书': ['阅读', '书籍', '电子书'],
  };

  const tags = [];
  // 按分类匹配
  for (const [key, vals] of Object.entries(tagMap)) {
    if (genre?.includes(key) || name?.includes(key)) {
      tags.push(...vals);
      break;
    }
  }
  // 从名字提取关键词
  const keywords = (name || '').split(/[-—·\s]+/).filter(t => t.length <= 4);
  for (const kw of keywords) {
    if (!tags.includes(kw) && kw.length <= 16) tags.push(kw);
  }

  // 去重，限制数量
  return [...new Set(tags)].slice(0, 6);
}

// ============================================================
// 主逻辑
// ============================================================
async function main() {
  const { readFileSync, writeFileSync } = await import('fs');
  const content = readFileSync(dataFile, 'utf-8');

  // 提取现有的 defaultApps
  const arrayMatch = content.match(/const defaultApps = (\[[\s\S]*?\]);/);
  if (!arrayMatch) {
    console.error('❌ 未找到 defaultApps 数组');
    process.exit(1);
  }
  const apps = JSON.parse(arrayMatch[1]);

  // 已收录的 trackId（从 appStoreUrl 中提取）
  const existingIds = new Set();
  apps.forEach(a => {
    if (a.appStoreUrl) {
      const m = a.appStoreUrl.match(/id(\d+)/);
      if (m) existingIds.add(parseInt(m[1]));
    }
  });
  console.log(`📦 现有 ${apps.length} 个应用，${existingIds.size} 个已收录`);

  // 选择今天的搜索词（按一年中的第几天轮换）
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  const term = SEARCH_TERMS[dayOfYear % SEARCH_TERMS.length];
  console.log(`🔍 今日搜索词: "${term}" (第 ${dayOfYear} 天)`);

  // 搜索
  const results = await itunesSearch(term);
  console.log(`   iTunes 返回 ${results.length} 个结果`);

  // 过滤：去重、去低分、去已收录
  const candidates = results
    .filter(r => r.trackId && !existingIds.has(r.trackId))  // 未收录
    .filter(r => r.averageUserRating >= 3.5 || r.userRatingCount > 100)  // 不是太差的
    .filter(r => r.trackName && r.trackName.length <= 60)  // 名字别太长
    .filter(r => r.formattedPrice !== undefined);  // 有价格信息

  console.log(`   ${candidates.length} 个候选新应用`);

  if (candidates.length === 0) {
    console.log('⚠️ 今日无可用候选，换个搜索词再试...');
    const fallbackTerm = SEARCH_TERMS[(dayOfYear + 7) % SEARCH_TERMS.length];
    const fallback = await itunesSearch(fallbackTerm);
    const extras = fallback.filter(r => r.trackId && !existingIds.has(r.trackId));
    candidates.push(...extras);
    console.log(`   补充搜索 "${fallbackTerm}" → ${extras.length} 个`);
  }

  // 每天选 3-4 个
  const toAdd = Math.min(candidates.length, Math.floor(Math.random() * 2) + 3);
  const picked = candidates.sort(() => Math.random() - 0.5).slice(0, toAdd);

  if (picked.length === 0) {
    console.log('⚠️ 没有新应用可添加，跳过');
    return;
  }

  console.log(`\n✨ 今日新增 ${picked.length} 个应用:`);

  // 生成新 ID（在现有最大 ID 基础上递增）
  let maxId = apps.reduce((max, a) => Math.max(max, a.id || 0), 0);
  const addedSlugs = new Set(apps.map(a => a.slug));

  const newApps = [];
  for (const item of picked) {
    maxId++;
    let slug = generateSlug(item.trackName);
    if (!slug) slug = 'app-' + maxId;
    // 防重名
    let candidate = slug, n = 1;
    while (addedSlugs.has(candidate)) {
      candidate = slug + '-' + (++n);
    }
    addedSlugs.add(candidate);

    const price = item.price === 0 || item.formattedPrice === '免费'
      ? '免费'
      : (item.formattedPrice || '¥' + item.price);
    const desc = (item.description || '').slice(0, 300).replace(/\n/g, ' ');

    const app = {
      id: maxId,
      slug: candidate,
      name: item.trackName,
      description: desc || item.trackName,
      category: item.primaryGenreName || '工具',
      price: price,
      originalPrice: null,
      rating: Math.round((item.averageUserRating || 4.0) * 10) / 10,
      reviewCount: item.userRatingCount || 0,
      platform: parsePlatform(item.supportedDevices),
      tags: generateTags(item.trackName, item.primaryGenreName, item.description),
      screenshots: (item.screenshotUrls || []).slice(0, 5),
      featured: false,
      isFree: item.price === 0,
      appStoreUrl: item.trackViewUrl || `https://apps.apple.com/cn/app/id${item.trackId}`,
      icon: (item.artworkUrl100 || '').replace(/100x100[bB]{2}/, '512x512bb'),
      developer: item.sellerName || item.artistName || '',
      updatedAt: now.toISOString().slice(0, 10),
    };

    newApps.push(app);
    console.log(`   ${maxId}. ${app.name}`);
    console.log(`      分类: ${app.category} | 价格: ${app.price} | ⭐${app.rating}`);
    console.log(`      slug: ${candidate}`);
    console.log(`      图标: ${app.icon}`);

    // 避免 API 限频
    await sleep(500);
  }

  // 追加到 apps 数组
  apps.push(...newApps);

  // 更新 DATA_VERSION
  let newContent = content.replace(/const DATA_VERSION = (\d+);/, (match, version) => {
    const newVersion = parseInt(version) + 1;
    console.log(`\n🔢 DATA_VERSION: ${version} → ${newVersion}`);
    return `const DATA_VERSION = ${newVersion};`;
  });

  // 替换 defaultApps 数组
  newContent = newContent.replace(
    arrayMatch[0],
    `const defaultApps = ${JSON.stringify(apps, null, 2)};`
  );

  writeFileSync(dataFile, newContent, 'utf-8');
  console.log(`\n✅ 完成！共 ${apps.length} 个应用`);
}

main().catch(err => {
  console.error('❌', err.message);
  process.exit(1);
});

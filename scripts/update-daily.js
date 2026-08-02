/**
 * 每日限免轮换脚本
 * 
 * 逻辑：
 * 1. 将当前所有"真正限免"（isFree=true 且 originalPrice 有值）恢复为付费状态
 * 2. 从付费应用中随机选出 5-8 个，标记为新的"限免"
 * 3. 提升 DATA_VERSION 让所有用户浏览器缓存失效
 * 
 * 由 GitHub Actions 每天自动运行
 */

const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'js', 'data.js');

// 读取数据文件
const content = fs.readFileSync(dataFile, 'utf-8');

// 提取 defaultApps 数组
const arrayMatch = content.match(/const defaultApps = (\[[\s\S]*?\]);/);
if (!arrayMatch) {
  console.error('❌ 未找到 defaultApps 数组');
  process.exit(1);
}

/** @type {Array} */
const apps = JSON.parse(arrayMatch[1]);
console.log(`📦 共 ${apps.length} 个应用`);

// ============================================================
// 第一步：将当前限免恢复为付费
// ============================================================
const currentFreebies = apps.filter(a => a.isFree && a.originalPrice);
console.log(`\n🔄 当前限免 ${currentFreebies.length} 个，恢复为付费：`);
currentFreebies.forEach(a => {
  a.isFree = false;
  a.price = a.originalPrice;
  a.originalPrice = null;
  console.log(`   - ${a.name} → ${a.price}`);
});

// ============================================================
// 第二步：从付费应用中随机选新的限免
// ============================================================
const paidPool = apps.filter(a => !a.isFree && a.price && a.price !== '免费');
if (paidPool.length === 0) {
  console.log('⚠️  没有可用的付费应用，跳过限免轮换');
} else {
  // 随机 5-8 个
  const count = Math.min(paidPool.length, Math.floor(Math.random() * 4) + 5);
  
  // Fisher-Yates 洗牌
  const shuffled = [...paidPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const selected = shuffled.slice(0, count);
  
  console.log(`\n🎉 今日限免 ${selected.length} 个：`);
  const today = new Date().toISOString().slice(0, 10);
  selected.forEach(a => {
    a.originalPrice = a.price;
    a.price = '免费';
    a.isFree = true;
    a.updatedAt = today;
    console.log(`   - ${a.name}（原价 ${a.originalPrice}）`);
  });

  // 同时更新所有限免的 updatedAt（包括始终免费的）
  apps.filter(a => a.isFree && !a.originalPrice).forEach(a => {
    a.updatedAt = today;
  });
}

// ============================================================
// 第三步：更新 DATA_VERSION，写回文件
// ============================================================
let newContent = content.replace(/const DATA_VERSION = (\d+);/, (match, version) => {
  const newVersion = parseInt(version) + 1;
  console.log(`\n🔢 DATA_VERSION: ${version} → ${newVersion}`);
  return `const DATA_VERSION = ${newVersion};`;
});

// 替换 defaultApps 数组内容
newContent = newContent.replace(
  arrayMatch[0],
  `const defaultApps = ${JSON.stringify(apps, null, 2)};`
);

fs.writeFileSync(dataFile, newContent, 'utf-8');
console.log('\n✅ 更新完成');

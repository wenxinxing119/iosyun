#!/usr/bin/env node
/**
 * 从 App Store API 重建 data.js
 * 用法: node scripts/rebuild.js
 */
import { readFileSync, writeFileSync } from 'fs';

const APPS = [
  {id:1,name:"Things 3",aid:"904237743",cat:"效率",orig:null,dev:"Cultured Code",lang:"中文 / 英文",tags:["任务管理","GTD","待办事项"],desc:"屡获殊荣的任务管理应用，帮助你规划日程、管理项目，逐步实现目标。界面优雅简洁，上手迅速。",feat:true,hot:true},
  {id:2,name:"Procreate",aid:"425073498",cat:"设计",orig:null,dev:"Savage Interactive",lang:"中文 / 英文",tags:["绘画","插画","数字艺术","iPad"],desc:"iPad 上最受欢迎的专业绘画应用，拥有数百款手工画笔、高级图层系统。",feat:true,hot:true},
  {id:3,name:"CARROT Weather",aid:"961390574",cat:"天气",orig:"¥30",dev:"Grailr LLC",lang:"英文",tags:["天气","限免","趣味","AI"],desc:"极具个性的天气应用，精准气象数据与幽默毒舌的 AI 播报风格。",feat:false,hot:false},
  {id:4,name:"Halide Mark III",aid:"885697368",cat:"摄影",orig:"¥98",dev:"Lux Optics",lang:"英文",tags:["相机","RAW","专业摄影"],desc:"iPhone 上最强大的专业相机应用，支持手动控制、RAW 拍摄。",feat:true,hot:false},
  {id:5,name:"Fantastical",aid:"718043190",cat:"效率",orig:"¥58",dev:"Flexibits Inc.",lang:"中文 / 英文",tags:["日历","日程","自然语言"],desc:"屡获殊荣的日历应用，支持自然语言创建事件。",feat:false,hot:true},
  {id:6,name:"1Password",aid:"568903335",cat:"工具",orig:null,dev:"AgileBits Inc.",lang:"中文 / 英文",tags:["密码管理","安全","跨平台"],desc:"安全可靠的密码管理器，帮你记住所有密码并自动填充。",feat:true,hot:false},
  {id:7,name:"GoodNotes 6",aid:"1444383602",cat:"效率",orig:"¥68",dev:"Goodnotes",lang:"中文 / 英文",tags:["笔记","手写","PDF","AI"],desc:"备受欢迎的手写笔记应用，支持 AI 辅助书写、PDF 标注。",feat:false,hot:true},
  {id:8,name:"Pixelmator Pro",aid:"1289583905",cat:"设计",orig:null,dev:"Pixelmator Team",lang:"中文 / 英文",tags:["图像编辑","设计","Mac"],desc:"专业级颜色调整、机器学习自动增强、200+设计模板。",feat:false,hot:false},
  {id:9,name:"Dark Noise",aid:"1465439395",cat:"工具",orig:"¥30",dev:"Charlie Chapman",lang:"英文",tags:["白噪音","专注","睡眠"],desc:"简洁优雅的环绕噪声应用，50+高品质音效和精美动画。",feat:false,hot:false},
  {id:10,name:"Reeder 5",aid:"1529445840",cat:"工具",orig:"¥68",dev:"Silvio Rizzi",lang:"英文",tags:["RSS","阅读"],desc:"经典 RSS 阅读器，支持 iCloud 同步和 Bionic Reading 模式。",feat:false,hot:false},
];

async function fetchApp(aid) {
  for (const country of ['cn','us']) {
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
          comp: r.minimumOsVersion ? 'iOS ' + r.minimumOsVersion + '+' : '',
          scrns,
          icon: r.artworkUrl512 || r.artworkUrl100 || '',
          url: r.trackViewUrl || '',
        };
      }
    } catch(e) { /* next */ }
  }
  return null;
}

async function main() {
  console.log('🔄 从 App Store API 拉取最新数据...\n');

  const apps = [];
  for (const a of APPS) {
    process.stderr.write(`  ${a.name}...`);
    const fresh = await fetchApp(a.aid);
    if (!fresh) {
      console.log(' ❌ 失败');
      continue;
    }
    apps.push({
      id: a.id,
      name: a.name,
      icon: fresh.icon || null,
      category: a.cat,
      price: fresh.price,
      originalPrice: a.orig,
      isFree: fresh.isFree,
      rating: fresh.rating,
      reviewCount: fresh.reviewCount,
      developer: a.dev,
      appStoreUrl: fresh.url,
      size: fresh.size,
      version: fresh.version,
      compatibility: fresh.comp,
      language: a.lang,
      tags: a.tags,
      description: a.desc,
      screenshots: fresh.scrns,
      featured: a.feat,
      isHot: a.hot,
      updatedAt: new Date().toISOString().slice(0, 10),
    });
    console.log(` ✅ price=${fresh.price} rating=${fresh.rating} scrns=${fresh.scrns.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  // Read existing file to get the helper functions
  const oldContent = readFileSync('js/data.js', 'utf8');
  const helperStart = oldContent.indexOf('\n// Load from localStorage');

  const jsonArr = JSON.stringify(apps, null, 2);
  const newContent = `// === App Data with localStorage support ===
const STORAGE_KEY = 'iosyun_apps';

const defaultApps = ${jsonArr};${oldContent.slice(helperStart)}`;

  writeFileSync('js/data.js', newContent);

  console.log('\n📊 重建完成:');
  console.log(`  - ${apps.length} 个应用`);
  apps.forEach(a => {
    console.log(`  ${String(a.id).padStart(2)}. ${a.name.padEnd(18)} | ${a.price.padEnd(10)} | ⭐${a.rating} | 截图:${a.screenshots.length}张`);
  });
}

main().catch(console.error);

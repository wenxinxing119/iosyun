// === App Data with localStorage support ===
const STORAGE_KEY = 'iosyun_apps';
const DATA_VERSION = 6; // 改这个数字强制刷新所有用户的缓存

const defaultApps = [
  {
    "id": 1,
    "name": "Things 3",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3c/46/9c/3c469c49-4f13-ef80-f88a-cd35f9ea1a69/AppIcon-0-0-1x_U007ephone-0-0-0-1-0-0-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "¥68.00",
    "originalPrice": null,
    "isFree": false,
    "rating": 4.8,
    "reviewCount": 5053,
    "developer": "Cultured Code",
    "appStoreUrl": "https://apps.apple.com/cn/app/things-3/id904237743?uo=4",
    "size": "127 MB",
    "version": "3.22.11",
    "compatibility": "iOS 15.0+",
    "language": "中文 / 英文",
    "tags": [
      "任务管理",
      "GTD",
      "待办事项"
    ],
    "description": "屡获殊荣的任务管理应用，帮助你规划日程、管理项目，逐步实现目标。界面优雅简洁，上手迅速。",
    "screenshots": [],
    "featured": true,
    "isHot": true,
    "updatedAt": "2026-08-03",
    "slug": "things-3"
  },
  {
    "id": 2,
    "name": "Procreate",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7b/36/95/7b36957c-dc43-6e38-99e5-31ecd83ff2dd/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/512x512bb.jpg",
    "category": "设计",
    "price": "¥88.00",
    "originalPrice": null,
    "isFree": false,
    "rating": 4.2,
    "reviewCount": 35793,
    "developer": "Savage Interactive",
    "appStoreUrl": "https://apps.apple.com/cn/app/procreate/id425073498?uo=4",
    "size": "1105 MB",
    "version": "5.4.12",
    "compatibility": "iOS 16.3+",
    "language": "中文 / 英文",
    "tags": [
      "绘画",
      "插画",
      "数字艺术",
      "iPad"
    ],
    "description": "iPad 上最受欢迎的专业绘画应用，拥有数百款手工画笔、高级图层系统。",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5a/6f/3e/5a6f3ee6-8719-7020-c334-bee384f8bdd7/2.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2e/57/ce/2e57cee9-f04a-e918-e688-5d9e9af5039a/3.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5e/8e/66/5e8e66b0-525e-5c6d-a9d5-f973ebcd18ad/4.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6f/aa/3b/6faa3bfc-4927-2994-ae2a-e6942d3f2878/5.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/dd/be/ed/ddbeedac-376c-1c81-5f8a-68a34afb33f4/6.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f7/e4/bb/f7e4bb0a-46a2-d0bb-489e-b47cb6c34a5b/7.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d8/36/8f/d8368faa-2e94-1370-fac0-41d957892c96/8.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3d/45/ea/3d45ea72-3340-66ea-67a9-52b4595f545e/9.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/eb/37/6a/eb376ad0-d9c3-3cf8-c0a8-b907f7db352e/10.png/552x414bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/dd/4f/32/dd4f329e-0616-7a7d-e2c7-c994a3b78e47/11.png/552x414bb.png"
    ],
    "featured": true,
    "isHot": true,
    "updatedAt": "2026-08-04",
    "slug": "procreate"
  },
  {
    "id": 3,
    "name": "CARROT Weather",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1b/88/94/1b889460-7b24-47eb-0b76-cf53c676e31b/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-85-220.png/512x512bb.jpg",
    "category": "天气",
    "price": "免费",
    "originalPrice": "¥30",
    "isFree": true,
    "rating": 4.3,
    "reviewCount": 1012,
    "developer": "Grailr LLC",
    "appStoreUrl": "https://apps.apple.com/cn/app/carrot-%E5%A4%A9%E6%B0%94-%E9%A2%84%E8%AD%A6%E4%B8%8E%E9%9B%B7%E8%BE%BE/id961390574?uo=4",
    "size": "402 MB",
    "version": "6.7",
    "compatibility": "iOS 15.0+",
    "language": "英文",
    "tags": [
      "天气",
      "限免",
      "趣味",
      "AI"
    ],
    "description": "极具个性的天气应用，精准气象数据与幽默毒舌的 AI 播报风格。",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1a/ae/86/1aae86aa-2bbd-ae86-aedf-6bcf3ed08bd2/6561375a-42cc-4ccb-aa9b-71298cef0d58_phone-1-1_copy.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bb/57/f4/bb57f420-ac2f-d39e-a76e-f58c470bcc04/4cd4e55b-7815-4586-8e2f-bd75207a2950_phone-1-2_copy.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1f/ec/56/1fec565d-ba6a-c7a7-ef33-ec54181d6c9a/36cce7c2-2ad6-4946-82eb-b4532b41cceb_phone-1-3_copy.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c5/f2/db/c5f2dbdb-d300-5b19-e91e-14673911fea4/8baae691-6c1b-425f-86f9-2a3617b3fcea_phone-chonk-widget.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/db/f4/77/dbf47751-e7c4-4e13-f4da-eb292758e917/d7345edb-d5f1-463c-b739-8c12c0474b53_phone-chonk-notifications.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/96/d0/9f/96d09fa8-0f20-7080-7647-5bc000c05667/3008cf4a-5ef1-4125-8b3b-46b3880b5849_phone-chonk-watch.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0a/05/87/0a0587ab-5731-d8b9-f1f9-fd039cc71ea2/728544ce-ef31-454c-8543-0bc30bc7df37_phone-chonk-forecast.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0d/08/e6/0d08e64e-8db5-d8c2-187f-bd93cb24d101/ac4a3cb0-ad9e-4d7b-b12d-4a718ec816ef_phone-chonk-customization.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e8/2a/80/e82a8080-7a3e-d007-6058-0056500347a9/0a17c586-f68b-428d-bfd0-b9a0b8806bc7_phone-chonk-station.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/42/b4/f9/42b4f9e5-790b-47d8-bd40-b6973119dd81/d20982a0-ae71-4dd2-a032-c9a062912ea1_phone-chonk-fun.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "slug": "carrot-weather"
  },
  {
    "id": 4,
    "name": "Halide Mark III",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/59/08/70/5908705a-685e-3114-b80a-05f95666633c/titanium-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "摄影",
    "price": "免费",
    "originalPrice": "¥98",
    "isFree": true,
    "rating": 3.3,
    "reviewCount": 934,
    "developer": "Lux Optics",
    "appStoreUrl": "https://apps.apple.com/cn/app/halide-mark-iii-pro-camera/id885697368?uo=4",
    "size": "84 MB",
    "version": "3.1.2",
    "compatibility": "iOS 18.0+",
    "language": "英文",
    "tags": [
      "相机",
      "RAW",
      "专业摄影"
    ],
    "description": "iPhone 上最强大的专业相机应用，支持手动控制、RAW 拍摄。",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/72/03/2b/72032b4d-e4cb-74ee-c109-6ace4f9e36bf/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/de/12/c1/de12c18f-6723-072e-6b0d-ef252c8bf94e/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/80/22/c0/8022c060-c4a8-6a46-25e1-6349b37a2513/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5e/2e/d8/5e2ed843-4a28-1688-4815-e9aa96e52706/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fe/10/6e/fe106e65-81ce-16ab-309d-60294d73caa0/pr_source.png/392x696bb.png"
    ],
    "featured": true,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "slug": "halide-mark-iii"
  },
  {
    "id": 5,
    "name": "Fantastical",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cd/0f/5a/cd0f5a2a-d0ca-ab26-67bb-f8523ddcc0a0/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": "¥58",
    "isFree": true,
    "rating": 3,
    "reviewCount": 579,
    "developer": "Flexibits Inc.",
    "appStoreUrl": "https://apps.apple.com/cn/app/fantastical-calendar/id718043190?uo=4",
    "size": "182 MB",
    "version": "4.1.17",
    "compatibility": "iOS 17.6+",
    "language": "中文 / 英文",
    "tags": [
      "日历",
      "日程",
      "自然语言"
    ],
    "description": "屡获殊荣的日历应用，支持自然语言创建事件。",
    "screenshots": [],
    "featured": false,
    "isHot": true,
    "updatedAt": "2026-08-03",
    "slug": "fantastical"
  },
  {
    "id": 6,
    "name": "1Password",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/c8/21/57/c821574f-4153-3432-693a-49f96d51d2d1/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.1,
    "reviewCount": 3164,
    "developer": "AgileBits Inc.",
    "appStoreUrl": "https://apps.apple.com/cn/app/1password-password-manager/id568903335?uo=4",
    "size": "179 MB",
    "version": "7.10.2",
    "compatibility": "iOS 12.2+",
    "language": "中文 / 英文",
    "tags": [
      "密码管理",
      "安全",
      "跨平台"
    ],
    "description": "安全可靠的密码管理器，帮你记住所有密码并自动填充。",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/4c/f8/40/4cf84065-63b4-35de-bb13-06fcb0333d4f/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/a9/0f/70/a90f7062-7a4c-f1c7-737d-7028995a783f/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/7b/e5/a3/7be5a3f7-f108-060a-f4e4-25ddba8cf2c9/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/8d/b1/0e/8db10e51-39ff-66be-75ad-4b1d00b4d93e/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/2e/c1/a4/2ec1a403-592d-fc85-e219-3189117fbf19/pr_source.png/392x696bb.png"
    ],
    "featured": true,
    "isHot": false,
    "updatedAt": "2026-08-03",
    "slug": "1password"
  },
  {
    "id": 7,
    "name": "GoodNotes 6",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/37/db/7d/37db7d4b-d1b8-e8d7-da41-88c5e9e29e33/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": "¥68",
    "isFree": true,
    "rating": 4.5,
    "reviewCount": 679890,
    "developer": "Goodnotes",
    "appStoreUrl": "https://apps.apple.com/cn/app/goodnotes-ai-%E7%AC%94%E8%AE%B0-%E7%99%BD%E6%9D%BF-pdf/id1444383602?uo=4",
    "size": "955 MB",
    "version": "7.1.10",
    "compatibility": "iOS 18.6+",
    "language": "中文 / 英文",
    "tags": [
      "笔记",
      "手写",
      "PDF",
      "AI"
    ],
    "description": "备受欢迎的手写笔记应用，支持 AI 辅助书写、PDF 标注。",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/39/4a/78/394a78ce-316c-0d29-2f72-ae4e786fa1be/ASO_SC_iPhone_5.5_04.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/68/af/35/68af356f-367d-cab6-048e-ad2a46dceb05/ASO_SC_iPhone_5.5_03.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a1/55/a2/a155a215-6d24-4252-4107-e22aed103ed6/ASO_SC_iPhone_5.5_05.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/86/e3/ea/86e3eaf3-1253-2ec3-6a64-11a418ee0e8e/ASO_SC_iPhone_5.5_07.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bf/00/44/bf00446a-bf27-c222-a080-8eb23ec444a4/ASO_SC_iPhone_5.5_06.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/69/da/9a/69da9aa1-5130-3921-47e2-de69f2de15d3/ASO_SC_iPhone_5.5_09.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/50/71/fd/5071fd40-e67b-e57d-4912-531314704d32/ASO_SC_iPhone_5.5_08.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/18/8e/5e/188e5ef1-f1ba-8560-96b7-4745cf7b2aa2/ASO_SC_iPhone_5.5_10.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/96/3d/24/963d24cf-62e8-39ef-dcc9-37f93a37d315/ASO_SC_iPhone_5.5_02.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/29/73/4f/29734f67-a4cd-b244-57c0-990a7babd303/ASO_SC_iPhone_5.5_01.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": true,
    "updatedAt": "2026-08-04",
    "slug": "goodnotes-6"
  },
  {
    "id": 8,
    "name": "Pixelmator Pro",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a1/e9/19/a1e91908-afba-6b30-d789-b03300253ab2/AppIcon-0-0-85-220-0-0-5-0-2x-0-0-0.png/512x512bb.png",
    "category": "设计",
    "price": "¥328.00",
    "originalPrice": null,
    "isFree": false,
    "rating": 0,
    "reviewCount": 0,
    "developer": "Pixelmator Team",
    "appStoreUrl": "https://apps.apple.com/cn/app/pixelmator-pro/id1289583905?mt=12&uo=4",
    "size": "545 MB",
    "version": "3.8",
    "compatibility": "iOS 12.0+",
    "language": "中文 / 英文",
    "tags": [
      "图像编辑",
      "设计",
      "Mac"
    ],
    "description": "专业级颜色调整、机器学习自动增强、200+设计模板。",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ec/9a/85/ec9a8585-7af0-d465-5c0c-2412f7fd34fd/Mac_Screenshot1.png/800x500bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3f/3c/24/3f3c248a-73fe-fe1b-cba6-ebc163464b62/5989e68a-d037-40fe-a254-c7a580b6a83d_Appstore_texts__copy_2_4.png/800x500bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c5/44/e2/c544e2db-aa34-810b-e4d3-3c211ee818a4/Mac_Screenshot3.png/800x500bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/98/57/e9/9857e92c-bfe8-8461-3428-3427caa88258/Mac_Screenshot4.png/800x500bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f9/55/a9/f955a90d-f594-34b6-63cd-84b4e2fcddc3/Mac_Screenshot5.png/800x500bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2d/db/2f/2ddb2f17-5478-bd79-5214-177f6e09e6ae/dc350e99-4aa5-4724-9c37-9f740be6d1dd_Appstore_texts__copy_2_5.png/800x500bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0c/fc/71/0cfc7108-e510-084a-a2be-e3357a446284/Mac_Screenshot7.png/800x500bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/11/5d/1e/115d1e1f-acb0-4f96-b382-bee5aa432c70/Pro_Typography.png/800x500bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c8/1c/19/c81c192e-956d-454d-0704-7bb4178392e1/7980bca3-6549-4f87-b470-b180870d3d81_Appstore_texts__copy_9.png/800x500bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-01",
    "slug": "pixelmator-pro"
  },
  {
    "id": 9,
    "name": "Dark Noise",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/45/b5/8c/45b58ca4-e35e-6bf9-117d-b3d175bb046f/dark-noise-primary-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": "¥30",
    "isFree": true,
    "rating": 4.8,
    "reviewCount": 64,
    "developer": "Charlie Chapman",
    "appStoreUrl": "https://apps.apple.com/cn/app/dark-noise-ambient-sounds/id1465439395?uo=4",
    "size": "401 MB",
    "version": "3.5.2",
    "compatibility": "iOS 16.0+",
    "language": "英文",
    "tags": [
      "白噪音",
      "专注",
      "睡眠"
    ],
    "description": "简洁优雅的环绕噪声应用，50+高品质音效和精美动画。",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3e/0e/4b/3e0e4bed-478e-ab6b-e15b-202a02a50e38/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/ba/ad/13baadc7-4692-f23e-d1bf-99e8f27bd91c/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/85/35/a1/8535a1a4-d52c-8a9c-d1c2-2e31d58c62b9/268c2fb4-ab55-4967-ac5a-70a7094566bf_screenshot_iphone_6s_03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/14/81/c8/1481c8b0-3398-a770-2a6a-9391e2231e64/b0c64921-83a0-480e-b3e5-8607af2db5a7_screenshot_iphone_6s_04.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/15/01/97/150197c7-9b1c-8fae-c101-c39778aa7468/30e8913e-5ea7-4e15-b72b-9b59a2f42ff5_screenshot_iphone_6s_06.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/46/e1/18/46e1180e-c364-6771-f8a1-65e55b234b67/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/9b/9a/f29b9a8f-c951-f207-11f1-049119c32496/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/48/fa/2d/48fa2d51-2fdb-57c1-efb2-2012ecad078d/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "slug": "dark-noise"
  },
  {
    "id": 10,
    "name": "Reeder 5",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5f/3e/d4/5f3ed4e2-9ada-1102-af29-1c9bf490cb71/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "$4.99",
    "originalPrice": null,
    "isFree": false,
    "rating": 4.1,
    "reviewCount": 821,
    "developer": "Silvio Rizzi",
    "appStoreUrl": "https://apps.apple.com/us/app/reeder-classic/id1529445840?uo=4",
    "size": "24 MB",
    "version": "5.5.1",
    "compatibility": "iOS 14.0+",
    "language": "英文",
    "tags": [
      "RSS",
      "阅读"
    ],
    "description": "经典 RSS 阅读器，支持 iCloud 同步和 Bionic Reading 模式。",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/65/4e/af/654eaff2-7357-da40-dfb4-1c805ff9cef1/ff0adb62-0156-40bb-b922-0d2983e08cdb_Feeds.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/0b/ac/e7/0bace776-d922-7d5a-d11d-9e163132f4f8/7d2337af-db29-4283-8e52-3a6ea7bc847f_List.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/ba/7a/25/ba7a259d-3bc7-d3b6-8b09-eca8e240e81f/b3f65793-c312-4bcb-abc0-5fe8f31e78ce_Article.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/ef/f6/07/eff6078d-8037-9e02-fb1e-5256e2981a38/bb035be6-2ab6-42ab-b845-161e1595daff_BR.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/e5/d0/31/e5d0319d-f2e7-2446-206c-489efe0317aa/da22e710-5619-4b32-b27e-14590e6c3cd8_Feeds-dark.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/0e/7a/40/0e7a40da-198c-858b-1904-140b0ca09975/dbfb256c-0eff-4433-bfec-ea6b6c8b0be0_List-dark.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/5e/ad/9d/5ead9d1c-7abc-8a40-f82b-fdcf22a0ad04/d9976027-171a-4813-b5ea-8e713176e722_Article-dark.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/7a/22/3c/7a223c3e-443a-5a09-c4ba-c8379093ffc4/92500fdf-79cb-4edc-ad92-c5ef18cc43a4_BR-dark.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-03",
    "slug": "reeder-5"
  },
  {
    "name": "番茄ToDo-极简高效自律番茄钟",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/40/c3/8040c357-86e9-ac62-ece0-0ac6b24a0717/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 934766,
    "developer": "Shanghai Paitui Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%95%AA%E8%8C%84todo-%E6%9E%81%E7%AE%80%E9%AB%98%E6%95%88%E8%87%AA%E5%BE%8B%E7%95%AA%E8%8C%84%E9%92%9F/id1242689729?uo=4",
    "size": "192 MB",
    "version": "8.12.57",
    "compatibility": "iOS 13.0+",
    "language": "中文",
    "tags": [
      "番茄钟",
      "时间管理",
      "自律",
      "专注"
    ],
    "description": "极简清新强大的学霸模式&番茄工作法&习惯养成工具，保持专注，拒绝低头族。 ==学霸都在用的专注神器== 学霸模式：帮你暂时远离手机，抵制分心，专注当下。配合优美的白噪音在强大心流中高效学习工作 量化习惯管理：使用计时器量化你的每日习惯，完成一万小时计划很真的简单 强制提醒：一直不间断提醒到您完成所计",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4e/95/d7/4e95d79b-655c-8436-cc90-38ce2dddd31f/1be95394-9dd0-49b6-9663-d342288255d7_1242_2208_P1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f9/12/ad/f912ad0a-1cf7-9e44-5bcb-d9288d5a0981/13ca0e1f-215f-4ff5-b464-06fd44551abc_1242_2208_P2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b7/fc/03/b7fc030a-cc7a-0955-85e7-1bf10215df16/c5db3fb9-5ed2-4c33-bd97-65ffec31fab8_1242_2208_P3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/74/bc/bb/74bcbb28-f6d3-8994-e877-ebba2f33052f/afc74417-77f2-491c-a27d-dcda5f760436_1242_2208_P4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a9/f1/31/a9f131bd-e044-f97b-f493-10ff08600e13/8bf17896-5fbd-4fa4-9363-9d89177f0e79_1242_2208_P5.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/89/f6/3c/89f63cd4-fca9-ece6-c3bc-3c7a4b1d09e5/ed01ca1d-beb6-44e1-bcf9-de2efda828ae_1242_2208_P8.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8b/05/c4/8b05c4fc-6ce5-93b0-9a24-0512a0fe37fc/9c525fb3-0f0e-4a9e-85f3-ab28dda0fe15_1242_2208_P7.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2e/20/78/2e207819-05f4-09ed-5743-06360485f781/9ceff244-52b0-4957-a1fd-7757b94e6317_1242_2208_P6.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 11,
    "slug": "番茄todo-极简高效自律番茄钟"
  },
  {
    "name": "我要做计划-时间管理＆学习打卡＆工作计划清单",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b9/c0/84/b9c0843d-5313-541c-c307-39982f455f58/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.8,
    "reviewCount": 77167,
    "developer": "Chongqing Caochen Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%88%91%E8%A6%81%E5%81%9A%E8%AE%A1%E5%88%92-%E6%97%B6%E9%97%B4%E7%AE%A1%E7%90%86-%E5%AD%A6%E4%B9%A0%E6%89%93%E5%8D%A1-%E5%B7%A5%E4%BD%9C%E8%AE%A1%E5%88%92%E6%B8%85%E5%8D%95/id1623308204?uo=4",
    "size": "316 MB",
    "version": "5.6.9",
    "compatibility": "iOS 15.0+",
    "language": "中文",
    "tags": [
      "任务管理",
      "计划",
      "打卡",
      "日程"
    ],
    "description": "【我要做计划】内设计划表、番茄钟、笔记、日程视图、小组件、日历、倒数日、待办事项清单等多项实用必备效率功能，无论是制定项目计划、管理行程日程，亦或是专注学习高效工作，皆能让你轻松上手得心应手。 【我要做计划】揽获多类荣誉奖项，多次获得Appstore精品推荐及编辑推荐，获选Vivo【极光奖】、opp",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/32/7b/fc/327bfcc1-24e0-455e-f370-229668cf110c/63d3fae0-a9f0-42b6-be79-efbb07ddecf9__U753b_U677f_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fc/13/06/fc1306c5-d9f6-1355-8ee1-b36d01378cd5/50bf943e-94cc-4078-9e77-9b270d7e212e_1242_2208-01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b6/d6/66/b6d66645-e741-6157-8619-3e1bcead9842/51ac7258-55b2-46c4-8f9e-0be816abee7c__U753b_U677f_8.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/97/5d/c3/975dc387-a5a6-83dc-299f-a83151357063/1242_2208-01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/36/3e/37/363e37df-9a04-e180-0ee0-90ba48d669e5/33d0602a-7726-4be3-bc41-730219d8e05c_1242_2208-01-2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/12/52/58/1252584c-d7d7-5edc-a1c2-a4f1dc0f0dca/cd67c0e7-d7f0-4959-b558-bacc1624c215__U753b_U677f_6.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/44/1a/6d/441a6d7f-6c8c-0434-b899-3d85f2338887/bdb27048-f21f-409e-aecc-a510a9594a05__U753b_U677f_5.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b2/49/95/b2499573-3fe1-ac20-6848-8e9432f9791a/62b75634-cb58-480a-914c-773d52b3aa91__U753b_U677f_10.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ae/8c/fa/ae8cfa89-8dcf-204e-bbbd-f4a1fae8d09f/4012e87c-eddc-40a6-a18e-1c982f4600f0_1242_2208-01-1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d7/b8/2d/d7b82d35-a6bb-7c04-e2d2-f8b297052f31/c6daccb8-a985-4a63-bfc6-9ee960ad10ad__U753b_U677f_9.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 12,
    "slug": "我要做计划-时间管理-学习打卡-工作计划清单"
  },
  {
    "name": "极简待办:日程安排 计划清单 提醒事项管理 便签备忘录记事本",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/61/0f/96/610f96da-acfe-d1de-da74-c693b3ee2128/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 115157,
    "developer": "InnerGrow",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%9E%81%E7%AE%80%E5%BE%85%E5%8A%9E-%E6%97%A5%E7%A8%8B%E5%AE%89%E6%8E%92-%E8%AE%A1%E5%88%92%E6%B8%85%E5%8D%95-%E6%8F%90%E9%86%92%E4%BA%8B%E9%A1%B9%E7%AE%A1%E7%90%86-%E4%BE%BF%E7%AD%BE%E5%A4%87%E5%BF%98%E5%BD%95%E8%AE%B0%E4%BA%8B%E6%9C%AC/id993066159?uo=4",
    "size": "116 MB",
    "version": "2.25.19",
    "compatibility": "iOS 14.0+",
    "language": "中文",
    "tags": [
      "待办清单",
      "提醒",
      "GTD",
      "极简"
    ],
    "description": "极简待办，App Store 首页推荐。 极简待办，一个轻量而高效的待办事项(Todo) 、日程管理(GTD) 和事项提醒工具。它可以帮您制定工作计划，日程安排管理，高效完成各项任务。它集待办清单、便签 、备忘录、事项提醒、番茄钟、时间管理、多人协同工具等为一体，提高您的效率。 「极简待办 更高效」",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f7/54/04/f7540445-a176-7ea8-e2c1-e21a81b5b608/364786c9-6aa4-46b6-9036-b7b007ae89dd_1__U62f7_U8d1d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/17/5d/cb/175dcb91-88dc-d175-e5a4-8779fd1f8c3e/754b675a-818a-47dc-9b10-bdedb9263769_2__U62f7_U8d1d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4d/f4/6b/4df46b45-c021-9511-4ddc-f708b449358f/d214d416-63c3-4758-9a86-205cfdbf5a71_4__U62f7_U8d1d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/64/89/9f/64899ff7-9136-b437-4747-85ebafc3be70/e7ea113b-8b7f-4334-b3cb-5ba694f85ea3_6__U62f7_U8d1d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/09/99/43/099943b6-7eee-951b-a228-48177d28c6af/433efe93-c84e-4cde-9d9a-05d0497275d6_3__U62f7_U8d1d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d5/c1/97/d5c1972f-e490-e00c-1a7a-a39e1710d161/88944f76-4d4f-44b8-b7e0-ab1b2a2dcc37_7__U62f7_U8d1d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9d/b2/6d/9db26d0f-0548-b796-7e04-eb75c480e296/41a123dd-d85d-4087-ab0e-05b151708930_5__U62f7_U8d1d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ba/ab/fb/baabfb0f-26b9-aa0f-6291-144ccb211f75/fdd5cef6-055a-45fb-a9fb-ba40c3877feb_8__U62f7_U8d1d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3a/98/80/3a9880e5-07af-d7fa-5c19-f9b74da514c0/c5a626e9-3b96-4357-93e8-bc1edf48a7fe_9__U62f7_U8d1d.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 13,
    "slug": "极简待办-日程安排-计划清单-提醒事项管理-便签备忘录记事本"
  },
  {
    "name": "指尖时光-日程计划&日历记事&目标打卡",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/99/0e/a1/990ea17f-f64c-0504-c0ca-e864c1a34fc5/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.8,
    "reviewCount": 156187,
    "developer": "Beijing Fingertip Fusion Technology Co., LTD",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%8C%87%E5%B0%96%E6%97%B6%E5%85%89-%E6%97%A5%E7%A8%8B%E8%AE%A1%E5%88%92-%E6%97%A5%E5%8E%86%E8%AE%B0%E4%BA%8B-%E7%9B%AE%E6%A0%87%E6%89%93%E5%8D%A1/id1392166974?uo=4",
    "size": "338 MB",
    "version": "9.1.18",
    "compatibility": "iOS 14.0+",
    "language": "中文",
    "tags": [
      "日程计划",
      "日历",
      "打卡",
      "时间管理"
    ],
    "description": "「指尖时光」你的智能GTD伙伴，轻松捕捉灵感，高效执行任务。 是否感觉时间总在不经意间流逝，计划满满却效率低下？「指尖时光」是一款为你量身打造的极简时间管理与个人成长伙伴。我们相信，改变始于记录，成功源于专注。它将通过优雅的设计和强大的功能，帮助你夺回时间的主导权，告别拖延，拥抱高效与自律。  【 ",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/71/1d/ae711d2c-63cd-0c43-5a68-a5baf7115c4f/4aeaaa74-9030-4386-aeaa-3b6adfb34838_1242-2208-1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a9/95/bc/a995bce1-26b6-0eb5-9cc3-8829003a72a4/fb01ba53-59c1-4877-af82-4e66bed7e855_1242-2208-2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b9/83/7b/b9837b05-ca02-2bda-180c-c6dc8f3bce3d/f6a9d594-852b-40dd-9003-0de4facf6e65_1242-2208-3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/31/26/5c/31265c2e-f4b1-5460-d4e9-8c720b2bef70/81f8525e-f818-432e-9ad1-08d488cf647c_1242-2208-4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/79/98/b2/7998b265-2afb-9555-cec5-d61ee51f7832/adb1b1b7-246a-41d9-88d8-c62ed0c66dd8_1242-2208-5.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1a/1e/bd/1a1ebdcd-d324-dc6a-6df2-757f3dda831c/f1b60368-330e-4b7c-8580-c10e15fa84ec_1242-2208-6.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/23/79/51/23795122-f9a5-6edf-5f70-71ec6b85d30e/a97cc7f6-974c-493e-b6b9-2e26c422fda1_1242-2208-7.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d5/44/ee/d544eefa-a8b7-ee2d-97e7-df0541c05411/c64fdea6-ff5b-4c2f-b89a-317fcfd14cf9_1242-2208-8.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/27/dc/98/27dc9836-9d5c-e9a2-a45c-65d0d16e2b00/2e7c785f-4a3b-4b7f-a390-fbc993271b20_1242-2208-9.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 14,
    "slug": "指尖时光-日程计划-日历记事-目标打卡"
  },
  {
    "name": "幕布 - 大纲笔记&思维导图",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7e/86/60/7e8660dc-9f4e-a596-44c2-cba213a7949a/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 249530,
    "developer": "Shenzhen Shilihu Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%B9%95%E5%B8%83-%E5%A4%A7%E7%BA%B2%E7%AC%94%E8%AE%B0-%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE/id1214302139?uo=4",
    "size": "80 MB",
    "version": "4.0.3",
    "compatibility": "iOS 15.0+",
    "language": "中文",
    "tags": [
      "大纲笔记",
      "思维导图",
      "知识管理"
    ],
    "description": "幕布是一款清单式的笔记工具，用更高效的方式和清晰的结构来记录笔记、管理任务、制定工作计划、头脑风暴。帮助你在记录内容的同时，掌握结构化的思维方式，清晰的梳理出内容的脉络，加深头脑印象。  幕布能做什么？  #写笔记 没整理过的内容怎能叫笔记？幕布通过树形结构来组织内容，让笔记更有条理性。写好笔记，并",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 15,
    "slug": "幕布-大纲笔记-思维导图"
  },
  {
    "name": "豆包 - 随时帮忙的 AI 助手",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/71/98/49/719849ba-8749-40fc-a864-d360dd8a54a7/AppIcon-0-0-1x_U007epad-0-8-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.7,
    "reviewCount": 3392104,
    "developer": "Beijing Chuntian Zhiyun Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672?uo=4",
    "size": "832 MB",
    "version": "14.4.0",
    "compatibility": "iOS 15.0+",
    "language": "中文",
    "tags": [
      "AI助手",
      "智能对话",
      "写作",
      "翻译"
    ],
    "description": "豆包是随时帮忙的 AI 助手。看不懂的信息它能解释，遇到疑问随时提问，想做一道菜、了解新概念或获取灵感，都能快速得到清晰答案；无论是查资料、规划出行还是安排生活，豆包都能抓住重点，把复杂问题变简单。  在学习和工作中，豆包可以讲解题目、批改作业、拆解知识点，也能总结资料、分析数据、写代码，并生成文档",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 16,
    "slug": "豆包-随时帮忙的-ai-助手"
  },
  {
    "name": "汽水音乐 - 随时听好歌",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/36/26/84/36268445-4cd9-2482-e1c6-6ec70c61d5be/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.8,
    "reviewCount": 510173,
    "developer": "Beijing Douyin Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%B1%BD%E6%B0%B4%E9%9F%B3%E4%B9%90-%E9%9A%8F%E6%97%B6%E5%90%AC%E5%A5%BD%E6%AD%8C/id1605585211?uo=4",
    "size": "420 MB",
    "version": "20.4.0",
    "compatibility": "iOS 13.0+",
    "language": "中文",
    "tags": [
      "音乐",
      "推荐",
      "播放器"
    ],
    "description": "【汽水音乐】抖音出品官方音乐app，让音乐更懂你。  - 个性推荐，发现小众好歌 发现好音乐不再是难题。根据你和品味相似的人的听歌偏好，为你推荐感兴趣的歌曲，拒绝千篇一律，让音乐更懂你。  - 场景音乐&分类电台，随时找到你想听的音乐 学习/运动/打游戏/通勤途中时想听歌？想听嘻哈/摇滚/电音/R&",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4a/cf/06/4acf06da-c0ee-fdb7-e30e-a7323258ae51/oYIhI3AKEiEpNUAgSRzZKBEBhAYrB6AfQBkiAk.jpg/576x768bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/65/27/76/6527765c-dca3-e474-8a72-71f93ff68249/o0EKJnAeCAtEzR7YACAAsqRfDVPgZFEDAVCCxk.jpg/576x768bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/61/db/09/61db094c-1907-7dda-6103-cb66af747a15/okAA0OiAEgQzhchfPRiBKJApjEIPLZBIBBSkAw.jpg/576x768bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2d/5b/c6/2d5bc6a4-fd88-0b7f-cefd-ef37ef1156f6/oYAfSiIlBELkPB0IANRghbAOAIiZhzMBQABKES.jpg/576x768bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 17,
    "slug": "汽水音乐-随时听好歌"
  },
  {
    "name": "红果短剧 - 海量热门短剧随心看",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/25/37/962537c1-794a-7c2a-8082-8114f472fbb3/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.7,
    "reviewCount": 6595548,
    "developer": "Beijing Bimo Liuxiang Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7-%E6%B5%B7%E9%87%8F%E7%83%AD%E9%97%A8%E7%9F%AD%E5%89%A7%E9%9A%8F%E5%BF%83%E7%9C%8B/id6451407032?uo=4",
    "size": "627 MB",
    "version": "7.3.1",
    "compatibility": "iOS 14.0+",
    "language": "中文",
    "tags": [
      "短剧",
      "视频",
      "娱乐"
    ],
    "description": "【抖音旗下】 红果短剧（HONGGUO™ SHORT DRAMA）是抖音集团推出的免费看剧产品，致力于为用户提供海量免费优质短剧。免费好剧，尽在红果！  【产品形态 】 产品定位：以提供海量免费优质短剧资源为主，同时包含电影、电视剧、小说、有声书、漫画等多元内容，满足不同用户的多样化娱乐需求 - 海",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 18,
    "slug": "红果短剧-海量热门短剧随心看"
  },
  {
    "name": "自由笔记",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/83/db/25/83db25fb-b10a-3b51-70da-8098ce3139a8/AppIcon-0-0-1x_U007epad-0-1-0-P3-0-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 408042,
    "developer": "Free Notes AI Note Taker LTD",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%87%AA%E7%94%B1%E7%AC%94%E8%AE%B0/id6464237904?uo=4",
    "size": "634 MB",
    "version": "3.43.0",
    "compatibility": "iOS 15.5+",
    "language": "中文",
    "tags": [
      "笔记",
      "学习",
      "阅读",
      "PDF"
    ],
    "description": "与自由笔记一起，体验无纸化的乐趣，真正做到享受书写+高效学习。  真实书写和便捷工具 真实笔触： 在不同笔刷参数调节下，呈现逼真的笔触效果，带来数字平台上如同纸上书写的自然体验。 快捷操作： 你可以涂抹删除不需要的字迹；通过图形拟合功能，随手画出直线、圆形、矩形。 实用工具： 手写转文本、套索、尺子",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/14/f0/77/14f07770-43f8-50c2-e4e0-2cdb5c70c267/add115f3-6d24-4672-8637-d7982bdc9fb2_plus1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/dd/30/39/dd3039cc-4401-b269-5742-d12ddd475891/fd87d10f-f967-4a17-9423-da9946fb6956_plus2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/38/92/bd/3892bd96-8e3e-f6d6-682b-d39618f423d4/18b64464-6210-4c2f-b0ad-730a7c01eb33_plus4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f9/fe/dd/f9fedd9b-c4e2-3626-2983-ad65fe047908/9f3d81d1-c631-4c42-b050-de9d5733b58b_plus3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8c/32/c5/8c32c5eb-2ea8-dbd3-6b2e-61a4fc0cae14/5f97c8ae-71a6-4504-bb87-06600b096bce_plus5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 19,
    "slug": "自由笔记"
  },
  {
    "name": "Notability: 笔记, PDF",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/79/7a/cf/797acfe8-df75-47ed-b46b-8d59fa53f91a/AppIcon-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.3,
    "reviewCount": 622298,
    "developer": "Ginger Labs",
    "appStoreUrl": "https://apps.apple.com/cn/app/notability-%E7%AC%94%E8%AE%B0-pdf/id360593530?uo=4",
    "size": "397 MB",
    "version": "16.8",
    "compatibility": "iOS 17.0+",
    "language": "中文",
    "tags": [
      "笔记",
      "手写",
      "PDF标注",
      "录音"
    ],
    "description": "用 Notability实现创想！免费下载，享受强大但简约的笔记体验。您很快就会明白为什么我们会荣获 Apple 编辑选择奖！   新品:Notability 经典版回归 更喜欢一次性付费使用 Notability?我们的经典版是无需订阅的一次性购买方案。   正如您一样，Notability 也多",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/44/c6/fb/44c6fb63-7faa-2727-9021-54e7b2b23f73/1-iPhone55-CN.Simplified.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c5/65/a2/c565a219-f584-8e63-c564-239d68153ac9/2-iPhone55-CN.Simplified.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/34/74/61/34746151-07bd-1f68-000b-2addf2007378/3-iPhone55-CN.Simplified.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0f/3d/bc/0f3dbc01-c845-ba50-388a-257e4cc9e4a3/4-iPhone55-CN.Simplified.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/68/92/fd/6892fd80-420a-925e-da27-613ff2364a91/5-iPhone55-CN.Simplified.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f2/04/9d/f2049d3f-2773-d503-9388-9a31d1bba808/6-iPhone55-CN.Simplified.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 20,
    "slug": "notability-笔记-pdf"
  },
  {
    "name": "有道云笔记-笔记扫描效率办公",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bc/8a/a7/bc8aa71d-6e7f-af8e-bf6d-520bed81d198/AppIcon-0-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.7,
    "reviewCount": 66519,
    "developer": "杭州网易竹邮科技有限公司",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%9C%89%E9%81%93%E4%BA%91%E7%AC%94%E8%AE%B0-%E7%AC%94%E8%AE%B0%E6%89%AB%E6%8F%8F%E6%95%88%E7%8E%87%E5%8A%9E%E5%85%AC/id450748070?uo=4",
    "size": "475 MB",
    "version": "7.5.752",
    "compatibility": "iOS 13.0+",
    "language": "中文",
    "tags": [
      "笔记",
      "扫描",
      "云同步",
      "协作"
    ],
    "description": "有道云笔记是一款多平台记录工具，通过扫描、语音、Markdown、收藏等记录方式，为亿万优秀用户提供助力。 AI工具赋能内容创作，写作、脑暴、润色、提炼、翻译等一键搞定，让工作学习效率倍增。 桌面端All-in-One编辑器支持在一篇笔记中同时插入脑图、流程图和白板，化繁为简，提升效率。 免费3G存",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bd/b4/e6/bdb4e6b4-c234-d96d-3f8d-490333719aa4/1242_2208.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9f/9c/1f/9f9c1fd5-8b1f-cbc9-a3a3-bc8fbc7084c2/1242_2208-1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/09/26/6d/09266db3-fb56-c182-df19-5bf987bf44ec/1242_2208-2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/2b/17/48/2b174847-52fd-882f-0bd8-e5f3c44767e3/1242_2208-3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/90/cc/52/90cc526f-4e7a-0fa8-0357-03090994df5b/1242_2208-4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1b/80/31/1b8031f9-6b66-70e0-62ac-4423305b8233/1242_2208-5.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 21,
    "slug": "有道云笔记-笔记扫描效率办公"
  },
  {
    "name": "Berry胶片相机 - 韩系自拍神器",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/62/7d/2b/627d2b7d-189b-7ac5-527c-3e31472fec3d/berryfilm-0-0-1x_U007ephone-0-1-sRGB-85-220.png/512x512bb.jpg",
    "category": "摄影",
    "price": "¥15.00",
    "originalPrice": null,
    "isFree": false,
    "rating": 4.9,
    "reviewCount": 1785,
    "developer": "Seungyun Kim",
    "appStoreUrl": "https://apps.apple.com/cn/app/berry%E8%83%B6%E7%89%87%E7%9B%B8%E6%9C%BA-%E9%9F%A9%E7%B3%BB%E8%87%AA%E6%8B%8D%E7%A5%9E%E5%99%A8/id6741474933?uo=4",
    "size": "73 MB",
    "version": "1.3.35",
    "compatibility": "iOS 15.0+",
    "language": "中文",
    "tags": [
      "胶片相机",
      "自拍",
      "复古",
      "滤镜"
    ],
    "description": "大家好，我是 Berry，来自韩国的滤镜创作者。 也许你认识我，是通过 Instagram 账号 @berryveryloveyou。 我曾在社交媒体上分享过很多滤镜，但如今它们已经无法使用。 为了守护我在过去五年中倾注心血制作的滤镜， 我创建了这个专属空间：BerryFilm。  我会定期更新新的",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 22,
    "slug": "berry胶片相机-韩系自拍神器"
  },
  {
    "name": "航旅纵横PRO-民航官方直销平台",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/35/fc/69/35fc690f-ffb7-f014-3d0a-f6b5ec3af329/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "¥1.00",
    "originalPrice": null,
    "isFree": false,
    "rating": 4.7,
    "reviewCount": 51341,
    "developer": "China Travelsky Technology Limited",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%88%AA%E6%97%85%E7%BA%B5%E6%A8%AApro-%E6%B0%91%E8%88%AA%E5%AE%98%E6%96%B9%E7%9B%B4%E9%94%80%E5%B9%B3%E5%8F%B0/id768160271?uo=4",
    "size": "325 MB",
    "version": "8.5.8",
    "compatibility": "iOS 12.0+",
    "language": "中文",
    "tags": [
      "航班",
      "出行",
      "值机"
    ],
    "description": "航旅纵横，伴你出行每一程 我们是国家队：中国民航信息官方出品，民航版“12306”。 我们只提供权威、及时、精确、全面的航班、机票、机场信息。  【您想不到的功能我们有】 民航官方直销平台：来这买源头机票，0差价·0捆绑·0套路 自动导入行程：无须您手动添加，行程自动跳到碗里来 3D飞行视频：连接你",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 23,
    "slug": "航旅纵横pro-民航官方直销平台"
  },
  {
    "name": "扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/f1/97/22f1975d-adfc-dd01-16d4-6cee2e076e20/AppIconPlus-0-1x_U007emarketing-0-6-0-0-sRGB-85-220-0.png/512x512bb.jpg",
    "category": "工具",
    "price": "¥1.00",
    "originalPrice": null,
    "isFree": false,
    "rating": 4.9,
    "reviewCount": 98298,
    "developer": "Linguan Data",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%89%AB%E6%8F%8F%E5%85%A8%E8%83%BD%E7%8E%8B-%E5%AE%98%E6%96%B9%E5%87%BA%E5%93%811%E5%85%83%E7%95%85%E7%94%A8%E7%89%88-%E6%89%AB%E6%8F%8Fpdf%E6%96%87%E4%BB%B6-%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB/id388624839?uo=4",
    "size": "228 MB",
    "version": "5.27.1",
    "compatibility": "iOS 12.0+",
    "language": "中文",
    "tags": [
      "扫描",
      "OCR",
      "PDF",
      "文档"
    ],
    "description": "扫描全能王是一款集文件扫描、图片文字提取识别、PDF 内容编辑、PDF 分割合并、PDF 转 Word、电子签名等功能于一体的智能扫描软件。自动扫描，生成高清扫描件，支持JPEG、PDF 等多格式保存，还能将扫描件一键转换为 Word/ Excel/ PPT 等多种格式文档，通过手机、平板电脑、电脑",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/0a/02/5d/0a025d87-0717-f230-7a6c-37d857420a0a/7f83901c-5273-4344-916d-857c770c1fda_9.__U7b80_U4f53_U4e2d_U65875.5-1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/9b/8e/d2/9b8ed2f7-ee0e-9c10-3b78-91bc3b594dc8/350a759c-a74c-478c-84c4-433f45905095_9.__U7b80_U4f53_U4e2d_U65875.5-2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/72/63/9d/72639db9-97fe-adff-dc5b-e95a29f5edd7/0ffd2170-a1ee-4394-bce1-dfd8012f8ae0_9.__U7b80_U4f53_U4e2d_U65875.5-3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/bd/d9/ee/bdd9eefd-f568-9796-a42d-ccd454053c19/424b1fb3-4fb0-4626-a3b3-4567bdf207e1_9.__U7b80_U4f53_U4e2d_U65875.5-5.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/3d/8c/ad/3d8cadd5-bbb2-22dc-3dd7-cd4e425123a6/ed0a4c47-59dc-4ac5-8520-8ad8f8829721_9.__U7b80_U4f53_U4e2d_U65875.5-6.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 24,
    "slug": "扫描全能王-官方出品1元畅用版-扫描pdf文件-文字识别"
  },
  {
    "name": "同花顺至尊版-股票软件",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/97/f4/1e/97f41e27-5f68-f412-8656-101a94e2bf74/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "¥1.00",
    "originalPrice": null,
    "isFree": false,
    "rating": 4.9,
    "reviewCount": 121246,
    "developer": "Zhejiang Royalflush Cloud Software Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%90%8C%E8%8A%B1%E9%A1%BA%E8%87%B3%E5%B0%8A%E7%89%88-%E8%82%A1%E7%A5%A8%E8%BD%AF%E4%BB%B6/id954724812?uo=4",
    "size": "364 MB",
    "version": "12.09.00",
    "compatibility": "iOS 13.0+",
    "language": "中文",
    "tags": [
      "股票",
      "投资",
      "行情"
    ],
    "description": "【炒股就用同花顺】 我们为您提供智能投资服务，以及沪深港美全球实时高速行情，精选股市热点资讯、基金理财等。投资全球，就用同花顺！   【爆款功能】  【√ 】神奇九转：分时、K线神奇九转，为您找到股价拐点，轻松做T。  【√ 】智能盯盘：实时异动推送、股价预警、大事提醒帮您轻松盯盘。  【√ 】走势",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a6/00/8e/a6008e9b-cca3-7e0e-3f60-33f229fe070f/ece3fa45-5d6d-4e2d-a7a0-6c589c3824f0_1242x2208_03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ba/e5/e6/bae5e6b7-88a0-603e-6bea-053b1304314a/_U4e00_U952e_U9009_U80a11242.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/83/e5/34/83e5345c-f4b1-267f-4c68-1e08bf2e3a18/_U9ad8_U6548_U770b_U76d81242.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/de/58/c0/de58c09f-e348-74e4-a650-51a17678e4fb/5ec43c6f-3ec3-410b-95d6-3cc68725e7c6_1242x2208_09.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/54/67/54/546754b0-41db-0db6-17ac-bfcdf8801d11/16004a88-d59f-4cda-b8da-7b8cf94168ec_1242x2208_07.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/46/78/c3467888-5461-4020-2503-3a564abc8ca5/a34d2623-0005-484e-8c1e-840be328a093_1242x2208_08.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/78/40/8e/78408ef1-8ba9-b8ab-3192-47ad0102d3da/_U770b_U4e3b_U529b_U8d44_U91d11242.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04",
    "id": 25,
    "slug": "同花顺至尊版-股票软件"
  },
  {
    "id": 26,
    "slug": "老板食神-你的ai烹饪伙伴",
    "name": "老板食神 - 你的AI烹饪伙伴",
    "desc": "老板食神 —— 你的 AI 烹饪伙伴 海量精选菜谱 · 动态烹饪导航 · 实时教学陪伴，让烹饪成为日常享受  不知道做什么菜，担心做不好？老板食神来帮你！老板食神借力首个AI烹饪大模型，深度打通从\"想做什么\"到\"完美出锅\"的烹饪全过程，为您提供精准、简单、不翻车的菜谱与烹饪解决方案。汇聚海量精选菜谱，食神通过日常点滴交流更懂你的口味偏好和食材偏好，每一步烹饪过程都有清晰陪伴，帮您答疑解惑，让烹饪更从容、更高效。  核心功能亮点 —— 从灵感到出锅，全程护航 汇聚海量图文并茂精美菜谱，懂口味、知时令，帮你选好菜做好饭。小众菜谱食神也能帮你随心生成，简单对话更能调整适合自己的菜谱。口味南来北往、食",
    "category": "Food & Drink",
    "price": "免费",
    "originalPrice": null,
    "rating": 3.7,
    "reviewCount": 243,
    "platform": "iPhone / iPad",
    "tags": [
      "老板食神"
    ],
    "screenshots": [],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%80%81%E6%9D%BF%E9%A3%9F%E7%A5%9E-%E4%BD%A0%E7%9A%84ai%E7%83%B9%E9%A5%AA%E4%BC%99%E4%BC%B4/id972641888?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/54/f9/dd/54f9dd9d-90f3-ca5a-3b5c-f5784451b824/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg",
    "developer": "Hangzhou Robam Industrial Group Co., Ltd",
    "updatedAt": "2026-08-04",
    "version": "6.3.3",
    "size": "231 MB",
    "compatibility": "iOS 14.0+"
  },
  {
    "id": 27,
    "slug": "天天爱烹饪",
    "name": "天天爱烹饪",
    "desc": "天天爱烹饪（烹饪达人）  完成有挑战的美味订单、升级厨房并成为烹饪达人！   天天爱烹饪（烹饪达人）是一个在经典美式餐厅中出售汉堡、培根三明治、薯条和奶昔的游戏！你能够快速的做好食物并端给你的顾客吗？ 我们全新的餐厅开张了！带着制作最美味汉堡以及赚大钱的梦想，你要有条不紊地制作出各类美食满足顾客，升级厨具和食物原料，装潢餐厅，并开出许多的分店成为汉堡大师！  全方位升级餐馆 手速要快！顾客等的时间越短，给的小费越多哦！如果能给他们餐后甜点小蛋糕就更完美了！用收入来升级你的厨房用具和食物原料，并且升级餐厅的各类装饰，这样就能争取到更多顾客和更多钞票！此外，购买了全自动烹饪机器的你在厨房会更加得心",
    "category": "Games",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 65733,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/df/4e/5e/df4e5edd-e351-5c9b-8295-cd48cadfd57b/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/28/b7/5c/28b75c96-306c-2601-a411-521c6a9afab2/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/84/f0/03/84f0035a-276a-415f-aff3-04df6cc8c581/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/0c/27/b9/0c27b9af-d870-066a-34de-9ca231efab62/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/78/aa/dc/78aadcc3-74bf-b2e5-595c-c70e972e8444/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/ab/1c/79/ab1c7963-7d67-81b3-ce3d-57f47aaef8c7/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/70/28/d8/7028d8d5-e8d3-1b52-29a4-4fce8fe405b1/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/18/c9/b1/18c9b13d-3897-5ed9-5771-261950d9e3fb/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/24/7e/ef/247eef79-86fc-7877-485c-8406a4afab64/pr_source.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%A4%A9%E5%A4%A9%E7%88%B1%E7%83%B9%E9%A5%AA/id1247069377?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/17/94/d9/1794d976-3f7f-6647-3212-6159e644eee0/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
    "developer": "Shenzhen Runqian Technology Limited",
    "updatedAt": "2026-08-04",
    "version": "2.5.0",
    "size": "385 MB",
    "compatibility": "iOS 15.6+"
  },
  {
    "id": 28,
    "slug": "奇妙料理餐厅-儿童美食烹饪做饭软件",
    "name": "奇妙料理餐厅-儿童美食烹饪做饭软件",
    "desc": "【奇妙料理餐厅】真实模拟烧烤店、甜品店、汉堡小吃店、综合美食餐厅等多个特色主题餐厅，可口美味的汉堡、披萨、面条、牛排、烤鸭、甜甜圈、蛋糕、果汁等美食……儿童都能在【奇妙料理餐厅】里找到并烹饪它们。    在【奇妙料理餐厅】，儿童将角色扮演餐厅大厨，模拟经营美食餐厅，学习烹饪技巧，DIY美味料理。在制作美食的过程中，儿童将认识世界各地的食材，锻炼动手能力，创造美食故事。  美味小吃店——烹饪可口美味的汉堡、披萨、果汁 小吃店的美食料理台分为果汁区、汉堡区。先来DIY美味的豪华汉堡，香肠、牛肉饼任选一份，再加点西红柿、黄瓜等蔬菜均衡汉堡的口感。“重头戏”来了！餐厅为大厨准备了形状新奇的面包盖：汽车",
    "category": "Education",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.5,
    "reviewCount": 2769,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/fd/df/d8/fddfd828-c47e-f59e-7bc1-dd52480809d5/01ebee8c-e99e-4509-914d-35a1e1127283_1.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/39/d8/13/39d8133f-c9b4-ea60-c2a0-7a64a1dee22c/437a0712-15aa-4d0a-a4a0-ca75aae76b47_2.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/e2/12/c8/e212c887-8198-1325-8f0f-65d0ea6286c1/17a7f71e-ce70-4bd8-b5bc-72feceddf8e9_3.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/8d/7d/1b/8d7d1b25-8839-dd61-5900-3bd091e654f4/e9ccf00b-87bb-4d40-a74d-2cded5404777_4.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/49/5c/40/495c40a9-b5ef-84c6-0c9b-614f71a9f081/f480fc35-d58f-4454-85b4-4c67ca87e2a9_5.jpg/406x228bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%A5%87%E5%A6%99%E6%96%99%E7%90%86%E9%A4%90%E5%8E%85-%E5%84%BF%E7%AB%A5%E7%BE%8E%E9%A3%9F%E7%83%B9%E9%A5%AA%E5%81%9A%E9%A5%AD%E8%BD%AF%E4%BB%B6/id1624871138?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ef/89/2d/ef892da2-45ed-343d-9d90-b4cb513acec7/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
    "developer": "SINGAPORE BABYBUS PTE. LTD.",
    "updatedAt": "2026-08-04",
    "version": "9.92.0001",
    "size": "368 MB",
    "compatibility": "iOS 13.0+"
  },
  {
    "id": 29,
    "slug": "菜谱大全pro-小白学做家常菜做法必备烹饪助手",
    "name": "菜谱大全Pro－小白学做家常菜做法必备烹饪助手",
    "desc": "菜谱大全，汇集了来自全国各地的数十万道家常菜，并配以精美的图片，内容丰富详细，图文搭配更容易上手，页面简洁大方，超级好用，瞬间爱上了有木有！  我们的产品特色： （1）数十万精品菜谱，统统免费使用！ （2）强大的搜索，帮你找到所有你想要的！ （3）强大的收藏，喜欢就毫不犹豫地留住！ （4）贴心的浏览记录，看过的菜谱都在这里！ （5）描述详细，图片高清，做菜轻松又容易！ （6）精品好菜推荐，天天都能吃出新花样！  有了菜谱大全，让你立马爱上做菜，轻松成为完美的厨房小能手！ ———————来自友友们的认可——————— “挺好的软件，对于厨房小白来说，是非常棒的助手，学会做饭，想吃什么做什么……”",
    "category": "Food & Drink",
    "price": "¥49.90",
    "originalPrice": null,
    "rating": 4,
    "reviewCount": 83,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e2/4d/a9/e24da9fd-0c26-ee97-e122-bc4053070709/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ff/7a/f3/ff7af3f7-812a-7801-6d58-2a2ee0c719b9/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/4f/45/1d/4f451d05-203d-a74d-081e-7eb3b84e7b14/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/77/12/65/77126582-ec2e-f8a8-6d68-33dbc82305f0/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/27/7b/6c/277b6c1a-42f8-fed0-3837-f57650c2cc18/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": false,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%8F%9C%E8%B0%B1%E5%A4%A7%E5%85%A8pro-%E5%B0%8F%E7%99%BD%E5%AD%A6%E5%81%9A%E5%AE%B6%E5%B8%B8%E8%8F%9C%E5%81%9A%E6%B3%95%E5%BF%85%E5%A4%87%E7%83%B9%E9%A5%AA%E5%8A%A9%E6%89%8B/id1183632694?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/a7/dd/96a7dd76-8501-5a6c-de4d-3bdd367ac24d/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "Beijing Youyi Interaction Science and Technology Co.,Ltd",
    "updatedAt": "2026-08-04",
    "version": "4.8.6",
    "size": "10 MB",
    "compatibility": "iOS 13.0+"
  },
  {
    "id": 30,
    "name": "Kimi",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/64/4a/0b/644a0b79-c4bb-40fe-7de8-aef5038f5bfe/AppIcon26-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 192851,
    "developer": "Moonshot AI",
    "appStoreUrl": "https://apps.apple.com/cn/app/kimi/id6474233312?uo=4",
    "size": "146 MB",
    "version": "3.0.3",
    "compatibility": "iOS 15.0+",
    "language": "中文",
    "tags": [
      "效率"
    ],
    "description": "Kimi K3 模型上线！支持高保真视觉复刻，一张图即可转成专业 PPT；内置多种插件，信源可靠；一句话做出多人 3A 级游戏，让更多复杂创意直接变成可用的作品。  # Kimi 能帮你做什么？ - K3模型：总参数2.8T，支持百万上下文，具备领先的编程、Agent、长程推理、视觉理解和 Agen",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04"
  },
  {
    "id": 31,
    "name": "美图秀秀:视频/图片/Live人像精修工具",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/24/cd/47/24cd47c4-21d5-1cff-f51c-158e52b30c0b/AppIcon-0-0-1x_U007emarketing-0-9-0-85-220.png/512x512bb.jpg",
    "category": "摄影",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 12429569,
    "developer": "Xiamen Meitu Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%BE%8E%E5%9B%BE%E7%A7%80%E7%A7%80-%E8%A7%86%E9%A2%91-%E5%9B%BE%E7%89%87-live%E4%BA%BA%E5%83%8F%E7%B2%BE%E4%BF%AE%E5%B7%A5%E5%85%B7/id416048305?uo=4",
    "size": "797 MB",
    "version": "12.16.0",
    "compatibility": "iOS 13.0+",
    "language": "中文",
    "tags": [
      "摄影"
    ],
    "description": "【全能高清修图】 强大全面的美化功能，海量精品素材，操作简单便捷，贴纸，文字，边框，马赛克，涂鸦笔，标记，抠图，创意玩法…无需切换满足各种修图需求。还有迪士尼、三丽鸥等超多正版授权IP，艺术家合作素材独家上线！ 【AI合照上线啦】 异地各自拍，同框零距离。AI黑科技×人像美颜。超自然生成合影，还原真",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04"
  },
  {
    "id": 32,
    "name": "Wink - 视频&Live超清美颜",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/72/0c/ad/720cad9c-73e3-ff26-91de-f3d2e41ba67b/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "category": "摄影",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 1746914,
    "developer": "Xiamen Meitu Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/wink-%E8%A7%86%E9%A2%91-live%E8%B6%85%E6%B8%85%E7%BE%8E%E9%A2%9C/id1594288016?uo=4",
    "size": "290 MB",
    "version": "3.12.1",
    "compatibility": "iOS 13.0+",
    "language": "中文",
    "tags": [
      "摄影"
    ],
    "description": "「Wink·网感出片神器」  视频、Live实况、照片都能修。  明星&博主强推！AI邪修超惊艳～    === 画质修复 ===  【画质修复】权威质感「AI超清」清晰度修复最强功能！  【全能修复】AI深度检测，全局多维修复，All in one。  【专属场景】游戏/演唱会/动漫/文字图标 专",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/65/68/a6/6568a620-5e0b-6d83-8461-0ac04b6cc117/1-_U9ad8_U6e05_U4fee_U590d1242-2208.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/07/86/bd/0786bd35-85e5-52e4-6920-42d05e4312f5/2-_U4feelive1242-2208.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/67/4d/95/674d95fe-b7f0-bf17-3dee-a37c9d8a2c5d/4-ai_U7f8e_U5bb91242-2208.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/22/4e/d5/224ed501-c0c5-0b73-7a6b-7e4322726fff/7-_U5168_U80fd_U4fee_U590d1242x2208.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/73/1b/97/731b976c-96b0-8752-0ba9-9ed3a27e8e8e/3-_U89c6_U9891_U7f8e_U5bb91242-2208.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04"
  },
  {
    "id": 33,
    "name": "鲨鱼记账-3秒钟快速记账手机助手",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2c/4d/d6/2c4dd6c2-0f8b-88f1-53df-a318184789af/AppIcon-0-0-1x_U007emarketing-0-6-0-0-85-220.png/512x512bb.jpg",
    "category": "财务",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 2309022,
    "developer": "Beijing Shark Pioneer Network Technology Co.,Ltd",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E9%B2%A8%E9%B1%BC%E8%AE%B0%E8%B4%A6-3%E7%A7%92%E9%92%9F%E5%BF%AB%E9%80%9F%E8%AE%B0%E8%B4%A6%E6%89%8B%E6%9C%BA%E5%8A%A9%E6%89%8B/id1079718756?uo=4",
    "size": "189 MB",
    "version": "5.74",
    "compatibility": "iOS 11.0+",
    "language": "中文",
    "tags": [
      "财务"
    ],
    "description": "【产品功能】 3秒钟记账：极简的操作流程，让你3秒钟即可完成一笔记账操作 消费趋势：一目了然的图表，帮你快速分析消费情况 数据超安全：登录账号后，记账数据实时同步在云端 备注提示：强大的备注智能提示系统，让你记账的过程越来越简单 记账提醒：自定义每日提醒时间，再也不用担心忘记记账了 小组件：可以通过",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/59/5e/83/595e83e1-d715-4d1d-2550-ac1768d48731/mzl.saxncwsx.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/32/4c/3f/324c3fbf-fb88-f598-dc4b-22f7f45be9a0/705f5a23-56fc-49a0-931b-b47ab8ee4fca_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/dc/05/3b/dc053b61-6293-3ef7-fdc8-a209b2c55aac/e5620f23-5847-4be5-be42-4449d9eb31d4_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/64/1d/5f/641d5f10-2150-cb75-488c-cbac147035a9/f06b38c4-9073-4661-a4b5-c332f2795b0c__U7f16_U7ec4_19@2x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7c/94/b6/7c94b6df-afd4-7893-7261-14375e6ab5aa/1c3a6bdc-a929-4eaf-a254-87a5260fac9c__U5c0f.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04"
  },
  {
    "id": 34,
    "name": "随手记-快捷自动记账",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/01/09/1a/01091a3b-fe15-0986-e67c-15a92754287a/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    "category": "财务",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 668719,
    "developer": "Shenzhen Mingshu Information Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E9%9A%8F%E6%89%8B%E8%AE%B0-%E5%BF%AB%E6%8D%B7%E8%87%AA%E5%8A%A8%E8%AE%B0%E8%B4%A6/id372353614?uo=4",
    "size": "289 MB",
    "version": "13.2.52",
    "compatibility": "iOS 14.0+",
    "language": "中文",
    "tags": [
      "财务"
    ],
    "description": "多赚会花每一天，记账就要随手记！海量账本模板，个人、家庭、生意账随心选。 记账快捷又专业，轻松管理多人记账。多维度账单解读，全面了解你的财务状况。  【特色亮点】 1、AI记账新体验 - 语音记账，开口就能记 - 图片识别批量记账，发送截图、小票自动记 - 快捷指令自动记账，消费后一键入账 2、记账",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04"
  },
  {
    "id": 35,
    "name": "iCost记账-快速简洁好用的记账理财助手&记账软件",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/19/7c/64/197c6481-ed20-3d28-7ff3-9215299195c2/AppIcon-0-0-1x_U007epad-0-1-0-0-85-220.png/512x512bb.jpg",
    "category": "财务",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 99359,
    "developer": "Guangzhou Quji Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/icost%E8%AE%B0%E8%B4%A6-%E5%BF%AB%E9%80%9F%E7%AE%80%E6%B4%81%E5%A5%BD%E7%94%A8%E7%9A%84%E8%AE%B0%E8%B4%A6%E7%90%86%E8%B4%A2%E5%8A%A9%E6%89%8B-%E8%AE%B0%E8%B4%A6%E8%BD%AF%E4%BB%B6/id1484262528?uo=4",
    "size": "94 MB",
    "version": "4.6.3",
    "compatibility": "iOS 13.0+",
    "language": "中文",
    "tags": [
      "财务"
    ],
    "description": "# AppStore 编辑推荐 # AppStore 热搜推荐  感谢您的喜欢，如果您认同我们的方向，又或者认可我们的努力，请帮助我们将 iCost 推广出去。感激不尽。   如果使用过程中出现任何问题，可以发送邮件到 feedback@quji.tech 进行反馈，您的每一个建议都会得到慎重的考虑",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e7/fd/75/e7fd754a-9329-52bb-898b-cb5e215e83ce/2a1cfedc-baef-4341-b0fe-7d1e3e8a44ea_5.5_1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/29/53/01/295301a0-ad0d-8c92-206b-d25c82c194d1/f6a20e95-45ce-4c11-82a6-6fdd28ba7d0c_5.5_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c5/69/a5/c569a543-e1b7-8dd1-fad5-5eceae5ecec0/c7686384-80f9-42ea-89c4-10764677fe1e_5.5_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/58/38/c35838b0-765f-04c6-b2b1-1732efbc9911/6d35c4ea-f525-4f9e-be97-34223f6c7031_5.5_4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/87/40/bc/8740bce6-ec42-9ede-7b22-fcb1d5e6cf2e/2bd7bed3-49da-4486-bdf1-8e2781b6c3d6_5.5_5.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04"
  },
  {
    "id": 36,
    "name": "Forest 专注森林 - 番茄钟学习计时器",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/39/d8/8a/39d88a95-cada-6b34-b929-63ecb896be90/AppIcon-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 257244,
    "developer": "SEEKRTECH CO., LTD.",
    "appStoreUrl": "https://apps.apple.com/cn/app/forest-%E4%B8%93%E6%B3%A8%E6%A3%AE%E6%9E%97-%E7%95%AA%E8%8C%84%E9%92%9F%E5%AD%A6%E4%B9%A0%E8%AE%A1%E6%97%B6%E5%99%A8/id866450515?uo=4",
    "size": "806 MB",
    "version": "5.23.0",
    "compatibility": "iOS 16.0+",
    "language": "中文",
    "tags": [
      "效率"
    ],
    "description": "全球 6000 万人都在用的专注计时器。  AppSo（爱范儿）：“如果你决定放下电话，不再做手机奴了，那来专治多年低头族的 Forest 一定能帮助你，一起构建一座属于自己的森林吧。”  Forest 帮你远离手机干扰，把每一段专注时光变成看得见的成长。当你开始专注，一棵树苗便会慢慢长大；如果忍不",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a4/7b/d6/a47bd6fa-bae9-87dd-fe80-fc949048cf33/1_new2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f7/8b/8b/f78b8bdf-464a-43c5-ded4-838597ca34f7/2-1_new2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/eb/b4/68/ebb46896-f6e3-9bf3-45cd-9f37fb39ffa6/3_new2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4b/74/3e/4b743ead-9065-5cb6-79fe-5d208c46ef82/4_new2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ca/6b/ec/ca6becd8-a6f9-734e-16f4-7bc280d0b811/5_new2.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04"
  },
  {
    "id": 37,
    "name": "可灵AI - AI图片&视频创作工具",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/9c/b1/749cb1b8-ba87-51d9-2403-c19167518f10/AppIconKlingapp-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "摄影",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.8,
    "reviewCount": 74727,
    "developer": "Beijing Kwai Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%8F%AF%E7%81%B5ai-ai%E5%9B%BE%E7%89%87-%E8%A7%86%E9%A2%91%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%85%B7/id6670396916?uo=4",
    "size": "166 MB",
    "version": "3.6.50",
    "compatibility": "iOS 14.0+",
    "language": "中文",
    "tags": [
      "摄影"
    ],
    "description": "可灵AI （Kling AI）是广受海内外创作者好评的新一代创意生产力平台，基于可灵大模型，提供视频、图片生成与编辑能力。在这里，你可以尽情发挥想象力，也可以参考其他创作者的创作灵感，让创意完美落地。  可灵AI（Kling AI）功能亮点： ● AI 视频：支持文生视频和图生视频，输入文本或图片，",
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2d/b5/8d/2db58d91-34b8-e899-3a5e-710c3fb7717a/5.5-1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/40/37/06/4037066d-0e7b-762e-8f77-90602a8f7ee1/5.5-2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/12/7e/24/127e24b0-9125-5e04-6716-5093e626366e/5.5-3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/2a/3f/5f/2a3f5fe9-ce6b-02e3-6320-ff705791e2d2/5.5-4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1c/3c/88/1c3c8817-52c3-4104-0680-a7f13b6c022e/5.5-5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-04"
  }
];
// Load from localStorage or fallback to defaults
function loadApps() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const ver = localStorage.getItem(STORAGE_KEY + '_v');
    if (stored && ver == DATA_VERSION) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return JSON.parse(JSON.stringify(defaultApps));
}

// Save to localStorage
function saveApps(newApps) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newApps));
  localStorage.setItem(STORAGE_KEY + '_v', DATA_VERSION);
}

// Reset to defaults (from admin panel)
function resetApps() {
  localStorage.removeItem(STORAGE_KEY);
  return JSON.parse(JSON.stringify(defaultApps));
}

// Get next available ID
function nextId(appList) {
  return appList.length ? Math.max(...appList.map(a => a.id)) + 1 : 1;
}

// Export as data.js file content
function exportDataJS(appList) {
  const list = appList || loadApps();
  return 'const defaultApps = ' + JSON.stringify(list, null, 2) + ';\n' +
    '\n// Load from localStorage or fallback to defaults\n' +
    'function loadApps() {\n' +
    '  try {\n' +
    '    const stored = localStorage.getItem(\'' + STORAGE_KEY + '\');\n' +
    '    const ver = localStorage.getItem(\'' + STORAGE_KEY + '_v\');\n' +
    '    if (stored && ver == DATA_VERSION) {\n' +
    '      const parsed = JSON.parse(stored);\n' +
    '      if (Array.isArray(parsed) && parsed.length > 0) return parsed;\n' +
    '    }\n' +
    '  } catch(e) {}\n' +
    '  return JSON.parse(JSON.stringify(defaultApps));\n' +
    '}\n\n' +
    'function saveApps(newApps) {\n' +
    '  localStorage.setItem(\'' + STORAGE_KEY + '\', JSON.stringify(newApps));\n' +
    '  localStorage.setItem(\'' + STORAGE_KEY + '_v\', DATA_VERSION);\n' +
    '}\n\n' +
    'function resetApps() {\n' +
    '  localStorage.removeItem(\'' + STORAGE_KEY + '\');\n' +
    '  return JSON.parse(JSON.stringify(defaultApps));\n' +
    '}\n\n' +
    'function nextId(appList) {\n' +
    '  return appList.length ? Math.max(...appList.map(a => a.id)) + 1 : 1;\n' +
    '}\n\n' +
    'function exportDataJS(appList) {\n' +
    '  return "function body omitted in export";\n' +
    '}\n';
}

// Shared categories
const categories = [
  { key: "all", name: "全部", emoji: "📱" },
  { key: "效率", name: "效率", emoji: "⚡" },
  { key: "摄影", name: "摄影", emoji: "📷" },
  { key: "图形设计", name: "图形设计", emoji: "🎨" },
  { key: "健康", name: "健康", emoji: "💚" },
  { key: "工具", name: "工具", emoji: "🔧" },
  { key: "天气", name: "天气", emoji: "🌤️" },
  { key: "新闻", name: "新闻", emoji: "📰" }
];

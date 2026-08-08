// === App Data with localStorage support ===
const STORAGE_KEY = 'iosyun_apps';
const DATA_VERSION = 18; // 改这个数字强制刷新所有用户的缓存

const defaultApps = [
  {
    "id": 1,
    "name": "Things 3",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3c/46/9c/3c469c49-4f13-ef80-f88a-cd35f9ea1a69/AppIcon-0-0-1x_U007ephone-0-0-0-1-0-0-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": "¥68.00",
    "isFree": true,
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
    "updatedAt": "2026-08-08",
    "slug": "things-3"
  },
  {
    "id": 2,
    "name": "Procreate",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7b/36/95/7b36957c-dc43-6e38-99e5-31ecd83ff2dd/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/512x512bb.jpg",
    "category": "设计",
    "price": "免费",
    "originalPrice": "¥88.00",
    "isFree": true,
    "rating": 4.2,
    "reviewCount": 35769,
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
    "updatedAt": "2026-08-08",
    "slug": "procreate"
  },
  {
    "id": 3,
    "name": "CARROT Weather",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1b/88/94/1b889460-7b24-47eb-0b76-cf53c676e31b/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-85-220.png/512x512bb.jpg",
    "category": "天气",
    "price": "¥30",
    "originalPrice": null,
    "isFree": false,
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
    "updatedAt": "2026-08-01",
    "slug": "carrot-weather"
  },
  {
    "id": 4,
    "name": "Halide Mark III",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/59/08/70/5908705a-685e-3114-b80a-05f95666633c/titanium-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "摄影",
    "price": "¥98",
    "originalPrice": null,
    "isFree": false,
    "rating": 3.3,
    "reviewCount": 933,
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
    "updatedAt": "2026-08-07",
    "slug": "halide-mark-iii"
  },
  {
    "id": 5,
    "name": "Fantastical",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cd/0f/5a/cd0f5a2a-d0ca-ab26-67bb-f8523ddcc0a0/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "¥58",
    "originalPrice": null,
    "isFree": false,
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
    "updatedAt": "2026-08-06",
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
    "updatedAt": "2026-08-08",
    "slug": "1password"
  },
  {
    "id": 7,
    "name": "GoodNotes 6",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1a/39/39/1a39395c-f1d7-af6d-a627-ca55a8934691/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "¥68",
    "originalPrice": null,
    "isFree": false,
    "rating": 4.5,
    "reviewCount": 679513,
    "developer": "Goodnotes",
    "appStoreUrl": "https://apps.apple.com/cn/app/goodnotes-ai-%E7%AC%94%E8%AE%B0-%E7%99%BD%E6%9D%BF-pdf/id1444383602?uo=4",
    "size": "928 MB",
    "version": "7.1.6",
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
    "updatedAt": "2026-08-07",
    "slug": "goodnotes-6"
  },
  {
    "id": 8,
    "name": "Pixelmator Pro",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a1/e9/19/a1e91908-afba-6b30-d789-b03300253ab2/AppIcon-0-0-85-220-0-0-5-0-2x-0-0-0.png/512x512bb.png",
    "category": "设计",
    "price": "免费",
    "originalPrice": "¥328.00",
    "isFree": true,
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
    "updatedAt": "2026-08-08",
    "slug": "pixelmator-pro"
  },
  {
    "id": 9,
    "name": "Dark Noise",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/45/b5/8c/45b58ca4-e35e-6bf9-117d-b3d175bb046f/dark-noise-primary-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "¥30",
    "originalPrice": null,
    "isFree": false,
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
    "updatedAt": "2026-08-07",
    "slug": "dark-noise"
  },
  {
    "id": 10,
    "name": "Reeder 5",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5f/3e/d4/5f3ed4e2-9ada-1102-af29-1c9bf490cb71/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": "$4.99",
    "isFree": true,
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
    "updatedAt": "2026-08-08",
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
    "reviewCount": 934512,
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
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a9/f1/31/a9f131bd-e044-f97b-f493-10ff08600e13/8bf17896-5fbd-4fa4-9363-9d89177f0e79_1242_2208_P5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-08",
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
    "reviewCount": 77145,
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
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/36/3e/37/363e37df-9a04-e180-0ee0-90ba48d669e5/33d0602a-7726-4be3-bc41-730219d8e05c_1242_2208-01-2.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-08",
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
    "reviewCount": 115130,
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
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/09/99/43/099943b6-7eee-951b-a228-48177d28c6af/433efe93-c84e-4cde-9d9a-05d0497275d6_3__U62f7_U8d1d.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-08",
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
    "reviewCount": 156169,
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
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/79/98/b2/7998b265-2afb-9555-cec5-d61ee51f7832/adb1b1b7-246a-41d9-88d8-c62ed0c66dd8_1242-2208-5.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-08",
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
    "reviewCount": 249473,
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
    "updatedAt": "2026-08-08",
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
    "reviewCount": 3356141,
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
    "updatedAt": "2026-08-08",
    "id": 16,
    "slug": "豆包-随时帮忙的-ai-助手"
  },
  {
    "name": "汽水音乐 - 随时听好歌",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/db/6f/dd/db6fdd4c-aa7c-dce0-724c-56df5a2d78ff/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": null,
    "isFree": true,
    "rating": 4.8,
    "reviewCount": 509745,
    "developer": "Beijing Douyin Technology Co., Ltd.",
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%B1%BD%E6%B0%B4%E9%9F%B3%E4%B9%90-%E9%9A%8F%E6%97%B6%E5%90%AC%E5%A5%BD%E6%AD%8C/id1605585211?uo=4",
    "size": "422 MB",
    "version": "20.3.0",
    "compatibility": "iOS 13.0+",
    "language": "中文",
    "tags": [
      "音乐",
      "推荐",
      "播放器"
    ],
    "description": "【汽水音乐】抖音出品官方音乐app，让音乐更懂你。  - 个性推荐，发现小众好歌 发现好音乐不再是难题。根据你和品味相似的人的听歌偏好，为你推荐感兴趣的歌曲，拒绝千篇一律，让音乐更懂你。  - 场景音乐&分类电台，随时找到你想听的音乐 学习/运动/打游戏/通勤途中时想听歌？想听嘻哈/摇滚/电音/R&",
    "screenshots": [],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-08",
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
    "reviewCount": 6506797,
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
    "updatedAt": "2026-08-08",
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
    "reviewCount": 406993,
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
    "updatedAt": "2026-08-08",
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
    "reviewCount": 622264,
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
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/68/92/fd/6892fd80-420a-925e-da27-613ff2364a91/5-iPhone55-CN.Simplified.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-08",
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
    "reviewCount": 66518,
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
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/90/cc/52/90cc526f-4e7a-0fa8-0357-03090994df5b/1242_2208-4.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-08",
    "id": 21,
    "slug": "有道云笔记-笔记扫描效率办公"
  },
  {
    "name": "Berry胶片相机 - 韩系自拍神器",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/62/7d/2b/627d2b7d-189b-7ac5-527c-3e31472fec3d/berryfilm-0-0-1x_U007ephone-0-1-sRGB-85-220.png/512x512bb.jpg",
    "category": "摄影",
    "price": "免费",
    "originalPrice": "¥15.00",
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 1773,
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
    "updatedAt": "2026-08-08",
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
    "reviewCount": 51338,
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
    "updatedAt": "2026-08-07",
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
    "reviewCount": 98283,
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
    "updatedAt": "2026-08-07",
    "id": 24,
    "slug": "扫描全能王-官方出品1元畅用版-扫描pdf文件-文字识别"
  },
  {
    "name": "同花顺至尊版-股票软件",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/97/f4/1e/97f41e27-5f68-f412-8656-101a94e2bf74/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": "¥1.00",
    "isFree": true,
    "rating": 4.9,
    "reviewCount": 121207,
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
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/54/67/54/546754b0-41db-0db6-17ac-bfcdf8801d11/16004a88-d59f-4cda-b8da-7b8cf94168ec_1242x2208_07.png/392x696bb.png"
    ],
    "featured": false,
    "isHot": false,
    "updatedAt": "2026-08-08",
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
    "reviewCount": 242,
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
    "updatedAt": "2026-08-08"
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
    "reviewCount": 65701,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/df/4e/5e/df4e5edd-e351-5c9b-8295-cd48cadfd57b/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/28/b7/5c/28b75c96-306c-2601-a411-521c6a9afab2/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/84/f0/03/84f0035a-276a-415f-aff3-04df6cc8c581/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/0c/27/b9/0c27b9af-d870-066a-34de-9ca231efab62/pr_source.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/78/aa/dc/78aadcc3-74bf-b2e5-595c-c70e972e8444/pr_source.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%A4%A9%E5%A4%A9%E7%88%B1%E7%83%B9%E9%A5%AA/id1247069377?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/17/94/d9/1794d976-3f7f-6647-3212-6159e644eee0/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
    "developer": "Shenzhen Runqian Technology Limited",
    "updatedAt": "2026-08-08"
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
    "reviewCount": 2766,
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
    "updatedAt": "2026-08-08"
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
    "updatedAt": "2026-08-06"
  },
  {
    "id": 30,
    "slug": "小公主贝儿的甜品食谱制作教室-厨房游戏",
    "name": "小公主贝儿的甜品食谱制作教室-厨房游戏",
    "desc": "这是一个根据真实甜品食谱做成的亲子游戏，适合2-5岁的幼儿，游戏操作十分简单，可以有效启发孩子思维和思考，另一方面也可以让父母制作甜品的正确方法。游戏包含多个甜品的制作方法有炖蛋,黄金蛋糕,饼干,布丁,鲜奶冻,甜甜圈,樱桃奶酪和海绵蛋糕。  家长与孩子在游戏过程中必须互动，比如说每一个动作怎么表达，每一个步骤有什么用，游戏里都有哪一些物品，每当小朋友答对问题的时候必须称赞他们，这样可以有效提高孩子的自信，让他面对问题或困难的时候，可以有自信的解决。在和小朋友游戏结束后，家长可以尝试制作真实的甜品和小朋友一起吃。这样可以有效加强家长和孩子之间的关系。  游戏能够启发孩子的智慧。这就要求游戏活动既",
    "category": "Games",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.4,
    "reviewCount": 21432,
    "platform": "iPhone / iPad",
    "tags": [
      "厨房游戏"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/4d/ef/15/4def15c3-84dc-2f63-662e-432ae0492c5a/pr_source.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/fe/99/73/fe997373-997b-3df7-4263-c7a5ceaca4a3/pr_source.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/83/30/46/833046a1-2287-7add-b3e6-bb506d112bca/pr_source.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/bb/d2/56/bbd256fd-7735-8495-8491-6bd8ad5d79de/pr_source.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/c6/75/e4/c675e47d-d8f0-c267-2dd8-37aafb6ef920/pr_source.jpg/406x228bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%B0%8F%E5%85%AC%E4%B8%BB%E8%B4%9D%E5%84%BF%E7%9A%84%E7%94%9C%E5%93%81%E9%A3%9F%E8%B0%B1%E5%88%B6%E4%BD%9C%E6%95%99%E5%AE%A4-%E5%8E%A8%E6%88%BF%E6%B8%B8%E6%88%8F/id1071512246?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/ec/ac/10/ecac105b-f7b1-5704-f723-2c615c1ad022/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    "developer": "Wai Chin Ng",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 31,
    "slug": "烹饪大全-下厨房好帮手",
    "name": "烹饪大全-下厨房好帮手",
    "desc": "【汇集海量美食制作视频，高清教学】 【美食爱好者的必备App】  教程包括 • 热门家常菜的做法 • 烹饪的常用方法 • 家庭厨具的使用、介绍 • 中国八大菜系的做法 川菜、湘菜、鲁菜 • 鸡、鸭、鱼的常用做法  赶紧下载吧，厨艺大大的提高！",
    "category": "Food & Drink",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 1618,
    "platform": "iPhone / iPad",
    "tags": [
      "烹饪大全"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/7e/d8/40/7ed840ff-e995-035b-7a02-1eda21c05fea/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/2a/73/ed/2a73edc2-ed45-3cc3-02b3-103fe5b4a22d/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/dc/a4/fa/dca4fad0-8973-fade-6f1d-354851363736/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/41/13/01/411301bd-3170-be68-fea6-ae5d0ead2ade/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%83%B9%E9%A5%AA%E5%A4%A7%E5%85%A8-%E4%B8%8B%E5%8E%A8%E6%88%BF%E5%A5%BD%E5%B8%AE%E6%89%8B/id1136974705?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6c/80/a1/6c80a1e0-27c1-1c89-8cc6-09ec616aca51/AppIcon-1x_U007emarketing-0-11-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "亮 王",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 32,
    "slug": "逍遥客栈-美食烹饪餐厅经营游戏",
    "name": "逍遥客栈 - 美食烹饪餐厅经营游戏",
    "desc": "玩家交流群：821383711  江湖是什么？ 是那白衣剑客，一人一马，仗剑行遍万里山河。 是那红衣佳人，端坐雕楼，唱罢人世悲欢喜乐。 是那七旬老叟，华发散乱，山门前枯等后辈归来。 江湖是什么？ 是那山门在一个雪夜轰然倒塌，老叟不见踪影。 是那雕楼画栋化作飞灰，红衣佳人挽起长发，抹去妆容，入红尘之中。 是那老马蹒跚，长剑染锈，白衣剑客再回市井之间。 江湖是什么？ 是那红尘烟火三千，小城、客栈、一碗浊酒。 是那镖客手中的一碗扯面，衙役筷下的半斤牛肉。 是那脚夫的口若悬河，是那戏子不曾卸下的妆容。  游戏特色: 1.从别样的角度解读江湖，江湖是刀光剑影，江湖是侠肝义胆，但江湖也是侠客手中美酒，筷下",
    "category": "Games",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 36968,
    "platform": "iPhone / iPad",
    "tags": [
      "逍遥客栈"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/49/4c/14/494c14e4-53cf-528c-0f1e-cc9775580ecb/ac0f9408-955f-4b07-9ddb-63fe4d751ab1_1.png/406x228bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/0d/18/24/0d182478-d79f-9382-ebbd-0d4e4b0d7697/4528ad6d-3650-41dd-a285-205ab62cff68_2.png/406x228bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/55/bc/84/55bc846d-7e82-7e11-ea7d-9190925bca53/41143180-97b2-49f5-95b9-d22bb5144119_3.png/406x228bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/f6/a4/5f/f6a45f5b-a6eb-6c6a-9f13-dc2cdde79b41/efdba89e-e6e0-450b-a324-3baa0f505a7a_4.png/406x228bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/81/8f/24/818f2464-5604-e860-f10d-7f60ec9c142f/f88aa888-895c-4875-93f9-cb6ca2844a4c_5.png/406x228bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E9%80%8D%E9%81%A5%E5%AE%A2%E6%A0%88-%E7%BE%8E%E9%A3%9F%E7%83%B9%E9%A5%AA%E9%A4%90%E5%8E%85%E7%BB%8F%E8%90%A5%E6%B8%B8%E6%88%8F/id1631529003?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/27/39/41/273941c0-b21e-43ea-83e8-ffedc499568c/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
    "developer": "Ghost Rabbit Co., Ltd.",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 33,
    "slug": "翻译-实时ai翻译-出国旅行必备翻译软件",
    "name": "翻译 - 实时AI翻译, 出国旅行必备翻译软件",
    "desc": "翻译软件 — 你的智能翻译助手 翻译软件是一款功能强大的 AI 翻译助手， 支持 文本、语音、图片、文档 等多种形式的实时翻译，随时随地畅通交流。 无论是阅读外文文章、出国旅行， 还是跨语言聊天、识别图片文字， 翻译软件都能帮你快速、准确地完成翻译，让沟通更加自然流畅。 主要功能 • 文本翻译 —— 支持 100+ 语言，快速、精准的多语言翻译。 • 拍照翻译 —— 打开相机即可翻译菜单、标识、图片内容。 • 对话模式 —— 实时语音互译，面对面交流无障碍。 • 文档翻译 —— 支持 PDF、Word 等文件导入与整篇翻译。 • 离线翻译 —— 下载语言包，无网环境也能使用。 • 翻译历史 —",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.5,
    "reviewCount": 2743,
    "platform": "iPhone / iPad",
    "tags": [
      "翻译"
    ],
    "screenshots": [],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%BF%BB%E8%AF%91-%E5%AE%9E%E6%97%B6ai%E7%BF%BB%E8%AF%91-%E5%87%BA%E5%9B%BD%E6%97%85%E8%A1%8C%E5%BF%85%E5%A4%87%E7%BF%BB%E8%AF%91%E8%BD%AF%E4%BB%B6/id6754841237?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cb/2b/e1/cb2be13c-86d5-2624-3569-8946036ce9b9/AppIcon-1x_U007ephone-0-1-0-sRGB-85-220-0.png/512x512bb.jpg",
    "developer": "Chongqing Guanling Interactive Network Technology Co., Ltd",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 34,
    "slug": "英语翻译官-学英语必备中英文翻译词典",
    "name": "英语翻译官-学英语必备中英文翻译词典",
    "desc": "《英语翻译官》更懂国人专注英汉翻译，依托最新人工智能，采用NMT（神经网络机器翻译）系统，上下文理解更准确翻译。AI随身拍照语音识别翻译，出国旅行英语学习翻译专家。  英语学习，旅游出行必备翻译利器！赶紧试试吧！   ——【核心功能】—— 1，文本翻译：专注英汉翻译，更懂国人，依托人工智能，采用NMT（神经网络机器翻译）系统，上下文理解更准确的译文。  2，拍照翻译：随身拍照片识别翻译、相册选图翻译任意选；拍照一键翻译，旅游出行、阅读英语学习，高效率翻译利器。  3，语音翻译：最新人工智能技术，高分辨率人声识别转为文字翻译！出国旅游/英语学习必备翻译助手。  4，对话翻译：实时语音翻译，专业英",
    "category": "Education",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 23229,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/dc/fb/27/dcfb2714-b6af-5495-b54f-401c7d60a406/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/0a/64/84/0a64846d-c519-12df-7445-682da7afb055/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/af/19/8f/af198fd8-155d-163a-62a1-996259a93581/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/fb/2f/19/fb2f1965-0d3d-f614-7eb5-2f133adbfa6a/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/dd/9f/06/dd9f06eb-8da5-3b49-5082-b6d3be86b460/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%8B%B1%E8%AF%AD%E7%BF%BB%E8%AF%91%E5%AE%98-%E5%AD%A6%E8%8B%B1%E8%AF%AD%E5%BF%85%E5%A4%87%E4%B8%AD%E8%8B%B1%E6%96%87%E7%BF%BB%E8%AF%91%E8%AF%8D%E5%85%B8/id1388845809?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/05/2f/2d/052f2de2-2936-b65f-89ab-2373d67ee3d4/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    "developer": "Shanghai Quentin network technology co. LTD",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 35,
    "slug": "翻译官-出国旅游语音图片全能翻译软件",
    "name": "翻译官-出国旅游语音图片全能翻译软件",
    "desc": "出国翻译软件支持200多种语言翻译；实现语音翻译，图片翻译，拍照翻译，文本翻译；满足出国翻译，旅行翻译，在线翻译等场景翻译；支持英语日语词典查询。在生活上，工作上，学习上能给小伙伴带来帮助的智能翻译软件。  app主要功能包括：  =多种翻译平台= - 支持百度翻翻译，谷歌翻译，微软翻译，能更稳定，更准确的翻译。  =语音翻译= - 告别手写打字输入，通过语音准确的翻译成目标语言。  =图片拍照翻译= - 支持菜单、路标、文章等一键翻译，自动保存拍照翻译结果，支持中文、英语、日语、韩语、泰语、越南语、俄语、波兰语、德语、丹麦语、法语、葡萄牙语、西班牙语、意大利语、希腊语、瑞典语、印地语等语言。",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 1691,
    "platform": "iPhone / iPad",
    "tags": [
      "旅游",
      "出行",
      "导航",
      "翻译官"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/95/a0/75/95a07512-d922-16cf-6817-fb9d134b8e2d/c53eaf6e-d792-4bb2-bd97-43febf59096c_5.5-new-11.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/e6/eb/ec/e6ebec07-f544-3a16-a298-181cd3593880/03a121ed-ee79-4045-9e9a-d2114e479f66_5.5-new-81.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/e9/6e/cb/e96ecb61-2fd2-a632-7b7c-9d9ec6350aed/3ee70dee-abfd-4b46-ba77-d400ba927273_5.5-new-7.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/93/57/94/93579433-41cb-9dd8-f37d-850c71fac3ca/468491e7-0473-4227-a6d6-f4858b2b635b_5.5-new-41.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/07/6b/08/076b0860-dea5-92de-a569-2f7e2a6c3e41/22476379-43d8-444f-909c-afb78ca0bc79_5.5-new-9.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%BF%BB%E8%AF%91%E5%AE%98-%E5%87%BA%E5%9B%BD%E6%97%85%E6%B8%B8%E8%AF%AD%E9%9F%B3%E5%9B%BE%E7%89%87%E5%85%A8%E8%83%BD%E7%BF%BB%E8%AF%91%E8%BD%AF%E4%BB%B6/id1056652191?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/92/28/87/9228873b-c965-6416-0502-7d6c6306acc7/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/512x512bb.jpg",
    "developer": "有忠 黄",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 36,
    "slug": "泰语翻译官-泰国旅游泰语学习随身译",
    "name": "泰语翻译官-泰国旅游泰语学习随身译",
    "desc": "《泰语翻译官》中文泰语互译神器，语音识别翻译、地道发音，泰语日常口语库。泰国旅游泰语学习随身必备！新版更强大翻译功能，更丰富内容，更具价值的泰语翻译官，等你来试。  ——【核心功能】—— 1，文本翻译：接入泰国本土字词库，精准极速地道的中泰文互译！ 2，语音翻译：最新人工智能技术，高分辨率人声识别转为文字翻译！泰国旅游/泰语学习必备翻译助手。 3，拍照翻译：手机拍照片泰文识别翻译，相册选图翻译任意选；拍照一键翻译，旅游出行、泰语学习，高效率翻译利器。 4，翻译收藏：单词生词、不熟的常用语、经典名句、旅游专用语、商务泰常用语、通通收藏，随时随地翻看和朗读。 5，学习拓展：字母发音、有声节目、词汇",
    "category": "Reference",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 25324,
    "platform": "iPhone / iPad",
    "tags": [
      "旅游",
      "出行",
      "导航"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/45/29/e1/4529e14e-51f7-c1f4-aecf-b1c680920086/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/db/8f/2f/db8f2f89-5696-321c-dbc2-315ce3b6ae6d/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/dc/db/0f/dcdb0f57-c658-acc4-3bcc-a5f5cabac0ba/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/a2/ec/cc/a2eccc15-b67a-7201-8cf1-efc940f7ca6f/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/c1/f5/99c1f54d-485c-73f8-2532-fd45c1eba78d/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%B3%B0%E8%AF%AD%E7%BF%BB%E8%AF%91%E5%AE%98-%E6%B3%B0%E5%9B%BD%E6%97%85%E6%B8%B8%E6%B3%B0%E8%AF%AD%E5%AD%A6%E4%B9%A0%E9%9A%8F%E8%BA%AB%E8%AF%91/id1397676648?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a4/34/a2/a434a200-fdb3-27fe-d604-1d5e45533819/AppIcon-1x_U007emarketing-0-6-0-0-sRGB-85-220-0.png/512x512bb.jpg",
    "developer": "Shanghai Quentin network technology co. LTD",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 37,
    "slug": "力扣-leetcode",
    "name": "力扣 LeetCode",
    "desc": "力扣（LeetCode）App 全新功能，支持移动端代码编程，实时判题，让你码不停题。  - 学习提升，快拿 Offer - 力扣社区，有问必答 - 脑力健身，极客必备  全球极客职业技能成长平台，想要提升技术能力从这里开始。海量技术题库、求职面试经验、充足技术干货等你来，力扣助你职业技能快速成长！  [趣学习] - 免费力扣题库、剑指 Offer - 职业化编程 - 上万社区题解 - 企业面试考题 - 技术交流分享社区  「扣代码」 电脑不在身边，iPhone 也可实操代码学习编程。针对 iPad 全面优化，配合键盘、鼠标、快捷键，动动手指、刷刷键盘，让你迅速开启不受打扰的沉浸式编程学习体验",
    "category": "Developer Tools",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 41947,
    "platform": "iPhone / iPad",
    "tags": [
      "力扣"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/e0/35/50/e035505a-aa1c-b2ea-6395-d97f74558103/7db0bc82-3ed7-4c8f-a841-01afa64bd6ef_iphone_5.5-1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/59/c6/fe/59c6fe09-5cb0-0ad2-c8e1-d2ba971a5a77/48ef1629-bdd1-4c6e-9455-da36b2a498dc_1242x2208.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/a1/df/dd/a1dfdd97-fe54-3c57-f334-13fac008ac9b/a6026e56-9fe6-4f9b-a156-1a8acc27ed0d_iphone_5.5-3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/cf/f7/03/cff703ec-2b64-6d75-af3f-b6f1e777c7be/80304057-cbf3-4418-b3bc-458f21609f5e_iphone_5.5-4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/af/77/48/af774894-b995-5bef-66a2-59bfa85e97ef/a8976c82-b9f6-4d67-98a7-9ced1cf0fd88_iphone_5.5-5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%8A%9B%E6%89%A3-leetcode/id1470936215?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/00/34/e7/0034e7cd-8085-8a62-bedc-ba91d37473dd/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    "developer": "Lingkou Network",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 38,
    "slug": "app开发中的神兵利器",
    "name": "app开发中的神兵利器",
    "desc": "【学员在App Store上的真实评价】 『先给个五星好评 等你们更新了 再给你5星 凑十颗』by 孙洪展 – Jun 29, 2017 『非常不错  学习到了不少语法。看的非常明白』by 照顾儿子 – Jun 25, 2017  【章节列表】 第一章：超级控件 - 给UILabel文字中的tag和url添加点击事件 - 制作漂亮的环形进度条 - 带切换Icon的密码文本框 - 使用UIWebView加载HTML和Gif动画 - 使用UIWebView加载本地页面并调用Js代码 - 通过Javascript代码调用原生程序 - 创建一个图文并茂的笔记本 - MKMapView的代理方法 - 在",
    "category": "Education",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 34,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/1a/f9/36/1af93635-0ef8-f850-4ae0-6d4ced85a7ba/mzl.gyugtakq.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/13/da/8e/13da8e2f-8bb8-72d1-5fe8-bfc34fff12e4/92c17820-5ec9-46e6-bd5e-2d678df3cc4b_oldIphone1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/c5/f5/80/c5f580e0-485d-5c5f-2d82-85ba7fc01690/mzl.vlgqrrdr.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/12/0c/a4/120ca4ee-9aac-3102-9814-a23a5838a93f/mzl.hxdutmcq.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/app%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E7%A5%9E%E5%85%B5%E5%88%A9%E5%99%A8/id1209739676?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/47/d6/7a/47d67ae9-89f5-2826-706f-d8eb97b7bc0b/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
    "developer": "发展 李",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 39,
    "slug": "python3ide",
    "name": "Python3IDE",
    "desc": "Python3IDE 是iOS平台上的应用程序集成开发环境。可以离线编译运行Python/Node/JS/C/C++/PHP/Lua/Perl脚本，内置常用扩展库，是您在iOS/iPad上编程的利器。   特性:  - Python3.11 运行时及标准库 - Node18 运行时 - LLVM/Clang - PHP/Lua/Perl - 内置终端，100+ Linux命令 - Python/Node/JS/C/C++/PHP/Lua/Perl脚本本地离线运行 - Pip 安装纯Python库 - Npm 安装Node库 - Git 版本控制 | Clone, Commit, Push - ",
    "category": "Developer Tools",
    "price": "免费",
    "originalPrice": null,
    "rating": 3.9,
    "reviewCount": 239,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d3/ab/aa/d3abaa2e-d252-206b-40c3-22eb678fea62/f64f487c-911f-48f4-90e7-daf38ce73369_phone5.5_1_code__cn.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/14/35/84/1435844a-3a25-e41e-b6d3-518ae9b1ba20/4e71c9c5-52cc-4d0b-ad47-ab7733790fc2_phone5.5_3_completion__cn.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9b/bd/b3/9bbdb3a2-c547-66b9-69ce-cd577da3f6b2/92d7714f-dd6e-444d-96ed-a471527f9f2c_phone5.5_2_pip_cn.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/af/c0/ed/afc0ed86-f29e-e8ef-55a5-d74b8077a43c/95a7154a-fc75-480a-8c41-0a80c86ca7b2_phone5.5_4_jupyter__cn.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d3/3e/39/d33e39c7-ebab-e849-395a-36d660f84d80/db9c3e2b-f8c5-4b60-85b7-e0631249df44_phone5.5_6_git_cn.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/python3ide/id1357215444?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c8/f0/99/c8f0993b-4f16-90c8-b0e1-44b4ba564492/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "辉 马",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 40,
    "slug": "java编译器-程序员必备开发工具",
    "name": "Java编译器-程序员必备开发工具",
    "desc": "Java代码编辑器，开发文大全，更有服务端、数据库、算法，带你从Java新手进阶到大神，还包含Java编程入门课程、编程文档、教程查阅等功能，一个 新型的Java编程学习平台。        零基础学Java编程，从Java修炼手册开始，让你的编程技术不断提高、更上一层楼。  配套Java编译器，帮助新人快速上手",
    "category": "Reference",
    "price": "免费",
    "originalPrice": null,
    "rating": 3.3,
    "reviewCount": 136,
    "platform": "iPhone / iPad",
    "tags": [
      "工具",
      "实用",
      "便捷"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/22/8b/39/228b39d4-0ecd-0f4d-2ae3-41c4f9b5aacc/f3a36c16-2650-4f68-8cc1-a723d6407a17_Simulator_Screen_Shot_-_iPhone_8_Plus_-_2022-05-05_at_10.19.26.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/6b/b2/74/6bb27488-cd4c-f168-daa7-b3fc3cb89add/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/9a/46/20/9a4620eb-163a-6196-e2b6-38dbdb0ca774/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/java%E7%BC%96%E8%AF%91%E5%99%A8-%E7%A8%8B%E5%BA%8F%E5%91%98%E5%BF%85%E5%A4%87%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/id1459795517?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/c6/32/03/c63203c1-26d0-2f1e-3c49-58f580dbfb2f/AppIcon-1x_U007emarketing-0-7-0-0-sRGB-85-220-0.png/512x512bb.jpg",
    "developer": "凌云 蔡",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 41,
    "slug": "photomath",
    "name": "Photomath",
    "desc": "通过世界上最常用的数学学习资源，学习如何解决数学问题，检查家庭作业和学习即将到来的考试和ACT/SAT。超过1亿次下载，每月解决数十亿问题！  运行原理 使用设备的相机即时扫描打印文本和手写数学问题，或使用我们的科学计算器输入和编辑方程式。 Photomath将每个数学问题分解为简单易懂的步骤，这样您就可以真正理解核心概念，并可以自信地回答问题。  主要特点 扫描教科书（打印）和手写问题 科学计算器 每个解决方案的逐步说明 多种解决方法 支持30多种语言 交互式图表  数学主题 基础数学/预代数：算术、整数、分数、十进制数、幂、根、因子 代数：线性方程/不等式、二次方程、方程组、对数、函数、矩",
    "category": "Education",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 18154,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/68/2c/2d/682c2d53-021b-6ebd-e839-df1c5515b278/f938847f-eb74-4fff-93e9-af68e3013885_01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/72/76/cc/7276cccb-8c81-b62d-5e70-12cfc71b765b/2d770822-bb51-48df-bd52-e57474d1a05c_02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/0d/60/88/0d608875-aff3-b008-b75b-8d282ba82923/91a51100-6fa8-4ef5-8284-e15f1f095d6b_03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/10/3b/13/103b13fe-c57d-f098-8eec-49bf6938388f/9b057430-0ce1-4002-b02a-7ee8fbf9733e_04.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/0d/76/c0/0d76c096-bf28-c043-c0cb-2ec0dfd19c90/cad2a436-4296-4dbd-b2b0-8b73980507bf_05.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/photomath/id919087726?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0a/7f/46/0a7f4650-c4ad-91ed-a71c-388a3398839f/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/512x512bb.jpg",
    "developer": "Google LLC",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 42,
    "slug": "最牛计算器-科学通用超级计算器",
    "name": "最牛计算器-科学通用超级计算器",
    "desc": "加减乘除百分比 清零平方除分母 删除等于小数点 静音开关巧运算",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.4,
    "reviewCount": 1049,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/58/dd/17/58dd178b-3d4a-b8bd-c98a-678cf7723b9f/mzl.iyxhuqyf.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/c4/51/67/c451677b-41f1-e6fd-c318-4d756a12b56f/mzl.gqmdkmwe.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/fd/77/29/fd77298d-3d47-5fda-2ffd-3461c48e0159/mzl.mxmhwvqw.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/ef/4f/09/ef4f0906-4760-6cde-edf9-dd467fee285f/mzl.uuotozop.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/a0/20/40/a020400f-fa4e-c67e-6a4e-013a5875a3c7/mzl.zgyetmmv.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%9C%80%E7%89%9B%E8%AE%A1%E7%AE%97%E5%99%A8-%E7%A7%91%E5%AD%A6%E9%80%9A%E7%94%A8%E8%B6%85%E7%BA%A7%E8%AE%A1%E7%AE%97%E5%99%A8/id1161975388?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/33/74/2c/33742c3d-1330-62d3-34ce-e9e4897300b9/zuiniuAppIcon-1x_U007emarketing-85-220-6.png/512x512bb.jpg",
    "developer": "继红 王",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 43,
    "slug": "天数计算器-日期-时间计算器",
    "name": "天数计算器 - 日期、时间计算器",
    "desc": "天数计算器 计算两个日期之间的差距。  日期计算器 计算两个日期及时间之间的经过时间。  时间计算器 计算两个时间之间的经过时间。",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 951,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e6/c6/a4/e6c6a494-fcb5-92a0-0062-77ef4fba703d/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/60/8d/44/608d44ce-1d26-4fa8-0ae1-b23611c5e3e5/mzl.hwtomkru.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/2c/b5/8b/2cb58baf-d41c-9cb7-be6c-997a8e83d45b/mzl.htvepkda.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%A4%A9%E6%95%B0%E8%AE%A1%E7%AE%97%E5%99%A8-%E6%97%A5%E6%9C%9F-%E6%97%B6%E9%97%B4%E8%AE%A1%E7%AE%97%E5%99%A8/id816849128?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/72/76/25/727625b7-9852-e8c6-368d-b20daa77e3a1/TimeAppIcon-0-0-1x_U007ephone-0-5-85-220.png/512x512bb.jpg",
    "developer": "山 钟",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 44,
    "slug": "计算器-新版计算机",
    "name": "计算器－新版计算机",
    "desc": "带计算历史记录的计算器：  1，无广告 2，显示计算历史记录 3，显示输入过程  4，启动超快 5，退格键 6，真人语音播报  7，键盘声音 8，键盘颜色 9，键盘振动  10，适合单手操作 11，支持科学计算 12，设置小数点位数 13，显示/隐藏千位分隔符  14，单位换算 15，汇率查询 16，分数计算器 17，BMI计算器 18，可爱的小图标插件   From2019219@gmail.com",
    "category": "Finance",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 142862,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/cd/fb/a4/cdfba48a-27ac-aeff-48c7-7da2b478ad4a/134a66d2-9ba3-4792-8187-e5b489a793ff_sin30.PNG/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/d4/d5/94/d4d594b2-a606-37b8-754e-7de63e14f643/3e9aba67-351b-4632-ba8d-b78a7415cefc_1242x2208bb-3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/4e/2a/c5/4e2ac558-dbbb-c6f7-f7c8-15d5bfbbc19a/2648f1e3-66ff-4054-aac1-94d62e868c94_5.5-_U5386_U53f2_U8bb0_U5f55.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/c5/d3/19/c5d319e5-6e58-ff9a-3ca5-cc86479c1d5a/b91b423b-3907-4e4c-901d-19220d0984af_5.5-_U65e0_U5e7f_U544a.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/2e/10/7e/2e107ede-08ed-3287-a566-21e4244a775d/9e37a2b4-f7e1-4f3d-b385-029fd49fac7b_5.5-_U79d1_U5b66_U8ba1_U7b97_U5668.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%AE%A1%E7%AE%97%E5%99%A8-%E6%96%B0%E7%89%88%E8%AE%A1%E7%AE%97%E6%9C%BA/id1458583388?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/34/a6/b3/34a6b385-de18-a844-56ad-940c973eec8c/AppIcon-0-0-1x_U007ephone-0-9-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "Beijing Free Calculator Technology Co., Ltd.",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 45,
    "slug": "智能写作大师一键文章生成写作助手",
    "name": "智能写作大师一键文章生成写作助手",
    "desc": "智能写作大师一键文章生成写作助手是一款创意工具。无论是寻找创作灵感，还是打造独一无二的艺术作品，我们的应用都能满足你的需求。  智能写作： 即刻获得创意冲击，轻松编写出精彩纷呈的文字。 文章生成： 一键生成生动文本，迅速传达您的思想和创意。 智能绘图： 创意无限可能，借助智能绘画功能，打造出惊艳的艺术品。  为何选择我们的应用？  创意激发： 我们是您创作的引擎，激发源源不断的灵感。 智能助手： 应用智能技术，提升创作效率，助您专注于创意表达。 多功能性： 一个应用满足您多样化的创作需求。  1、付款：用户确认购买并付款后计入iTunes账户； 2、取消续订：如需取消续订，请在当前订阅周期到期",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 257,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/dd/e9/f0/dde9f08d-c0ba-ac9b-2ce5-9d37ce4f2a61/acf8ed65-36dd-4386-821e-900c41168aa9_2208-1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/94/2d/e2/942de240-0c4f-5e83-21b7-ac58626d6e8d/52a92781-404a-41c1-b778-9d7e8371007e_2208-2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/7f/79/d6/7f79d66f-7cbd-9c99-f653-d124b806f581/8d762d70-0b04-48c2-a5c8-4c6f91d4a97e_2208-3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/a7/6d/92/a76d92c1-5141-0505-1177-8291ed94d398/371f8f6a-97d7-4e2c-ae89-52d033d541ea_2208-4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/4b/a4/bf/4ba4bf91-6125-b414-1f06-b3d8df51b4e9/f69d6269-f44e-4df3-a34e-f3affa83055d_2208-5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%99%BA%E8%83%BD%E5%86%99%E4%BD%9C%E5%A4%A7%E5%B8%88%E4%B8%80%E9%94%AE%E6%96%87%E7%AB%A0%E7%94%9F%E6%88%90%E5%86%99%E4%BD%9C%E5%8A%A9%E6%89%8B/id6472870993?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/4f/3d/25/4f3d251f-abdd-dc51-4b8a-0a7264c4d899/AppIcon-1x_U007ephone-0-10-0-85-220.jpeg/512x512bb.jpg",
    "developer": "Guangzhou Junyao Technology Co., Ltd",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 46,
    "slug": "文书岛-ai公文写作-老笔杆写材料神器",
    "name": "文书岛-AI公文写作&老笔杆写材料神器",
    "desc": "在繁忙的职场中，公文撰写往往占据了大量宝贵时间。现在，有了AI公文写作，这一切都将变得轻松高效。我们利用前沿的人工智能技术，为您打造了一款集智能生成、合规审核于一体的公文写作神器。 ====核心功能亮点==== 【智能生成，一键成稿】 只需简单输入公文的基本信息和要点，AI公文写作助手便能迅速理解您的需求，并自动生成符合规范的公文草稿。无论是通知、报告、请示还是决定，都能轻松应对，让您的公文撰写工作事半功倍。 【范文素材库，随时查阅】 内置海量官方公文和事务性公文范文素材，覆盖各行各业、各类场景。这些权威资料不仅为您提供了丰富的写作灵感，还能确保您的公文内容准确无误、专业规范。 【合规审核，规",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 1427,
    "platform": "iPhone / iPad",
    "tags": [
      "文书岛"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/79/62/29/79622940-db03-6d75-6722-81652a11e438/1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/64/c4/39/64c439c3-c1cb-8421-1a3c-e8541cf9b785/2.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/43/18/b8/4318b827-bc81-1624-8ae4-94785357fcef/3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c1/48/b9/c148b9e6-9bcd-53d9-1e38-2494dcf62988/4.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/df/7b/57/df7b5724-d85c-dc45-9b9d-e72315806402/5.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%96%87%E4%B9%A6%E5%B2%9B-ai%E5%85%AC%E6%96%87%E5%86%99%E4%BD%9C-%E8%80%81%E7%AC%94%E6%9D%86%E5%86%99%E6%9D%90%E6%96%99%E7%A5%9E%E5%99%A8/id6670460386?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f7/f6/18/f7f618a3-3222-50fc-5842-84374b040ee6/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    "developer": "Shisi information technology co., ltd",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 47,
    "slug": "摸鱼文案-ai写作神器",
    "name": "摸鱼文案 - AI写作神器",
    "desc": "AI摸鱼文案，开启机器人写作新时代!  AI摸鱼文案，针对大家难于向机器人发出好的指令的痛点，特别内嵌了数十种优秀的指令模板，让您轻松玩转A写作!  AI摸鱼文案，是您的机器人助理，他可以帮你处理日常性工作，比如写周报月报以及年度总结等等，让您有更多的时间精力，放到更有创造力的工作上来。只需一个指令，以秒计算生成相关内容以及格式。  AI摸鱼文案，是您的机器人帮手。因为智能，所以机器人可以迅速生成有吸引力的内容。无论是写媒体文章，还是起标题，以及生成朋友圈文案，它都可以选定吸引哪样的人群，从而更有针对性，更有效果!  AI摸鱼文案，是您的机器人合伙人。内嵌多种指令模板，比如SWOT 分析，以及",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 153,
    "platform": "iPhone / iPad",
    "tags": [
      "摸鱼文案"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/f4/6c/83/f46c8371-a3af-bb38-77e7-c9bebf54ae55/a53a51e9-bb26-4b4a-ae0c-4f76738585cc_01.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/66/35/e9/6635e912-d5ed-c7d5-96e1-12b986be31bd/e8222fa9-c823-498f-a167-bdee3cf2213b_02.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/09/4c/74/094c7475-5577-3097-ac07-6e85cba487e0/62405de3-da5c-4932-936f-d242bd0cdddd_03.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/19/dd/62/19dd629f-3178-9d2f-785a-f3cb04c0d6c6/9d4448d6-a571-4096-9c71-d8a3019b95d7_04.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/85/33/e2/8533e226-686b-a697-a655-d5849d8cd1ef/b78f3b7e-a9dd-4f9c-9bc9-8afaf5a07f03_05.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%91%B8%E9%B1%BC%E6%96%87%E6%A1%88-ai%E5%86%99%E4%BD%9C%E7%A5%9E%E5%99%A8/id6447236472?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/47/a5/70/47a57059-533d-9156-bbac-de58143f70ca/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    "developer": "Beijing Sunsoul Media Co., Ltd.",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 48,
    "slug": "魔法小组件-magic-widgets万能桌面主题壁纸top",
    "name": "魔法小组件-Magic Widgets万能桌面主题壁纸top",
    "desc": "魔法小组件-你的专属手机桌面主题美化APP  全新适配iOS17 StandBy模式，超好玩灵动岛：动画岛，工具岛等你体验。 上百款小组件，更多更好玩的创意玩法： 桌面X面板小组件、倒数日小组件、【打工人小组件】、相框小组件、步数小组件、睡眠小组件、锁屏快捷启动、锁屏纪念日、锁屏X面板、锁屏电量内存。 满足你对小组件的所有期待！ 专属客服一对一解决问题，快来和万能小组件一起探索iOS组件奥秘！  特色功能： 1、全透明小组件，一键设置，更贴合壁纸！ 2、特色打工岛，每天最期待的【下班倒计时】！ 3、霓虹X面板，身处赛博朋克。 4、打工人小组件，周五不肝，火速下班！ 5、小恐龙计步器，与你一起锻",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 3183,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/68/72/c368722a-a695-8b2b-1d6b-f210e739b50e/181f1443-8487-4156-9660-ad0ddd6316de_1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/aa/f3/48/aaf34852-2b82-2a95-0898-8f2a08f1dda8/bfa9d168-4208-4b49-9591-66bf1a89bfc1_2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/93/ac/54/93ac54be-8e69-7ed5-41bf-21cb8d2b8a6d/3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/be/bd/a6/bebda631-dfde-0626-fcf9-b2fbbf53df58/2001da17-24cb-45cf-a239-d05afe79ab7c_3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/93/63/65/936365b9-1a64-f74d-4a1b-bb5578d138eb/1a012cb7-fcaa-434b-8029-943006fe1eab_4.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E9%AD%94%E6%B3%95%E5%B0%8F%E7%BB%84%E4%BB%B6-magic-widgets%E4%B8%87%E8%83%BD%E6%A1%8C%E9%9D%A2%E4%B8%BB%E9%A2%98%E5%A3%81%E7%BA%B8top/id6443446274?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9d/75/15/9d75152a-ab4d-33a2-2927-a62dee28bc52/AppIcon-0-1x_U007epad-0-0-0-1-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "Chongqing LiangZeMu Technology Co., Ltd.",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 49,
    "slug": "我的桌面-iscreen-桌面小组件主题壁纸",
    "name": "我的桌面 · iScreen - 桌面小组件主题壁纸",
    "desc": "＊ 手机美化，iScreen 一下！＊  iScreen拥有众多原创设计师，持续更新有趣、鬼马、实用的创意！  ▶ App Store 编辑推荐 ◀ ▶ App Store 今日App ◀ ▶ App Store 必备生产力工具 ◀ ▶ 荣获 Next World 年度风采奖 ◀  ＊全新适配iOS26，支持液态玻璃小组件、空间景深壁纸等新功能，百变个性化组合搭配，让你的手机更有趣、更实用！  特色功能： 【iOS26】 专为iOS26开发的海量空间壁纸模板（全网挑战的跳崖壁纸、裸眼3D照片DIY、二次元、未来科技空间）、实时天气液态玻璃组件、液态玻璃主题套装，解锁你桌面的隐藏颜值！  【控制",
    "category": "Graphics & Design",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 3542225,
    "platform": "iPhone / iPad",
    "tags": [
      "我的桌面"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/be/f9/0c/bef90c6d-1251-0149-4187-716604717e3a/c9eee85c-5871-401b-a41c-900593b6d6fc_2208-_U52a8_U753b__U4e2d.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5b/7b/15/5b7b154b-2d31-62a1-d14a-0b6da872a29e/2208-_U7a7a_U95f4__U7b80.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/86/02/30/860230e4-f655-89c4-57c8-1a94150f83c4/2208-_U6db2_U6001_U73bb_U7483__U7b80.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/62/db/2b/62db2b8c-4ef8-150e-ace4-7b2141aa03e1/435fc32c-47e0-4319-ad7d-f50b4bcde01c_2208-_U9762_U677f__U4e2d.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e0/7a/d8/e07ad8fe-fe06-a781-56f9-09d0959d0e52/787201dc-24a0-46a6-baf6-a1d25658fed9_2208__U2013__U9501_U5c4f__U4e2d.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%88%91%E7%9A%84%E6%A1%8C%E9%9D%A2-iscreen-%E6%A1%8C%E9%9D%A2%E5%B0%8F%E7%BB%84%E4%BB%B6%E4%B8%BB%E9%A2%98%E5%A3%81%E7%BA%B8/id1534704608?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ff/11/bd/ff11bded-8534-d5a2-099c-f553c2e2083f/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220.jpeg/512x512bb.jpg",
    "developer": "Xiamen ShenZhuo Information Technology Co., Ltd.",
    "updatedAt": "2026-08-08"
  },
  {
    "id": 50,
    "slug": "koco-widgets-小组件-直接跳转",
    "name": "Koco Widgets - 小组件，直接跳转",
    "desc": "⊕ App Store 编辑精选 ⊕ App Store Banner 推荐 ⊕ App Store Spotlight 精选活动 ⊕ 超过 300,000 位用户选择   [直接跳转小组件]  点一下小组件，即可直接打开你选择的 App，无需二次跳转。  Koco Widgets 也为你的 iPhone 带来精致设计的小组件、灵动岛自定义，以及真正透明的桌面效果。    [主要功能]  直接跳转小组件：点一下小组件，即可直接打开你选择的 App，无需通过宿主 App 二次跳转。  灵动岛自定义：通过不同样式、内容与模式自定义灵动岛，打造更个性化的 iPhone 体验。  精致小组件：探索多款",
    "category": "Graphics & Design",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 2944,
    "platform": "iPhone / iPad",
    "tags": [
      "Koco"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0b/44/20/0b442025-d1c1-41ce-619c-4045a599fc4c/iPhone0.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/20/e1/d2/20e1d21f-e776-4684-cf15-fefd25438c30/iPhone1.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/34/04/de/3404de66-ee8e-a4b3-0f57-937fb7ca8d62/iPhone2.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d2/7c/24/d27c24d2-9571-dc22-3dbf-1be01e1a23f8/iPhone3.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/29/ab/d4/29abd4c9-ff96-8893-fc46-9fd5fd9084cc/iPhone5.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/koco-widgets-%E5%B0%8F%E7%BB%84%E4%BB%B6-%E7%9B%B4%E6%8E%A5%E8%B7%B3%E8%BD%AC/id6702013570?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/43/34/c4/4334c494-0ac3-97b4-49b2-bb94f20d7582/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "developer": "TINY GRID LTD.",
    "updatedAt": "2026-08-08"
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

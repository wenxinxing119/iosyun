// === App Data with localStorage support ===
const STORAGE_KEY = 'iosyun_apps';
const DATA_VERSION = 63; // 改这个数字强制刷新所有用户的缓存

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
    "updatedAt": "2026-08-28",
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
    "updatedAt": "2026-08-28",
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
    "updatedAt": "2026-08-29",
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
    "updatedAt": "2026-08-29",
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
    "updatedAt": "2026-08-24",
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
    "updatedAt": "2026-08-29",
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
    "updatedAt": "2026-08-21",
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
    "updatedAt": "2026-08-27",
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
    "updatedAt": "2026-08-28",
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
    "updatedAt": "2026-08-28",
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
    "updatedAt": "2026-08-29",
    "id": 11,
    "slug": "id1242689729",
    "slugAliases": [
      "番茄todo-极简高效自律番茄钟"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 12,
    "slug": "id1623308204",
    "slugAliases": [
      "我要做计划-时间管理-学习打卡-工作计划清单"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 13,
    "slug": "id993066159",
    "slugAliases": [
      "极简待办-日程安排-计划清单-提醒事项管理-便签备忘录记事本"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 14,
    "slug": "id1392166974",
    "slugAliases": [
      "指尖时光-日程计划-日历记事-目标打卡"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 15,
    "slug": "id1214302139",
    "slugAliases": [
      "幕布-大纲笔记-思维导图"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 16,
    "slug": "id6459478672",
    "slugAliases": [
      "豆包-随时帮忙的-ai-助手"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 17,
    "slug": "id1605585211",
    "slugAliases": [
      "汽水音乐-随时听好歌"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 18,
    "slug": "id6451407032",
    "slugAliases": [
      "红果短剧-海量热门短剧随心看"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 19,
    "slug": "id6464237904",
    "slugAliases": [
      "自由笔记"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 20,
    "slug": "notability-pdf",
    "slugAliases": [
      "notability-笔记-pdf"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 21,
    "slug": "id450748070",
    "slugAliases": [
      "有道云笔记-笔记扫描效率办公"
    ]
  },
  {
    "name": "Berry胶片相机 - 韩系自拍神器",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/62/7d/2b/627d2b7d-189b-7ac5-527c-3e31472fec3d/berryfilm-0-0-1x_U007ephone-0-1-sRGB-85-220.png/512x512bb.jpg",
    "category": "摄影",
    "price": "¥15.00",
    "originalPrice": null,
    "isFree": false,
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
    "updatedAt": "2026-08-28",
    "id": 22,
    "slug": "berry",
    "slugAliases": [
      "berry胶片相机-韩系自拍神器"
    ]
  },
  {
    "name": "航旅纵横PRO-民航官方直销平台",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/35/fc/69/35fc690f-ffb7-f014-3d0a-f6b5ec3af329/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": "¥1.00",
    "isFree": true,
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
    "updatedAt": "2026-08-29",
    "id": 23,
    "slug": "id768160271",
    "slugAliases": [
      "航旅纵横pro-民航官方直销平台"
    ]
  },
  {
    "name": "扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/f1/97/22f1975d-adfc-dd01-16d4-6cee2e076e20/AppIconPlus-0-1x_U007emarketing-0-6-0-0-sRGB-85-220-0.png/512x512bb.jpg",
    "category": "工具",
    "price": "免费",
    "originalPrice": "¥1.00",
    "isFree": true,
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
    "updatedAt": "2026-08-29",
    "id": 24,
    "slug": "id388624839",
    "slugAliases": [
      "扫描全能王-官方出品1元畅用版-扫描pdf文件-文字识别"
    ]
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
    "updatedAt": "2026-08-29",
    "id": 25,
    "slug": "id954724812",
    "slugAliases": [
      "同花顺至尊版-股票软件"
    ]
  },
  {
    "id": 26,
    "slug": "id972641888",
    "name": "老板食神 - 你的AI烹饪伙伴",
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
    "updatedAt": "2026-08-29",
    "description": "老板食神 —— 你的 AI 烹饪伙伴 海量精选菜谱 · 动态烹饪导航 · 实时教学陪伴，让烹饪成为日常享受  不知道做什么菜，担心做不好？老板食神来帮你！老板食神借力首个AI烹饪大模型，深度打通从\"想做什么\"到\"完美出锅\"的烹饪全过程，为您提供精准、简单、不翻车的菜谱与烹饪解决方案。汇聚海量精选菜谱，食神通过日常点滴交流更懂你的口味偏好和食材偏好，每一步烹饪过程都有清晰陪伴，帮您答疑解惑，让烹饪更从容、更高效。  核心功能亮点 —— 从灵感到出锅，全程护航 汇聚海量图文并茂精美菜谱，懂口味、知时令，帮你选好菜做好饭。小众菜谱食神也能帮你随心生成，简单对话更能调整适合自己的菜谱。口味南来北往、食",
    "slugAliases": [
      "老板食神-你的ai烹饪伙伴"
    ]
  },
  {
    "id": 27,
    "slug": "id1247069377",
    "name": "天天爱烹饪",
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
    "updatedAt": "2026-08-29",
    "description": "天天爱烹饪（烹饪达人）  完成有挑战的美味订单、升级厨房并成为烹饪达人！   天天爱烹饪（烹饪达人）是一个在经典美式餐厅中出售汉堡、培根三明治、薯条和奶昔的游戏！你能够快速的做好食物并端给你的顾客吗？ 我们全新的餐厅开张了！带着制作最美味汉堡以及赚大钱的梦想，你要有条不紊地制作出各类美食满足顾客，升级厨具和食物原料，装潢餐厅，并开出许多的分店成为汉堡大师！  全方位升级餐馆 手速要快！顾客等的时间越短，给的小费越多哦！如果能给他们餐后甜点小蛋糕就更完美了！用收入来升级你的厨房用具和食物原料，并且升级餐厅的各类装饰，这样就能争取到更多顾客和更多钞票！此外，购买了全自动烹饪机器的你在厨房会更加得心",
    "slugAliases": [
      "天天爱烹饪"
    ]
  },
  {
    "id": 28,
    "slug": "id1624871138",
    "name": "奇妙料理餐厅-儿童美食烹饪做饭软件",
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
    "updatedAt": "2026-08-29",
    "description": "【奇妙料理餐厅】真实模拟烧烤店、甜品店、汉堡小吃店、综合美食餐厅等多个特色主题餐厅，可口美味的汉堡、披萨、面条、牛排、烤鸭、甜甜圈、蛋糕、果汁等美食……儿童都能在【奇妙料理餐厅】里找到并烹饪它们。    在【奇妙料理餐厅】，儿童将角色扮演餐厅大厨，模拟经营美食餐厅，学习烹饪技巧，DIY美味料理。在制作美食的过程中，儿童将认识世界各地的食材，锻炼动手能力，创造美食故事。  美味小吃店——烹饪可口美味的汉堡、披萨、果汁 小吃店的美食料理台分为果汁区、汉堡区。先来DIY美味的豪华汉堡，香肠、牛肉饼任选一份，再加点西红柿、黄瓜等蔬菜均衡汉堡的口感。“重头戏”来了！餐厅为大厨准备了形状新奇的面包盖：汽车",
    "slugAliases": [
      "奇妙料理餐厅-儿童美食烹饪做饭软件"
    ]
  },
  {
    "id": 29,
    "slug": "id1183632694",
    "name": "菜谱大全Pro－小白学做家常菜做法必备烹饪助手",
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
    "updatedAt": "2026-08-26",
    "description": "菜谱大全，汇集了来自全国各地的数十万道家常菜，并配以精美的图片，内容丰富详细，图文搭配更容易上手，页面简洁大方，超级好用，瞬间爱上了有木有！  我们的产品特色： （1）数十万精品菜谱，统统免费使用！ （2）强大的搜索，帮你找到所有你想要的！ （3）强大的收藏，喜欢就毫不犹豫地留住！ （4）贴心的浏览记录，看过的菜谱都在这里！ （5）描述详细，图片高清，做菜轻松又容易！ （6）精品好菜推荐，天天都能吃出新花样！  有了菜谱大全，让你立马爱上做菜，轻松成为完美的厨房小能手！ ———————来自友友们的认可——————— “挺好的软件，对于厨房小白来说，是非常棒的助手，学会做饭，想吃什么做什么……”",
    "slugAliases": [
      "菜谱大全pro-小白学做家常菜做法必备烹饪助手"
    ]
  },
  {
    "id": 30,
    "slug": "id1071512246",
    "name": "小公主贝儿的甜品食谱制作教室-厨房游戏",
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
    "updatedAt": "2026-08-29",
    "description": "这是一个根据真实甜品食谱做成的亲子游戏，适合2-5岁的幼儿，游戏操作十分简单，可以有效启发孩子思维和思考，另一方面也可以让父母制作甜品的正确方法。游戏包含多个甜品的制作方法有炖蛋,黄金蛋糕,饼干,布丁,鲜奶冻,甜甜圈,樱桃奶酪和海绵蛋糕。  家长与孩子在游戏过程中必须互动，比如说每一个动作怎么表达，每一个步骤有什么用，游戏里都有哪一些物品，每当小朋友答对问题的时候必须称赞他们，这样可以有效提高孩子的自信，让他面对问题或困难的时候，可以有自信的解决。在和小朋友游戏结束后，家长可以尝试制作真实的甜品和小朋友一起吃。这样可以有效加强家长和孩子之间的关系。  游戏能够启发孩子的智慧。这就要求游戏活动既",
    "slugAliases": [
      "小公主贝儿的甜品食谱制作教室-厨房游戏"
    ]
  },
  {
    "id": 31,
    "slug": "id1136974705",
    "name": "烹饪大全-下厨房好帮手",
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
    "updatedAt": "2026-08-29",
    "description": "【汇集海量美食制作视频，高清教学】 【美食爱好者的必备App】  教程包括 • 热门家常菜的做法 • 烹饪的常用方法 • 家庭厨具的使用、介绍 • 中国八大菜系的做法 川菜、湘菜、鲁菜 • 鸡、鸭、鱼的常用做法  赶紧下载吧，厨艺大大的提高！",
    "slugAliases": [
      "烹饪大全-下厨房好帮手"
    ]
  },
  {
    "id": 32,
    "slug": "id1631529003",
    "name": "逍遥客栈 - 美食烹饪餐厅经营游戏",
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
    "updatedAt": "2026-08-29",
    "description": "玩家交流群：821383711  江湖是什么？ 是那白衣剑客，一人一马，仗剑行遍万里山河。 是那红衣佳人，端坐雕楼，唱罢人世悲欢喜乐。 是那七旬老叟，华发散乱，山门前枯等后辈归来。 江湖是什么？ 是那山门在一个雪夜轰然倒塌，老叟不见踪影。 是那雕楼画栋化作飞灰，红衣佳人挽起长发，抹去妆容，入红尘之中。 是那老马蹒跚，长剑染锈，白衣剑客再回市井之间。 江湖是什么？ 是那红尘烟火三千，小城、客栈、一碗浊酒。 是那镖客手中的一碗扯面，衙役筷下的半斤牛肉。 是那脚夫的口若悬河，是那戏子不曾卸下的妆容。  游戏特色: 1.从别样的角度解读江湖，江湖是刀光剑影，江湖是侠肝义胆，但江湖也是侠客手中美酒，筷下",
    "slugAliases": [
      "逍遥客栈-美食烹饪餐厅经营游戏"
    ]
  },
  {
    "id": 33,
    "slug": "id6754841237",
    "name": "翻译 - 实时AI翻译, 出国旅行必备翻译软件",
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
    "updatedAt": "2026-08-29",
    "description": "翻译软件 — 你的智能翻译助手 翻译软件是一款功能强大的 AI 翻译助手， 支持 文本、语音、图片、文档 等多种形式的实时翻译，随时随地畅通交流。 无论是阅读外文文章、出国旅行， 还是跨语言聊天、识别图片文字， 翻译软件都能帮你快速、准确地完成翻译，让沟通更加自然流畅。 主要功能 • 文本翻译 —— 支持 100+ 语言，快速、精准的多语言翻译。 • 拍照翻译 —— 打开相机即可翻译菜单、标识、图片内容。 • 对话模式 —— 实时语音互译，面对面交流无障碍。 • 文档翻译 —— 支持 PDF、Word 等文件导入与整篇翻译。 • 离线翻译 —— 下载语言包，无网环境也能使用。 • 翻译历史 —",
    "slugAliases": [
      "翻译-实时ai翻译-出国旅行必备翻译软件"
    ]
  },
  {
    "id": 34,
    "slug": "id1388845809",
    "name": "英语翻译官-学英语必备中英文翻译词典",
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
    "updatedAt": "2026-08-29",
    "description": "《英语翻译官》更懂国人专注英汉翻译，依托最新人工智能，采用NMT（神经网络机器翻译）系统，上下文理解更准确翻译。AI随身拍照语音识别翻译，出国旅行英语学习翻译专家。  英语学习，旅游出行必备翻译利器！赶紧试试吧！   ——【核心功能】—— 1，文本翻译：专注英汉翻译，更懂国人，依托人工智能，采用NMT（神经网络机器翻译）系统，上下文理解更准确的译文。  2，拍照翻译：随身拍照片识别翻译、相册选图翻译任意选；拍照一键翻译，旅游出行、阅读英语学习，高效率翻译利器。  3，语音翻译：最新人工智能技术，高分辨率人声识别转为文字翻译！出国旅游/英语学习必备翻译助手。  4，对话翻译：实时语音翻译，专业英",
    "slugAliases": [
      "英语翻译官-学英语必备中英文翻译词典"
    ]
  },
  {
    "id": 35,
    "slug": "id1056652191",
    "name": "翻译官-出国旅游语音图片全能翻译软件",
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
    "updatedAt": "2026-08-29",
    "description": "出国翻译软件支持200多种语言翻译；实现语音翻译，图片翻译，拍照翻译，文本翻译；满足出国翻译，旅行翻译，在线翻译等场景翻译；支持英语日语词典查询。在生活上，工作上，学习上能给小伙伴带来帮助的智能翻译软件。  app主要功能包括：  =多种翻译平台= - 支持百度翻翻译，谷歌翻译，微软翻译，能更稳定，更准确的翻译。  =语音翻译= - 告别手写打字输入，通过语音准确的翻译成目标语言。  =图片拍照翻译= - 支持菜单、路标、文章等一键翻译，自动保存拍照翻译结果，支持中文、英语、日语、韩语、泰语、越南语、俄语、波兰语、德语、丹麦语、法语、葡萄牙语、西班牙语、意大利语、希腊语、瑞典语、印地语等语言。",
    "slugAliases": [
      "翻译官-出国旅游语音图片全能翻译软件"
    ]
  },
  {
    "id": 36,
    "slug": "id1397676648",
    "name": "泰语翻译官-泰国旅游泰语学习随身译",
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
    "updatedAt": "2026-08-29",
    "description": "《泰语翻译官》中文泰语互译神器，语音识别翻译、地道发音，泰语日常口语库。泰国旅游泰语学习随身必备！新版更强大翻译功能，更丰富内容，更具价值的泰语翻译官，等你来试。  ——【核心功能】—— 1，文本翻译：接入泰国本土字词库，精准极速地道的中泰文互译！ 2，语音翻译：最新人工智能技术，高分辨率人声识别转为文字翻译！泰国旅游/泰语学习必备翻译助手。 3，拍照翻译：手机拍照片泰文识别翻译，相册选图翻译任意选；拍照一键翻译，旅游出行、泰语学习，高效率翻译利器。 4，翻译收藏：单词生词、不熟的常用语、经典名句、旅游专用语、商务泰常用语、通通收藏，随时随地翻看和朗读。 5，学习拓展：字母发音、有声节目、词汇",
    "slugAliases": [
      "泰语翻译官-泰国旅游泰语学习随身译"
    ]
  },
  {
    "id": 37,
    "slug": "id1470936215",
    "name": "力扣 LeetCode",
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
    "updatedAt": "2026-08-29",
    "description": "力扣（LeetCode）App 全新功能，支持移动端代码编程，实时判题，让你码不停题。  - 学习提升，快拿 Offer - 力扣社区，有问必答 - 脑力健身，极客必备  全球极客职业技能成长平台，想要提升技术能力从这里开始。海量技术题库、求职面试经验、充足技术干货等你来，力扣助你职业技能快速成长！  [趣学习] - 免费力扣题库、剑指 Offer - 职业化编程 - 上万社区题解 - 企业面试考题 - 技术交流分享社区  「扣代码」 电脑不在身边，iPhone 也可实操代码学习编程。针对 iPad 全面优化，配合键盘、鼠标、快捷键，动动手指、刷刷键盘，让你迅速开启不受打扰的沉浸式编程学习体验",
    "slugAliases": [
      "力扣-leetcode"
    ]
  },
  {
    "id": 38,
    "slug": "app",
    "name": "app开发中的神兵利器",
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
    "updatedAt": "2026-08-29",
    "description": "【学员在App Store上的真实评价】 『先给个五星好评 等你们更新了 再给你5星 凑十颗』by 孙洪展 – Jun 29, 2017 『非常不错  学习到了不少语法。看的非常明白』by 照顾儿子 – Jun 25, 2017  【章节列表】 第一章：超级控件 - 给UILabel文字中的tag和url添加点击事件 - 制作漂亮的环形进度条 - 带切换Icon的密码文本框 - 使用UIWebView加载HTML和Gif动画 - 使用UIWebView加载本地页面并调用Js代码 - 通过Javascript代码调用原生程序 - 创建一个图文并茂的笔记本 - MKMapView的代理方法 - 在",
    "slugAliases": [
      "app开发中的神兵利器"
    ]
  },
  {
    "id": 39,
    "slug": "python3ide",
    "name": "Python3IDE",
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
    "updatedAt": "2026-08-29",
    "description": "Python3IDE 是iOS平台上的应用程序集成开发环境。可以离线编译运行Python/Node/JS/C/C++/PHP/Lua/Perl脚本，内置常用扩展库，是您在iOS/iPad上编程的利器。   特性:  - Python3.11 运行时及标准库 - Node18 运行时 - LLVM/Clang - PHP/Lua/Perl - 内置终端，100+ Linux命令 - Python/Node/JS/C/C++/PHP/Lua/Perl脚本本地离线运行 - Pip 安装纯Python库 - Npm 安装Node库 - Git 版本控制 | Clone, Commit, Push - "
  },
  {
    "id": 40,
    "slug": "java",
    "name": "Java编译器-程序员必备开发工具",
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
    "updatedAt": "2026-08-29",
    "description": "Java代码编辑器，开发文大全，更有服务端、数据库、算法，带你从Java新手进阶到大神，还包含Java编程入门课程、编程文档、教程查阅等功能，一个 新型的Java编程学习平台。        零基础学Java编程，从Java修炼手册开始，让你的编程技术不断提高、更上一层楼。  配套Java编译器，帮助新人快速上手",
    "slugAliases": [
      "java编译器-程序员必备开发工具"
    ]
  },
  {
    "id": 41,
    "slug": "photomath",
    "name": "Photomath",
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
    "updatedAt": "2026-08-29",
    "description": "通过世界上最常用的数学学习资源，学习如何解决数学问题，检查家庭作业和学习即将到来的考试和ACT/SAT。超过1亿次下载，每月解决数十亿问题！  运行原理 使用设备的相机即时扫描打印文本和手写数学问题，或使用我们的科学计算器输入和编辑方程式。 Photomath将每个数学问题分解为简单易懂的步骤，这样您就可以真正理解核心概念，并可以自信地回答问题。  主要特点 扫描教科书（打印）和手写问题 科学计算器 每个解决方案的逐步说明 多种解决方法 支持30多种语言 交互式图表  数学主题 基础数学/预代数：算术、整数、分数、十进制数、幂、根、因子 代数：线性方程/不等式、二次方程、方程组、对数、函数、矩"
  },
  {
    "id": 42,
    "slug": "id1161975388",
    "name": "最牛计算器-科学通用超级计算器",
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
    "updatedAt": "2026-08-29",
    "description": "加减乘除百分比 清零平方除分母 删除等于小数点 静音开关巧运算",
    "slugAliases": [
      "最牛计算器-科学通用超级计算器"
    ]
  },
  {
    "id": 43,
    "slug": "id816849128",
    "name": "天数计算器 - 日期、时间计算器",
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
    "updatedAt": "2026-08-29",
    "description": "天数计算器 计算两个日期之间的差距。  日期计算器 计算两个日期及时间之间的经过时间。  时间计算器 计算两个时间之间的经过时间。",
    "slugAliases": [
      "天数计算器-日期-时间计算器"
    ]
  },
  {
    "id": 44,
    "slug": "id1458583388",
    "name": "计算器－新版计算机",
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
    "updatedAt": "2026-08-29",
    "description": "带计算历史记录的计算器：  1，无广告 2，显示计算历史记录 3，显示输入过程  4，启动超快 5，退格键 6，真人语音播报  7，键盘声音 8，键盘颜色 9，键盘振动  10，适合单手操作 11，支持科学计算 12，设置小数点位数 13，显示/隐藏千位分隔符  14，单位换算 15，汇率查询 16，分数计算器 17，BMI计算器 18，可爱的小图标插件   From2019219@gmail.com",
    "slugAliases": [
      "计算器-新版计算机"
    ]
  },
  {
    "id": 45,
    "slug": "id6472870993",
    "name": "智能写作大师一键文章生成写作助手",
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
    "updatedAt": "2026-08-29",
    "description": "智能写作大师一键文章生成写作助手是一款创意工具。无论是寻找创作灵感，还是打造独一无二的艺术作品，我们的应用都能满足你的需求。  智能写作： 即刻获得创意冲击，轻松编写出精彩纷呈的文字。 文章生成： 一键生成生动文本，迅速传达您的思想和创意。 智能绘图： 创意无限可能，借助智能绘画功能，打造出惊艳的艺术品。  为何选择我们的应用？  创意激发： 我们是您创作的引擎，激发源源不断的灵感。 智能助手： 应用智能技术，提升创作效率，助您专注于创意表达。 多功能性： 一个应用满足您多样化的创作需求。  1、付款：用户确认购买并付款后计入iTunes账户； 2、取消续订：如需取消续订，请在当前订阅周期到期",
    "slugAliases": [
      "智能写作大师一键文章生成写作助手"
    ]
  },
  {
    "id": 46,
    "slug": "id6670460386",
    "name": "文书岛-AI公文写作&老笔杆写材料神器",
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
    "updatedAt": "2026-08-29",
    "description": "在繁忙的职场中，公文撰写往往占据了大量宝贵时间。现在，有了AI公文写作，这一切都将变得轻松高效。我们利用前沿的人工智能技术，为您打造了一款集智能生成、合规审核于一体的公文写作神器。 ====核心功能亮点==== 【智能生成，一键成稿】 只需简单输入公文的基本信息和要点，AI公文写作助手便能迅速理解您的需求，并自动生成符合规范的公文草稿。无论是通知、报告、请示还是决定，都能轻松应对，让您的公文撰写工作事半功倍。 【范文素材库，随时查阅】 内置海量官方公文和事务性公文范文素材，覆盖各行各业、各类场景。这些权威资料不仅为您提供了丰富的写作灵感，还能确保您的公文内容准确无误、专业规范。 【合规审核，规",
    "slugAliases": [
      "文书岛-ai公文写作-老笔杆写材料神器"
    ]
  },
  {
    "id": 47,
    "slug": "id6447236472",
    "name": "摸鱼文案 - AI写作神器",
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
    "updatedAt": "2026-08-29",
    "description": "AI摸鱼文案，开启机器人写作新时代!  AI摸鱼文案，针对大家难于向机器人发出好的指令的痛点，特别内嵌了数十种优秀的指令模板，让您轻松玩转A写作!  AI摸鱼文案，是您的机器人助理，他可以帮你处理日常性工作，比如写周报月报以及年度总结等等，让您有更多的时间精力，放到更有创造力的工作上来。只需一个指令，以秒计算生成相关内容以及格式。  AI摸鱼文案，是您的机器人帮手。因为智能，所以机器人可以迅速生成有吸引力的内容。无论是写媒体文章，还是起标题，以及生成朋友圈文案，它都可以选定吸引哪样的人群，从而更有针对性，更有效果!  AI摸鱼文案，是您的机器人合伙人。内嵌多种指令模板，比如SWOT 分析，以及",
    "slugAliases": [
      "摸鱼文案-ai写作神器"
    ]
  },
  {
    "id": 48,
    "slug": "id6443446274",
    "name": "魔法小组件-Magic Widgets万能桌面主题壁纸top",
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
    "updatedAt": "2026-08-29",
    "description": "魔法小组件-你的专属手机桌面主题美化APP  全新适配iOS17 StandBy模式，超好玩灵动岛：动画岛，工具岛等你体验。 上百款小组件，更多更好玩的创意玩法： 桌面X面板小组件、倒数日小组件、【打工人小组件】、相框小组件、步数小组件、睡眠小组件、锁屏快捷启动、锁屏纪念日、锁屏X面板、锁屏电量内存。 满足你对小组件的所有期待！ 专属客服一对一解决问题，快来和万能小组件一起探索iOS组件奥秘！  特色功能： 1、全透明小组件，一键设置，更贴合壁纸！ 2、特色打工岛，每天最期待的【下班倒计时】！ 3、霓虹X面板，身处赛博朋克。 4、打工人小组件，周五不肝，火速下班！ 5、小恐龙计步器，与你一起锻",
    "slugAliases": [
      "魔法小组件-magic-widgets万能桌面主题壁纸top"
    ]
  },
  {
    "id": 49,
    "slug": "id1534704608",
    "name": "我的桌面 · iScreen - 桌面小组件主题壁纸",
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
    "updatedAt": "2026-08-29",
    "description": "＊ 手机美化，iScreen 一下！＊  iScreen拥有众多原创设计师，持续更新有趣、鬼马、实用的创意！  ▶ App Store 编辑推荐 ◀ ▶ App Store 今日App ◀ ▶ App Store 必备生产力工具 ◀ ▶ 荣获 Next World 年度风采奖 ◀  ＊全新适配iOS26，支持液态玻璃小组件、空间景深壁纸等新功能，百变个性化组合搭配，让你的手机更有趣、更实用！  特色功能： 【iOS26】 专为iOS26开发的海量空间壁纸模板（全网挑战的跳崖壁纸、裸眼3D照片DIY、二次元、未来科技空间）、实时天气液态玻璃组件、液态玻璃主题套装，解锁你桌面的隐藏颜值！  【控制",
    "slugAliases": [
      "我的桌面-iscreen-桌面小组件主题壁纸"
    ]
  },
  {
    "id": 50,
    "slug": "koco-widgets",
    "name": "Koco Widgets - 小组件，直接跳转",
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
    "updatedAt": "2026-08-29",
    "description": "⊕ App Store 编辑精选 ⊕ App Store Banner 推荐 ⊕ App Store Spotlight 精选活动 ⊕ 超过 300,000 位用户选择   [直接跳转小组件]  点一下小组件，即可直接打开你选择的 App，无需二次跳转。  Koco Widgets 也为你的 iPhone 带来精致设计的小组件、灵动岛自定义，以及真正透明的桌面效果。    [主要功能]  直接跳转小组件：点一下小组件，即可直接打开你选择的 App，无需通过宿主 App 二次跳转。  灵动岛自定义：通过不同样式、内容与模式自定义灵动岛，打造更个性化的 iPhone 体验。  精致小组件：探索多款",
    "slugAliases": [
      "koco-widgets-小组件-直接跳转"
    ]
  },
  {
    "id": 51,
    "slug": "id1509859425",
    "name": "主题商店-超高清墙纸动态壁纸大全",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 13104,
    "platform": "iPhone / iPad",
    "tags": [
      "主题商店"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/64/26/5f/64265f59-a53b-83af-1755-330b35d21213/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/df/c0/2a/dfc02a43-c2a2-48b1-5fce-8e51fd502595/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/80/e6/12/80e61251-031c-a67e-a924-127a31cb1da6/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e3/da/6a/e3da6a36-e6ed-efe7-4475-ec61eb86061e/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/62/53/10/62531003-314f-4a97-adb5-3655b400910f/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E4%B8%BB%E9%A2%98%E5%95%86%E5%BA%97-%E8%B6%85%E9%AB%98%E6%B8%85%E5%A2%99%E7%BA%B8%E5%8A%A8%E6%80%81%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/id1509859425?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/32/c9/6a/32c96a40-79d1-7b41-eb0c-f909cbda5f5a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/512x512bb.jpg",
    "developer": "志平 吕",
    "updatedAt": "2026-08-29",
    "description": "玩转你的动态壁纸！ 超全动态壁纸，动态屏保任你选择 高清壁纸才更能彰显你独特的气质 让你的屏幕获得高质量的动画，让你的设备吸引艳羡的目光！ 你还能一键创建个人收藏，保存自选壁纸！ 将它们保存在“收藏”类目下。 动动手指，获得你喜欢的壁纸，随心随时定制锁屏。 \t 特色：制定个性日历壁纸，无需打开手机桌面，在手机锁屏界面即可浏览本月日历及本月节假日  注意：目前仅支持在iPhone设置为锁定屏幕时，按压展示动态壁纸效果；设置主屏幕暂不支持动态效果仍为静态壁纸；",
    "slugAliases": [
      "主题商店-超高清墙纸动态壁纸大全"
    ]
  },
  {
    "id": 52,
    "slug": "id1533406571",
    "name": "小组件-桌面灵动岛主题壁纸小插件",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 11286,
    "platform": "iPhone / iPad",
    "tags": [
      "小组件"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/0c/4d/d7/0c4dd7eb-d6df-fd95-b9cf-d0fc41957477/3291732d-2c1f-4501-b9b8-1e329707fc8f_1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/5a/de/ae/5adeae8f-a2ff-c12a-1256-4c6e473dea9d/4c23d67a-dd65-475c-b22d-116c1d52f299_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/0f/48/2f/0f482f7f-8402-d02e-3407-1937c37f8af7/76b3411e-f7a9-4043-9b1c-af6f6251489c_3.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%B0%8F%E7%BB%84%E4%BB%B6-%E6%A1%8C%E9%9D%A2%E7%81%B5%E5%8A%A8%E5%B2%9B%E4%B8%BB%E9%A2%98%E5%A3%81%E7%BA%B8%E5%B0%8F%E6%8F%92%E4%BB%B6/id1533406571?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/3a/e0/73/3ae073fe-0985-fec7-df62-584d46feb257/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "文飞 黎",
    "updatedAt": "2026-08-29",
    "description": "Art Widget 是一款专为iOS14用户设计的个性化桌面小组件APP，可以让你将个性时尚的小组件直接添加到你的桌面上，打造属于你的独一无二的手机屏幕。  -海量模板：无数设计精美的小组件模板可供选择 -操作简单，快速运行程序、一键添加个性小组件 -所有运行iOS 14的手机和ipad设备都支持",
    "slugAliases": [
      "小组件-桌面灵动岛主题壁纸小插件"
    ]
  },
  {
    "id": 53,
    "slug": "top-widgets",
    "name": "Top Widgets⁺ - 万能小组件手机桌面主题美化工具",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 1159733,
    "platform": "iPhone / iPad",
    "tags": [
      "工具",
      "实用",
      "便捷",
      "Top"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e4/f6/12/e4f6122e-815b-3ffa-3500-dbd2a96c6539/fa68d90e-78db-4571-afd4-d8deeb6ae1f0_11.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e3/82/65/e38265e1-b60a-c5b8-8111-70d347bc7250/d25c7a82-995c-412a-bbf1-bd4e4d34dd5b_10_U5347_U7ea7-5.5_2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b6/9b/7b/b69b7bae-f065-e5cd-bc76-11c19487641b/ea482402-ab32-4787-92e4-79a69fd05fb1__U622a_U56fe5.5_U5bf8.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/75/c9/e5/75c9e589-3ccf-21d9-d360-5c70ab4f13a1/982c5f93-f08d-4ed0-9db3-7a96c88f13d2_22.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c9/d3/2b/c9d32b87-738e-5d37-864f-8be69617302d/4dd99dc0-aeec-4b37-8617-b4c786413f5b_IMG_4149.PNG/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/top-widgets-%E4%B8%87%E8%83%BD%E5%B0%8F%E7%BB%84%E4%BB%B6%E6%89%8B%E6%9C%BA%E6%A1%8C%E9%9D%A2%E4%B8%BB%E9%A2%98%E7%BE%8E%E5%8C%96%E5%B7%A5%E5%85%B7/id6446477593?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/20/da/dd/20daddd4-13a8-0555-c609-e25c22e5f097/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "developer": "Chengdu Tiange Technology Co., Ltd",
    "updatedAt": "2026-08-29",
    "description": "▶ App Store 人气推荐 ◀  ▶ 百万用户一致好评 ◀  ▶ 桌面美化与效率工具首选 ◀  为 OS 26 带来前所未有的桌面体验。基于全新系统特性，融入液态玻璃视觉、立体3D景深壁纸及可自定义的动态封面，打造出层次丰富、多维沉浸的交互空间。每一次点亮屏幕，都是一场视觉与艺术的盛宴。  超过 5000+ 专业原创设计师，不断注入新鲜灵感。从空间景深到液态光影，从动态壁纸到创意主题，让你的桌面不仅仅是工具，更是风格、心情与个性的表达。  【OS 26 沉浸式视觉升级】  空间景深壁纸：智能分层与动态交互，让时间与元素自然融合，展现逼真的立体感与空间感。  液态玻璃主题：如流动的水晶般透",
    "slugAliases": [
      "top-widgets-万能小组件手机桌面主题美化工具"
    ]
  },
  {
    "id": 54,
    "slug": "id915249334",
    "name": "快捷指令",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.4,
    "reviewCount": 25955,
    "platform": "iPhone / iPad",
    "tags": [
      "快捷指令"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/14/3f/66/143f6676-5063-0bc0-b521-4036e4f378a7/mzl.rqiimtmu.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/f9/b7/06/f9b706e0-eabd-56dd-dd37-b9b9db5e59aa/mzl.ywkbczem.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/a1/b1/c0/a1b1c0d1-bce9-9f10-62a8-cfafa3e4d048/mzl.xterzzpu.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/5d/32/e6/5d32e6d6-aaab-dd95-d7da-3e2c088d2870/mzl.gzcqkqef.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%BF%AB%E6%8D%B7%E6%8C%87%E4%BB%A4/id915249334?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/3e/52/07/3e520776-0908-893c-2248-6c9d29a03cc7/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/512x512bb.jpg",
    "developer": "Apple Distribution International",
    "updatedAt": "2026-08-29",
    "description": "Siri 捷径可配合应用快速完成各种任务。您只需轻点一下，或让 Siri 帮您完成。“捷径”应用可为您喜爱的应用创建包括多个步骤的个性化捷径。您可以从“捷径中心”中数以百计的示例开始，或通过拖放操作创建自己的捷径。  “捷径”中包含了 300 多个内建操作，可与众多您喜爱的应用配合使用，包括“通讯录”、“日历”、“地图”、“音乐”、“照片”、“相机”、“提醒事项”、Safari 浏览器和“健康”，以及任何支持 Siri 捷径的应用。  使用“捷径”应用，您可以： * 直接让 Siri 获取回家的路线，发送预计到达时间以及开始听新闻 * 添加致电他人的主屏幕图标 * 制作动画 GIF * 从 S",
    "slugAliases": [
      "快捷指令"
    ]
  },
  {
    "id": 55,
    "slug": "id1540915106",
    "name": "快捷指令库-充电动画,捷径库&小组件",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.5,
    "reviewCount": 4798,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/b6/4f/38/b64f3886-fc65-b63d-c86d-f7f51a3f0b96/cd147515-1126-4182-b2d1-a5587aba9238_1242_2208_3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/e1/0d/68/e10d6819-f352-1e9f-ff29-494db855ae94/cdb02fa5-451a-4eed-afdd-e4bd67fcae80_1242_2208_1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/ec/96/a1/ec96a1f2-00c7-7a33-0bfb-737f995b0144/88bd5b45-d5fa-4f2d-bf43-9fdfc656f3ab_1242_2208_4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/c2/b8/db/c2b8dba2-3de7-611d-90a8-96bb22d383ca/79609326-f7df-4205-914f-7415de8f9444_1242_2208_5.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/6e/3a/56/6e3a5640-673f-5839-d5d0-c135366779e5/c8f55ebd-d4d8-445e-9c58-545556d6e351_1242_2208_2.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%BF%AB%E6%8D%B7%E6%8C%87%E4%BB%A4%E5%BA%93-%E5%85%85%E7%94%B5%E5%8A%A8%E7%94%BB-%E6%8D%B7%E5%BE%84%E5%BA%93-%E5%B0%8F%E7%BB%84%E4%BB%B6/id1540915106?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fc/5c/73/fc5c7352-1d5a-6726-0b2e-675cd3c887f2/AppIcon-1x_U007emarketing-0-8-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "PeiYi Chen",
    "updatedAt": "2026-08-29",
    "description": "快捷指令大师专注于发现和分享捷径、您可以一键体验各类热门有趣的快捷指令 快捷指令包含了 多类直接可以使用的捷径，能够完成众多独特的功能。 并且还按照功能进行划分分类“图书”、“娱乐”、“工具”、“社交”、“生活”、“效率”、“音乐”，丰富您的日常生活，操作简单编辑，轻松设置即可实现各种捷径。  详细介绍 随心更改图标，字铃声，自定义图标、铃声让你个性十足 带密码锁的图标，更好的保护你的隐私 更换应用名字，让你的手机桌面更有个性！  连续会员订阅说明： -订阅周期：一个月或一年 -付款：用户付款记入iTunes账户 -取消订阅：如需取消订阅，请在当前订阅到期24小时以前，手动到在Apple ID",
    "slugAliases": [
      "快捷指令库-充电动画-捷径库-小组件"
    ]
  },
  {
    "id": 56,
    "slug": "id1157850928",
    "name": "易买工品",
    "category": "Shopping",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.4,
    "reviewCount": 8,
    "platform": "iPhone / iPad",
    "tags": [
      "易买工品"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/51/53/20/51532000-dfd3-6c3e-ac07-e0900232cbb4/IMG_2266.PNG/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e2/9e/1b/e29e1ba5-82dc-01bb-32a4-53d72c015210/IMG_2267.PNG/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7c/67/f9/7c67f946-1fb1-9793-f066-bc033d52d452/IMG_2268.PNG/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/93/d7/d7/93d7d754-aab7-db58-2d6f-e5822dba5c47/IMG_2269.PNG/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/76/6f/93/766f9335-4f12-792c-37d6-f8e02f4b7515/IMG_2270.PNG/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%98%93%E4%B9%B0%E5%B7%A5%E5%93%81/id1157850928?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f7/25/f8/f725f846-ae0c-af50-0acc-f526947dbb70/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
    "developer": "Shanghai Yesmro Information Technology CO.,LTD.",
    "updatedAt": "2026-08-29",
    "description": "---工业品便利网上店，让小企业购买FA自动化零配件更方便---； 1.品种齐全：370万+产品，覆盖FA工厂自动化零配件； 2.闪电发货：27000+产品当日发货； 3.只卖正品：所有产品正规渠道或者厂家进货，确保正品； 4.明码标价：1个起卖，1块钱也开票。  易买工品APP是一款工业品采购移动商城，我们致力于成为一家中国人打造的世界级MRO专业人员，让小企业购买耗材更方便，1个起卖，还可以开具增值税发票，为您打造简单、可靠、愉悦的采购体验。具有商品搜索/浏览、商品购买、在线支付/货到付款、订单查询、物流跟踪、在线客服等功能，是您手机里的自动化耗材市场。  ---使用者反馈--- 1.端子",
    "slugAliases": [
      "易买工品"
    ]
  },
  {
    "id": 57,
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
    "updatedAt": "2026-08-29",
    "slug": "kimi"
  },
  {
    "id": 58,
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
    "updatedAt": "2026-08-29",
    "slug": "id416048305",
    "slugAliases": [
      "美图秀秀-视频-图片-live人像精修工具"
    ]
  },
  {
    "id": 59,
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
    "updatedAt": "2026-08-29",
    "slug": "wink-live",
    "slugAliases": [
      "wink-视频-live超清美颜"
    ]
  },
  {
    "id": 60,
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
    "updatedAt": "2026-08-29",
    "slug": "id1079718756",
    "slugAliases": [
      "鲨鱼记账-3秒钟快速记账手机助手"
    ]
  },
  {
    "id": 61,
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
    "updatedAt": "2026-08-29",
    "slug": "id372353614",
    "slugAliases": [
      "随手记-快捷自动记账"
    ]
  },
  {
    "id": 62,
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
    "updatedAt": "2026-08-29",
    "slug": "icost",
    "slugAliases": [
      "icost记账-快速简洁好用的记账理财助手-记账软件"
    ]
  },
  {
    "id": 63,
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
    "updatedAt": "2026-08-29",
    "slug": "forest",
    "slugAliases": [
      "forest-专注森林-番茄钟学习计时器"
    ]
  },
  {
    "id": 64,
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
    "updatedAt": "2026-08-29",
    "slug": "id6670396916",
    "slugAliases": [
      "可灵ai-ai图片-视频创作工具"
    ]
  },
  {
    "id": 65,
    "slug": "id1558075461",
    "name": "光传输线路智能运维仪-远程控制端",
    "description": "本app用于光传输线路智能运维仪的远程控制与操作，须与该型硬件设备配合使用。",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 5,
    "reviewCount": 6,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ba/63/5e/ba635e7e-220f-0848-70c1-e236a8b74757/e5b94627-70c1-4736-b8dc-dfdc2dfb732d_Simulator_Screen_Shot_-_iPhone_8_Plus_-_2021-08-13_at_05.37.10.png/406x228bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%85%89%E4%BC%A0%E8%BE%93%E7%BA%BF%E8%B7%AF%E6%99%BA%E8%83%BD%E8%BF%90%E7%BB%B4%E4%BB%AA-%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6%E7%AB%AF/id1558075461?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fd/24/b7/fd24b71a-6b95-5d9e-e80e-9f5f6b071d03/yzAppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Wuxi Yuanzhi Science & Technology Development Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 66,
    "slug": "id6443744358",
    "name": "爱远控 远程控制",
    "description": "爱远控是一款安全稳定的远程控制软件，支持移动设备与Windows主机设备之间远程控制。 具有手机端远程办公、远程管理监控电脑等功能。 通过爱远控，可以实现随时随地使用手机远控电脑主机，进行多台远程主机设备管理轻松解决不在电脑前无法控制电脑等情况。  ——————主要功能——————  「远程控制」 使用手机移动端远程控制电脑主机，解决了人在异地无法及时在电脑屏幕前进行远程办公或者电脑控制的场景，便捷使用只需登录与电脑端相同账号后即可开始远程控制。  「监控观看」 可以通过手机端远程观看电脑主机现有情况，不影响主机操控下观看对方操作情况，实时了解电脑允许情况。  「远程关机/重启」 远程控制电脑",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.4,
    "reviewCount": 230,
    "platform": "iPhone / iPad",
    "tags": [
      "爱远控",
      "远程控制"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d3/93/a1/d393a139-b655-9ace-37d0-2aabff349f1e/7ee9ed00-bf44-4132-be25-4466b49cf9c9_iOS-1242X2208-1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a0/ad/86/a0ad86d4-75ba-ab26-9b10-f1faf6b061e3/1fbd9d39-560f-4a63-a525-dbb0fc959a3c_iOS-1242X2208-2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f0/37/08/f037082a-d58c-80a8-91dd-3e0450192aa8/adb1494a-c4c4-4b7e-a76b-44f1b57fb1b5_iOS-1242X2208-3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d3/59/d0/d359d022-3b46-72c2-b17f-daa94ede75de/de5d50f3-3705-4d2b-9f05-f76f62b7870a_iOS-1242X2208-4.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%88%B1%E8%BF%9C%E6%8E%A7-%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6/id6443744358?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fd/3d/9e/fd3d9e4e-abf5-d832-c93f-47c0ec2e92f6/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Shenzhen Aidapu Network Technology Co Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 67,
    "slug": "rdviewer",
    "name": "RdViewer-远程控制软件",
    "description": "RdViewer远程管理拥有极速高清的屏幕传输，仅当屏幕有变化时才会传输，且仅传输变化区域，好用的远程文件管理和文件下载功能，详细的系统信息显示，以及 窗口管理、进程管理等多种功能，还可随时远程控制电脑重启关机，为远程管理电脑提供最大的方便。",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.2,
    "reviewCount": 25,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/c7/87/08/c7870848-d23f-3972-a3ac-8084a643a20c/fb01e479-bf15-426e-9a36-a312baf3f621_1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/46/82/44/4682447c-648d-29d0-d39d-9fe71ca956bf/e0ecb1a3-e55d-4d18-a936-97114a999233_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/c6/7f/f1/c67ff1b8-9a83-faf6-fd1e-4ffe270c9bd2/ef205350-87f0-4395-8e63-06d6dbcdeb4e_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/f0/d5/a9/f0d5a954-6982-cb3a-a6bd-d40221c0fae1/00bccc32-49b0-4eab-baad-09f068dac3e1_4.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/rdviewer-%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%BD%AF%E4%BB%B6/id1541109277?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0f/4f/e3/0f4fe324-040a-37a3-4bf8-905e6947e607/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    "developer": "凡民 郑",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 68,
    "slug": "id6476124260",
    "name": "远程控制精灵-手机远程控制 & 屏幕共享",
    "description": "远程控制精灵是一款支持手机远程控制手机、手机屏幕共享、远程操作桌面、远程挂机游戏的高清屏幕共享的辅助软件，远程控制不限设备数量。 无需手机root就可以通过手机控制手机，远程在另一台手机上进行各种操作，画面无延，迟适用于远程打卡、远程游戏挂机、远程办公、远程帮助父母操作手机等场景。   【主要功能】 ①远程打卡：远程控制在公司的备用机一键打卡签到； ②挂机游戏：远程控制另一台手机实现云端游戏挂机，画面无延迟，高清屏幕共享； ③远程桌面，远程操作手机桌面提高办公协作的效率； ④远程协助：帮助父母远程操控手机实现各种云操作；   ⑤手机控制手机：手机屏幕控制另一部手机，解决家人或朋友的设备问题； ",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 325,
    "platform": "iPhone / iPad",
    "tags": [
      "&",
      "屏幕共享"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5a/1d/bf/5a1dbf38-fc57-37b1-d932-cee8b62d5f85/1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4e/5c/6c/4e5c6c68-9083-6f4d-1f5a-cd6d10095920/2.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0b/b9/4f/0bb94f8f-3242-52f3-759f-efbca1e5d20f/3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9b/65/ed/9b65edd2-9f94-043b-dd21-cccb223c47a9/4.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6%E7%B2%BE%E7%81%B5-%E6%89%8B%E6%9C%BA%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6-%E5%B1%8F%E5%B9%95%E5%85%B1%E4%BA%AB/id6476124260?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0a/55/7d/0a557d12-e030-e7a6-6d5f-7919a70a9573/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
    "developer": "艳 马",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 69,
    "slug": "id6777950766",
    "name": "纳米Work",
    "description": "纳米Work 让 AI 成为你的决策智囊和执行团队。 纳米Work 是 360 出品的 AI 工作平台，基于 100+ 顶尖大模型打造，内置决策、市场、产品、内容、办公等多领域的 AI 专家，支持 7×24 小时云端自动化执行任务，最后把结果直接交付给你。 不用折腾环境，也不用一直守在电脑前。纳米Work 不是只会聊天的 AI 助手，而是能真正进入工作流、持续推进任务、直接交付结果的 AI 智能体工作平台。  【为什么选纳米Work】 1.7×24 小时自动化任务 纳米Work 支持定时任务和自动化办公，AI Agent 在云端自动排队执行。每天自动收集行业动态并生成摘要，每周追踪竞品官网和产",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.4,
    "reviewCount": 14,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/53/ac/b0/53acb0c5-7744-b7c6-a0d8-f1b99ec9078a/1242-2208-1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/08/f8/ea/08f8ea62-b937-88f6-284c-a5b1e1f30c0c/1242-2208-2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/aa/08/95/aa089589-4638-733f-97a1-9e1281f14521/1242-2208-3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/66/de/b7/66deb7fb-8d82-eb6b-3b5a-62ac044728f6/1242-2208-4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/59/22/c6/5922c6f9-b0a0-0e88-9e50-2328e1325c84/1242-2208-5.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%BA%B3%E7%B1%B3work/id6777950766?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/54/d8/f5/54d8f565-594d-04a1-9fb8-7fb06b551e0b/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "developer": "Beijing Qihoo Technology Co Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 70,
    "slug": "id1150993112",
    "name": "番茄清单 - 专注效率的番茄钟",
    "description": "-- 获「最美应用」强烈推荐 -- 助你改善效率的待办事项App -- 结合了番茄工作法和GTD的优点  列清单把待办任务一件件列出来， 然后通过番茄钟把任务一件件完成.  写下来，让大脑更自由. 你的每一次番茄钟，我们都帮你详细记录，助你回顾、分析、改进.  【番茄工作法】使人专注，重点是执行力。 【清单】使人持续执行的目标，重点是系统性的规划思考。 有规划，有执行，才能高效率地生活工作。   主要功能： 【手势强大】 右滑完成、左滑隐藏、长按排序、双击快速加入今日  【强力提醒】 增强提醒，一直提醒直到你开始任务，摆脱拖延  【回顾总结】 每日的回顾与总结助你每天进步，记录时间块，每个时间",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 11311,
    "platform": "iPhone / iPad / Apple Watch",
    "tags": [
      "效率",
      "工具",
      "生产力",
      "番茄清单"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/37/30/c1/3730c1d7-05d4-7fd4-e7f8-2c6594c1598c/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b4/dd/b3/b4ddb36c-117d-2ed9-719c-edcf4abdc1b1/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/5f/df/33/5fdf3302-925b-0c9f-dac2-1ba096371936/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f4/d2/6a/f4d26a33-364d-6aa0-0271-8f01ba264c76/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f2/65/1e/f2651ee2-ab22-3728-4dfe-e48222d9255f/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%95%AA%E8%8C%84%E6%B8%85%E5%8D%95-%E4%B8%93%E6%B3%A8%E6%95%88%E7%8E%87%E7%9A%84%E7%95%AA%E8%8C%84%E9%92%9F/id1150993112?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/d3/0b/06/d30b06f5-47ff-77da-fe5a-bc8ec5bb02e0/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
    "developer": "振华 莫",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 71,
    "slug": "atimelogger-pro",
    "name": "aTimeLogger Pro: 时间记录工具、目标 计时器",
    "description": "在aTimeLogger Pro中，只需轻轻一碰就能追踪你的时间。  每天只需花几分钟的时间，你就可以通过图表和图形的形式获得每日、每周和每月的统计数据，使用这些数据，你将能够控制和管理你的时间。  aTimeLogger Pro提供适合所有人的解决方案：  商务人士，每天都要进行密集的日常工作。 重视每一分每一秒的GTDer。 自由职业者。 每一个对自己的时间流向感兴趣的人，以及希望控制和优化自己的时间的人。  应用程序的功能：  - 简单而直观的界面 - 目标 - 暂停/继续活动 - 多级分类（群组） - 同时进行的活动（在设置中启用） - 多种可视化图表 - 可导出报告(CSV和HTML",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 1294,
    "platform": "iPhone / iPad / Apple Watch",
    "tags": [
      "工具",
      "实用",
      "便捷",
      "Pro:",
      "计时器"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e5/a5/f9/e5a5f982-58ad-4ef8-8d83-06840f004fd7/0.1_Store_3_CN.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0a/a3/73/0aa37342-7afe-7169-c2c7-b6869ec09403/0.2_Store_3_CN.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/40/77/01/40770132-4897-ecda-3098-53ec06fdf410/0.3_Store_3_CN.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/27/52/5c/27525c87-c5a0-ed6f-fa8a-135e985a2708/0.4_Store_3_CN.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fb/76/3e/fb763e74-964d-8fed-3aa9-8d21c6c693e9/0.5_Store_3_CN.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/atimelogger-pro-%E6%97%B6%E9%97%B4%E8%AE%B0%E5%BD%95%E5%B7%A5%E5%85%B7-%E7%9B%AE%E6%A0%87-%E8%AE%A1%E6%97%B6%E5%99%A8/id1087340819?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/24/9d/ce/249dcefc-78f2-abbd-927f-c4db7ea3bc17/AppIcon-0-0-1x_U007emarketing-0-0-0-11-0-0-85-220.png/512x512bb.jpg",
    "developer": "BRIAN GILBERT, CONSULTANTS INC.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 72,
    "slug": "id1356054761",
    "name": "印象笔记-AI知识库,多端同步,会议录音,清单导图,全域剪藏",
    "description": "印象笔记 是全球知名的效率软件和知识管理工具。作为你的第二大脑，印象笔记可以帮助你简化工作、学习与生活。你可以在手机、电脑、平板、网页等多种设备和平台间，无缝同步每天的见闻、灵感与思考。一站式完成知识信息的收集备份、高效记录、分享、多端同步和云端保存。“An elephant never forgets” (大象永不遗忘)！  - 多次入选Apple官方「Today 编辑推荐」、「主打推荐」、「大家都在用」、「今日主题」、「生活解决方案」等专题推荐。  【AI语音笔记】 - 短语音速记与会议、课程等长语音录制 - 录音自动转写，大模型智能润色与摘要  【多端同步】 - 手机、电脑、网页、平板等",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 3.6,
    "reviewCount": 18467,
    "platform": "iPhone / iPad / Apple Watch",
    "tags": [
      "印象笔记"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e0/ba/ff/e0baff25-1536-d8cd-53d0-1c0ff77715b3/35cbf71a-d337-43d6-9171-05d14fcf8e87_5.5-_U8de8_U9875.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f3/eb/a7/f3eba7ad-02e4-5e75-42f0-1d9c7cfb210b/d13af1d7-69d5-4efd-8caf-cae00fab6eda_IOS_U00285.5_U0029-_U8de8_U987502.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fa/9d/2c/fa9d2cdd-9330-093a-da8d-b912aff1a1b6/4924fcec-89a1-40c5-8880-453a49ed647f_5.5_AI_U8d4b_U80fd.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ad/67/bb/ad67bb4a-53cd-d3ec-e4a8-fe87c25d9e84/78412d11-f084-47e5-ab32-cf691ef7aefd_5.5__U6e05_U5355.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/75/16/36/75163681-f855-a52a-eca3-891fde91bd87/9b4e82d8-4d57-4fdb-84a3-ad4fca12a410__U526a_U85cf_5.5.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0-ai%E7%9F%A5%E8%AF%86%E5%BA%93-%E5%A4%9A%E7%AB%AF%E5%90%8C%E6%AD%A5-%E4%BC%9A%E8%AE%AE%E5%BD%95%E9%9F%B3-%E6%B8%85%E5%8D%95%E5%AF%BC%E5%9B%BE-%E5%85%A8%E5%9F%9F%E5%89%AA%E8%97%8F/id1356054761?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/da/e8/4a/dae84a22-1652-fd48-c0c4-66db4a276465/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "Beijing Yinxiang Biji Technologies Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 73,
    "slug": "lightleap-lightricks",
    "name": "Lightleap -Lightricks的专业修图软件",
    "description": "想要拍摄一张称心如意的照片终于不再是件难事！Lightleap的前身是Enlight Quickshot，有了这款修图神器，即使您不是专业的摄影师也可以拍摄出绝美照片。   您是不是也有下面的这种体验呢？掏出相机想要捕捉眼前的美好事物，但是拍出来的相片却完全没有拍出想要的感觉！不是背景太虚就是光线不对，要不就是景物需要一些美化处理，不过这些都是有经验的修图师才能做到的，对吧？   Lightleap图片编辑软件可以帮您改变这一切！有了这个修图神器，您双眼所看到的美丽与精彩都可以被拍出来喽，甚至让它变得更棒。只要动动手指您就可以变身为那个拥有着唯美滤镜，超炫特效和图片处理工具的专业修图师。   ",
    "category": "Photo & Video",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 76704,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/9d/80/6d/9d806d01-000f-b0f8-430d-929eddc7121a/75d9a358-657b-472f-9e60-3134e840d958_iPhone_8_ZH_HanS_01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/4f/c3/f4/4fc3f4e0-a5f3-1ac4-4f7b-ea065118e07d/3ac42848-8f58-4edd-bc01-132e6ee69495_iPhone_8_ZH_HanS_02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/47/dd/4c/47dd4c7d-d5a8-89fe-23e4-94b93bd7a75b/cf807e46-a565-4070-add5-6b1494057d43_iPhone_8_ZH_HanS_03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/a6/bc/d1/a6bcd1a8-b3aa-a76b-3c71-3a0c91a2ef5d/7a73163d-ed95-44ee-aae6-07825d83c97e_iPhone_8_ZH_HanS_04.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/c3/90/d0/c390d012-6989-126a-27a4-d8dfd3bf45f7/373a5992-db79-4126-b3de-911668092057_iPhone_8_ZH_HanS_06.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/lightleap-lightricks%E7%9A%84%E4%B8%93%E4%B8%9A%E4%BF%AE%E5%9B%BE%E8%BD%AF%E4%BB%B6/id1254875992?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/47/e2/95/47e295dd-7e80-6b5f-727a-de1788ed74e0/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Lightricks Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 74,
    "slug": "id6467623650",
    "name": "蛋糕云修-像素级AI修图",
    "description": "专业级AI人像精修及后期处理软件！ 这是一款一键智能修图App，我们提供写真、婚纱、旅拍、儿童、全家福等多场景自动修片服务，各种人像精修及图片后期效果，都可以在这里轻松得到。助你极速出片，极致效果。  【精致预设】 婚纱、写真、全家福、新中式、胶片、结婚照、闺蜜写真、质感肌、水光肌、祛瑕疵、原肤、磨皮等30多种潮流预设风格，打造专业级影像效果，高级大片一键呈现。  【大师级质感人像】 自研AI大模型驱动，瞬间呈现真实肌肤质感与自然光影，打造干净无瑕、通透焕发的高级人像，每一张都令人心动。  【自动调色】 RAW格式转档、AI色彩迁移、曲线调色、智能曝光等智能调色方案，展现细腻真彩。   【智能",
    "category": "Photo & Video",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.2,
    "reviewCount": 2273,
    "platform": "iPhone / iPad",
    "tags": [
      "蛋糕云修"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/95/32/28/953228f6-46b8-2f1f-52a9-250703e8903e/f5346876-e0e2-4e91-a81e-c58df0347adc__U56fe_U7247_U589e_U5f3a_U622a_U56fe_U4e2d_U65872208.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ff/28/77/ff287788-a6db-b846-35bb-3ac316f6d31c/32f5fe6d-80e9-4899-87b1-39347c81f8ec__U56fe_U7247_U589e_U5f3a_U622a_U56fe2208-1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bd/09/81/bd098194-d87c-8258-f4b5-b1821650f21d/18a2323f-6f3a-4d55-b253-1639ed286a03__U56fe_U7247_U589e_U5f3a_U622a_U56fe2208-3.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%9B%8B%E7%B3%95%E4%BA%91%E4%BF%AE-%E5%83%8F%E7%B4%A0%E7%BA%A7ai%E4%BF%AE%E5%9B%BE/id6467623650?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3d/ac/e2/3dace296-4f94-1c93-cce2-81f27b68067c/AppIcon-0-0-1x_U007epad-0-1-0-0-85-220.jpeg/512x512bb.jpg",
    "developer": "Tianjin Qingsong Yidian Technology Co., Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 75,
    "slug": "proandart-y2k",
    "name": "Proandart - 波点特效修图工具软件支持古早y2k",
    "description": "This is a powerful, professional-grade AI photo editing app that combines advanced artificial intelligence technology with a wide range of image editing tools, making it easy for users to achieve both creative and professional-level photo retouching.  Key Features:  - Composition & Adjustment     - ",
    "category": "Photo & Video",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 12138,
    "platform": "iPhone / iPad",
    "tags": [
      "工具",
      "实用",
      "便捷"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e3/48/c3/e348c395-e89a-f295-0631-e58129ba550a/IMG_5447.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/a2/27/62a22729-7f88-fba0-4376-63520d2d02b3/IMG_4859.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ee/b2/d7/eeb2d786-1d2f-1d36-20ce-f3d5307b291d/IMG_5371.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b5/9e/30/b59e3033-0b82-e60b-df2d-b80dc67c67f6/2.PNG/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e1/76/7a/e1767a4a-43f5-6646-4a26-701dbc90a684/4.PNG/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/proandart-%E6%B3%A2%E7%82%B9%E7%89%B9%E6%95%88%E4%BF%AE%E5%9B%BE%E5%B7%A5%E5%85%B7%E8%BD%AF%E4%BB%B6%E6%94%AF%E6%8C%81%E5%8F%A4%E6%97%A9y2k/id6503194302?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1b/bb/54/1bbb54af-6ef1-a060-d545-8fd0b571a381/AppIcon-0-0-1x_U007epad-0-1-85-220.jpeg/512x512bb.jpg",
    "developer": "Xiamen Suijisenlin Technology Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 76,
    "slug": "id6456397090",
    "name": "闪创AI - 动漫视频|小说推文|AI绘画|剧情带货视频",
    "description": "闪创AI 是聚焦口播数字人、小说成片等核心功能，融合 AI 聊天、绘画、写作等多元模块以助力灵感高效落地的全能型 AI 产品。  口播数字人 抛开繁琐拍摄！镜头前说123，AI 数字人精准对口型，3 分钟速成专业口播视频，自媒体人省时又高效！  小说成片 小说推文、民间故事、儿童绘本、解压视频全适配！丢文案 + 选风格 + 挑配音，AI 瞬间生成爆款故事视频，一键起号助你流量猛涨！  AI 文图生视频 输入脑洞文案或上传图片，AI 极速激活创意！文字秒变动态场景，图片秒生趣味故事，轻松产出电影级短片，让灵感直接「搬上屏幕」！  AI 照片特效 百款特效任意挑！老照片高清上色，人物能动起来跳舞、",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.5,
    "reviewCount": 6254,
    "platform": "iPhone / iPad",
    "tags": [
      "闪创AI"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f5/b3/2b/f5b32b51-3f3e-242c-5cab-01286320472c/4ed90fbf-9f72-4caa-9b0c-1d321ccc41d9_1242-2208_1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/43/cd/97/43cd978a-4ba8-ef8d-69f1-6aa0953f4c12/23a10374-d7b3-4364-9fa9-2a4240def80b_1242-2208_2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d2/b5/d6/d2b5d67a-31aa-d0b0-8392-d2321670083a/41b61ee9-2024-4655-9c89-5dbc1c064301_1242-2208_3-_U8c03_U6574.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/68/fc/4b/68fc4b79-7685-a14e-e002-184f04de7d73/ed180601-fe6b-4429-9be7-8ede842a1898_1242-2208_4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d7/c9/a4/d7c9a4fe-2137-5bd7-89bc-152fb3107422/2c260622-c787-4250-ab15-6fde45e135c9_1242-2208_5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E9%97%AA%E5%88%9Bai-%E5%8A%A8%E6%BC%AB%E8%A7%86%E9%A2%91-%E5%B0%8F%E8%AF%B4%E6%8E%A8%E6%96%87-ai%E7%BB%98%E7%94%BB-%E5%89%A7%E6%83%85%E5%B8%A6%E8%B4%A7%E8%A7%86%E9%A2%91/id6456397090?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/96/52/46/96524609-c04c-ac70-53cc-83bcb384a88b/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
    "developer": "振 徐",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 77,
    "slug": "id1097399439",
    "name": "全能画板2 - 画画绘画绘图版",
    "description": "【产品简介】         全能画板2是专注画画绘画涂鸦绘图的版本。用于绘画，绘图，手绘，画画，画图，素描等。         它包含功能有，画笔列表（几百种笔刷效果，可自定义画笔的粗细大小、颜色、透明度，动态强度权重等属性），橡皮擦列表（每种笔刷效果都可以做为橡皮擦）涂抹笔，柳叶笔，模糊笔，荧光笔，填充（可以设置容差值，是否对所有图层起作用等）自定义形状图形（用手拖动就能可视化的设计自己喜欢的形状图形和Logo）自定义曲线功能（可以自由设计自己喜欢的曲线和图形），文字笔（在页面种画出任意方向的文字线）折线笔，虚直线笔，任意方向虚线笔，以及可以画几何图形，矩形、椭圆、圆形、直线、箭头，矩形，",
    "category": "Lifestyle",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 71606,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/6c/aa/34/6caa34fd-d7de-3aa5-214c-ff7ac0bbb7b8/87da9f63-246f-4a48-b175-b611af09ad0c_5.5_U5ba3_U4f201-_U6e10_U53d8.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/49/ac/5e/49ac5e65-b1ec-d998-6d5e-13ffc947d903/3dba9078-dd49-4544-86e7-52ed85886376_5.5_U5ba3_U4f206-_U6e10_U53d8.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/b8/d4/13/b8d4132c-bc9a-b3b8-c723-ab8230179ac5/a91e5acb-d537-454b-9d08-c193a5f27961_5.5_U5ba3_U4f204-_U6e10_U53d8.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/f1/c8/27/f1c8276e-4da3-7751-5bdb-c6fa7a8767f9/74d2a700-6d4d-4fb6-b3fb-46b4253de483_5.5_U5ba3_U4f2010-_U6e10_U53d8.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/48/47/09/4847092a-60d1-9067-ec70-c9358d5e20c2/693f830c-ffd1-41ae-9e4b-112e01ddbc3d_5.5_U5ba3_U4f202-_U6e10_U53d8.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%85%A8%E8%83%BD%E7%94%BB%E6%9D%BF2-%E7%94%BB%E7%94%BB%E7%BB%98%E7%94%BB%E7%BB%98%E5%9B%BE%E7%89%88/id1097399439?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/68/e5/76/68e57634-0ea2-f944-1245-cdea98425268/AppIcon-2-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "伟典 苏",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 78,
    "slug": "id1495392781",
    "name": "小马宝莉魔法涂色",
    "description": "跟着所有你最爱的 MY LITTLE PONY™ 角色踏进万紫千红的创意世界吧！彩绘数百张图画，收集足够的记忆星星，帮助重建并布置你梦想中的博物馆。彩绘所有你最爱的小马简单又好玩，还会让人回想起《小马宝莉：友谊就是魔法》的美妙回忆！  《小马宝莉魔法涂色》是小马们最缤纷绚丽的探险！  • 颜色 – 创作出包括紫悦、云宝黛西、粉红碧琪等等的神奇杰作。  • 重建 – 一座充满回忆的博物馆！完成彩绘任务，收集足够的记忆星星，重拾友谊博物馆的往日荣光！  • 布置 – 发挥你的设计才能，运用你的选择，将所有单调无趣的房间变得明亮活泼。真的太漂亮了！  • 创作 – 在画室里释放你的想象与创意。让你的",
    "category": "Entertainment",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.5,
    "reviewCount": 36246,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8d/8f/be/8d8fbe6d-78be-bd38-d276-cb5387f748b9/29a1f95d-4523-4e05-b02a-3240363aab3c_SS5.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/54/38/a0/5438a091-4007-c875-92f0-a374d6f16d88/cc81e552-e578-47d1-9dda-d400e02bcd7f_SS4.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/02/80/85/02808562-145b-b16e-020b-ea140a22f1cd/c1c78ff4-04ec-45ab-a0af-8d13eb66fa5c_SS1.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/94/16/a7/9416a713-fb1f-f7f8-ed51-638968066807/55980650-e5dd-4904-b280-9058f8ca0d04_SS3.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/80/fe/2f/80fe2f62-8aa8-f889-8643-841112efb156/c0b1fc0a-b4a5-4a0f-8db6-61a5123604de_SS2.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%B0%8F%E9%A9%AC%E5%AE%9D%E8%8E%89%E9%AD%94%E6%B3%95%E6%B6%82%E8%89%B2/id1495392781?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fd/5a/6a/fd5a6a96-3f7e-ff1f-0de5-ce7da0d8b7dd/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Budge Studios",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 79,
    "slug": "move",
    "name": "Move: 运动与健康全能管家｜连动挑战、压力监测、健康习惯",
    "description": "Move 是通过分析你的运动、睡眠、心率变异性等多项重要健康数据指标，帮你更好的分析身体健康状况，给出今日运动建议。同时能更好地理解自己的运动负荷，还能及时调整训练强度，避免过度训练带来的不良影响。同时，压力监测功能让您时刻关注身体的压力水平，避免情绪和身体状态的波动影响健康表现。  - 连动打卡 无痛养成运动习惯，让你从此爱上运动！享受多巴胺带来的快感。自定义设定每日连动目标，轻松完成运动小目标，养成好习惯。  - 智能运动建议 根据你的运动健康数据（如活力指数、训练负荷、训练准备度），提供个性化的运动和恢复建议。 -- 活力指数分析你当前的活跃状态，近 7 天、30 天的活力指数趋势； -",
    "category": "Health & Fitness",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.3,
    "reviewCount": 60,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/36/1f/30/361f3015-a2ca-184a-5e88-70a820d62c15/1242-2688_1@1x__U00281_U0029.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e5/36/f9/e536f9d6-f475-466f-1c4c-565485f20f5e/1242-2688_2@1x.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ea/42/cb/ea42cb0a-ab07-4a4b-8e6f-bc52f49c2519/1242-2688_3@1x.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/26/91/a7/2691a706-0534-7b6d-6cd2-476db8e3caf9/1242-2688_4@1x.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4f/a6/c3/4fa6c32b-6948-b09b-0010-011632755602/1242-2688_5@1x.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/move-%E8%BF%90%E5%8A%A8%E4%B8%8E%E5%81%A5%E5%BA%B7%E5%85%A8%E8%83%BD%E7%AE%A1%E5%AE%B6-%E8%BF%9E%E5%8A%A8%E6%8C%91%E6%88%98-%E5%8E%8B%E5%8A%9B%E7%9B%91%E6%B5%8B-%E5%81%A5%E5%BA%B7%E4%B9%A0%E6%83%AF/id6740842649?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/a4/38/cda43864-1bc6-7ce9-7f37-9cd9aa2899a8/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    "developer": "静 张",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 80,
    "slug": "fitpal",
    "name": "fitpal",
    "description": "FitPal 是一款专注于力量训练、健身记录、增肌、减脂和塑形的训练日志 App，并支持 Apple Watch 记录运动时长、心率和热量消耗。  无论你是在健身房训练，还是在家进行自重训练、有氧运动或拉伸，FitPal 都可以帮助你记录动作、组数、重量、次数、训练容量、1RM、训练照片和身体数据，让每一次训练都有迹可循。  FitPal 的设计初衷是：高效记录数据 -> 清晰分析数据 -> 合理利用数据。我们尽可能删减不必要的复杂功能，让健身者专注于真正重要的训练过程和长期进步。  FitPal 的产品特性：  • 简洁易用的健身记录体验 • 支持 Apple Watch：记录运动时长、心率",
    "category": "Health & Fitness",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 2579,
    "platform": "iPhone / iPad / Apple Watch",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6e/3c/8f/6e3c8fc2-d45e-aa7f-ef04-bd4c7a73a9ed/b3610582-375c-4d17-b8ba-a8cb837eb116_IMG_0123.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ed/a8/4d/eda84d3e-03a1-6b25-01d2-98c7f05ff0b3/1552c0ea-b7fe-41ed-a44f-39bb03acabae_IMG_0111.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/e4/56/c3e4564e-23ce-ab27-2207-eb37de91439a/4ac82ff7-5893-4d24-b7c8-0472d389537c_IMG_0174.JPG/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b6/d3/e5/b6d3e572-6e7a-8833-be5f-2459b57716e7/1fa0dd9e-fb1b-4028-81ee-ec0504b892e5_IMG_0168.JPG/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/eb/73/10/eb731074-9794-46d1-3e11-da35c1f93b44/a3bc6961-96bb-4315-8058-02e0e7c11f0d_IMG_0113.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/fitpal/id1297133978?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/61/e9/c6/61e9c626-9ea9-a34a-77aa-34c66d569923/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "立 王",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 81,
    "slug": "gentler-streak",
    "name": "Gentler Streak: 你的健康与健身贴心助手",
    "description": "嘿，欢迎使用 Gentler Streak – 一款让你保持活力生活的 App！这款屡获殊荣的健康和健身跟踪器所提供的个性化指导会根据你的日常体能状况进行调整，而非本末倒置。它非常适合那些想要持之以恒，又免于劳逸失衡的运动人士。  由一个小型独立团队精心打造。  • 2024 年 Apple 设计大奖 - 社会影响 | 2022 Apple Watch 年度 App | 今日 App | 编辑精选 • 获《The Verge》、《福布斯》、《TechCrunch》等多家媒体报道。  ▶了解每日身体状态◀ [关键健康指标] 以关键生命体征和睡眠摘要开始你的一天，帮助你在察觉到变化之前就发现身体信",
    "category": "Health & Fitness",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 808,
    "platform": "iPhone / iPad / Apple Watch",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e8/9d/41/e89d4128-944d-19a0-511f-9ec5d101c332/Valera_English_iPhone1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8b/e7/22/8be7220a-456a-05bc-11dc-d8e5a7cbe19e/Valera_English_iPhone2.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5d/f9/f0/5df9f069-a99d-6462-a59e-2e5a66c55512/Valera_English_iPhone3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b8/43/ea/b843ea29-38c8-2ed1-c7d9-eac0d3a3e238/Valera_English_iPhone10.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/92/6b/95/926b95f1-131d-71ae-11da-0d6fccb7714b/Valera_English_iPhone4.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/gentler-streak-%E4%BD%A0%E7%9A%84%E5%81%A5%E5%BA%B7%E4%B8%8E%E5%81%A5%E8%BA%AB%E8%B4%B4%E5%BF%83%E5%8A%A9%E6%89%8B/id1576857102?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b5/43/81/b5438159-4718-d06e-43f7-da4fb4cb7d6c/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-85-220.png/512x512bb.jpg",
    "developer": "Gentler Stories d.o.o.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 82,
    "slug": "fitness",
    "name": "Fitness: 运动健身和跑步减肥打造健康生活，开练吧",
    "description": "无论你是想减肥，增加肌肉，还是打算使臀部的线条更加圆润，还是想获得六块腹肌——我们的健身应用程序为你提供了全身锻炼计划，它里面有许多免费的3D锻炼演示的小视频。在这个应用程序里面，你能看到很多现成的训练计划以及冠军教练为你准备的食谱。你可以从各种肌肉群的锻炼计划中自由选择，比如胸部锻炼或手臂锻炼，或者设定一个特定的目标，比如燃脂训练。你还可以选择女性锻炼计划、男性锻炼计划和带饮食的现成的锻炼计划。我们的健身应用程序为您提供个人锻炼日记功能，并支持您在任何城市找到适合的个人教练进行在线健身指导和健美课程授课。你可以分享你的健身动态，咨询有关锻炼、训练和饮食的各种问题——你会得的高质量的答案。你可",
    "category": "Health & Fitness",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 2766,
    "platform": "iPhone / iPad / Apple Watch",
    "tags": [
      "生活",
      "日常",
      "实用"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/98/ec/c1/98ecc18f-f12a-d1c4-f3cf-b9d4e091fc01/01_ZH_1290x2796.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5c/99/1c/5c991cfa-4c73-ccae-9a0c-001803dfc11f/02_ZH_1290x2796.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/58/f5/8d/58f58de3-b762-2cb5-e75d-91a4acb9bba4/03_ZH_1290x2796.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/44/95/ec/4495ec0e-0f73-b435-49a8-e195c56f4010/04_ZH_1290x2796.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/aa/64/41/aa64419b-cdcb-d401-510d-a1fa9cef2d6a/05_ZH_1290x2796.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/fitness-%E8%BF%90%E5%8A%A8%E5%81%A5%E8%BA%AB%E5%92%8C%E8%B7%91%E6%AD%A5%E5%87%8F%E8%82%A5%E6%89%93%E9%80%A0%E5%81%A5%E5%BA%B7%E7%94%9F%E6%B4%BB-%E5%BC%80%E7%BB%83%E5%90%A7/id1114387800?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/46/d6/3d/46d63d3a-18ae-943c-364a-1bd10198948e/AppIcon-0-0-1x_U007emarketing-0-5-85-220.png/512x512bb.jpg",
    "developer": "FITNESS ONLINE MChJ",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 83,
    "slug": "id1221871966",
    "name": "墨记-精美日记本·笔记本",
    "description": "【功能介绍】   「图文混排」 简单好用的图文编辑功能，写出优雅的日记  「文字排版」 对齐模式、字体样式、字体大小、字体颜色、粗体调整一应俱全，排版出你最爱的样式  「PDF导出」精美的排版导出成PDF，随时备份，更可以打印成册  「云端存储」日记采用加密传输云端存储，安全放心，更换设备也不丢失  「离线使用」没有网络也可以写日记、查看日记、修改日记，随时随地记录查看  「长图分享、PDF分享」 一键生成精美的长图，分享到微信、QQ、微博  「多种字体」 多种字体，选择你的最爱  「信纸」每篇日记添加美美的信纸背景  「日历」 精准查看每一天，不漏过每一次记录  「隐私安全」 多重密码保护，",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 116248,
    "platform": "iPhone / iPad",
    "tags": [
      "墨记",
      "笔记本"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/fd/4b/59/fd4b594d-8f8e-b725-b200-97f9523933f2/8a1797a0-02f4-4396-bb16-d552a3f15ce0_8p_1__U9996_U9875.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/71/57/38/71573896-521a-81ba-7234-3a67dd418b47/1b1a7b50-0889-4763-aabb-4cbb797e2c97_8p_2__U67e5_U770b_U65e5_U8bb0.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/69/0d/bf/690dbf3f-5676-78c7-ca9d-12cd3b068b41/42e842ae-6694-4876-bb0c-531180993c1b_8p_3__U591a_U7aef_U540c_U6b65.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/1d/4f/cb/1d4fcb4c-4650-e5e1-a0a2-749c7a042a27/e1050b36-6d88-4763-9ff8-1b3aa1ef6ae6_8p_4__U65e5_U5386_U5206_U7c7b.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/7f/dc/89/7fdc89dd-27ff-43a4-2936-faafe3e68d6a/4309d209-767a-45e8-9559-d6399270c66f_8p_5__U6bcf_U65e5_U4e00_U6587.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%A2%A8%E8%AE%B0-%E7%B2%BE%E7%BE%8E%E6%97%A5%E8%AE%B0%E6%9C%AC-%E7%AC%94%E8%AE%B0%E6%9C%AC/id1221871966?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/b2/ed/23b2ed0e-5cbb-9409-52b5-4f7e03636951/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "佳鹏 柯",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 84,
    "slug": "feenote",
    "name": "Feenote - 手写笔记,日记",
    "description": "连续9年国内排名第一的手写笔记App。Feenote自2014年上线至今已有超过800万购买用户，它可以帮助你简化工作、学习与生活，记录身边的美好事物。  [特色功能] - 支持键盘手写混合输入，更快速也更有亲切感。 - 支持原笔迹手写，内容自动保存在设备中。 - 支持语音转文字，输入更快捷。 - 灵活编辑内容，笔迹颜色随意更换。 - 在笔记中可灵活插入图片或录制音频等。 - 设定云同步，保护您的重要笔记。 - 为你的笔记加密，防止陌生人查看。 - 支持10多种字体更换，让你的笔记更美观。 - 支持iPad分屏，提高工作效率。 - 支持添加桌面小组件，让桌面更丰富。 - 支持插入表情，能表达更",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 236648,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/67/71/d5/6771d567-a9b9-0564-6e53-0bebf81d0967/0x_0ss__U00289_U0029.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/dc/44/b6/dc44b6c3-1ce5-3118-0ca5-315c19fb4cc4/d3608460-f77c-4721-9b1d-2c67e64ca8da__U989c_U82724__U7684_U526f_U672c2222.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/aa/f2/11/aaf2116e-728d-9873-7c72-42e6a4667027/8143388d-13ad-4346-8f86-04682ff0b992__U002a_U989c_U827210_5_.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9d/90/e2/9d90e2ad-b1e4-c5a2-ec86-c70d6b577a8e/dc040349-9a70-4f71-94b5-59721a495cc3__U989c_U82722__U7684_U526f_U672c22222.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/58/6d/a9/586da93f-092e-1b8f-7901-eb35eeec45e4/6c7b7b6c-206f-45bd-bbd6-c5a4bb17fd2d__U002a_U989c_U82726_2.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/feenote-%E6%89%8B%E5%86%99%E7%AC%94%E8%AE%B0-%E6%97%A5%E8%AE%B0/id822218131?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0d/91/17/0d911736-2ed9-5b7b-375c-6be5859e1ad8/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "惠明 劳",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 85,
    "slug": "id1625209452",
    "name": "人生笔记 - 用图文,视频,录音日记一生",
    "description": "「人生笔记」是一款基于时间线和日历的简约精美日记应用。它支持丰富的富文本编辑，完美融入图片、实况照片、视频和录音，让你的记录不再局限于文字。 与其他日记应用不同，人生笔记采用本地优先的数据策略，所有内容默认仅存储在你的设备上，无需联网即可使用，真正做到 \"数据完全由你掌控\"。同时提供多种备份选项，确保你的珍贵回忆永不丢失。  核心记录功能：全方位捕捉生活瞬间 1. 强大的富文本编辑器 - 多格式文本支持：标题、粗体、斜体、下划线、删除线、引用、代码块等多种文本样式 - 列表与清单：轻松创建有序列表、无序列表和可勾选的待办清单 - 自定义排版：可调整字体、字号、行间距、段间距，打造舒适的阅读写作",
    "category": "Lifestyle",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 3665,
    "platform": "iPhone / iPad",
    "tags": [
      "人生笔记"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f8/4e/f6/f84ef69f-7424-61c9-74ad-bd468a418089/a802db09-c002-4ef8-ba10-52cacb921ea3_Apple_iPhone_8_Plus_Screenshot_0.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/79/e1/3f/79e13f76-708a-d2a7-6985-62b57a936c8d/b2423200-4c3e-4f5a-bdd3-78f59da2143f_Apple_iPhone_8_Plus_Screenshot_1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e8/c6/5b/e8c65b60-914b-3b5f-48ae-e5316983ed52/e99c99ce-f070-4b47-8092-9f6f1e6df4b3_Apple_iPhone_8_Plus_Screenshot_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a6/50/b3/a650b392-1a2a-46f9-f8db-e20fb561eb54/767f7ce9-1ac2-4868-812c-c87888181c0d_Apple_iPhone_8_Plus_Screenshot_8.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d7/ce/7f/d7ce7f53-9858-e962-7ddf-da51020f73f0/e12a7a72-fa1d-4312-a137-a694ba98bc5f_Apple_iPhone_8_Plus_Screenshot_9.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E4%BA%BA%E7%94%9F%E7%AC%94%E8%AE%B0-%E7%94%A8%E5%9B%BE%E6%96%87-%E8%A7%86%E9%A2%91-%E5%BD%95%E9%9F%B3%E6%97%A5%E8%AE%B0%E4%B8%80%E7%94%9F/id1625209452?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/11/ae/4a/11ae4a9b-7c16-6c27-b5e1-e3623307c0c5/AppIcon-0-0-1x_U007emarketing-0-11-0-0-85-220.png/512x512bb.jpg",
    "developer": "旭 徐",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 86,
    "slug": "id1066756614",
    "name": "青橙日记-日记本·笔记本·记事本·备忘录",
    "description": "始于2013年，10年用心打磨，千万用户支持，经久不衰。\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t 青橙日记不仅专注于写日记的体验，更在用户可能忽略的日记保存上做足了功课。同时支持在线备份和离线备份两种方式。确保您的日记得到永久保存。\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t 记事，日记，笔记，备忘，便签，相册，日历，纪念日，十年今日，多功能于一身。\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t 私密，加密，安全，简约，可爱，字体，主题，信纸，搜索，标签，个性化任你选。\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t 用户评价：\t\t\t\t\t\t\t\t\t\t\t\t",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 49309,
    "platform": "iPhone / iPad",
    "tags": [
      "青橙日记",
      "日记本",
      "笔记本",
      "记事本",
      "备忘录"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4c/b3/55/4cb355a0-83d9-c791-e5b7-5f55218fffd2/ebea6f59-8943-4015-a4ba-a0bead34bfb6_1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a0/d6/13/a0d61343-cf76-6f6a-12c6-c738a68aa29d/7ac6db7c-f278-4452-bdaa-40ea3ff67a08_2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/aa/22/9d/aa229dc6-67d8-f6fc-47ce-708dee0e05c7/00aa5d43-8712-417c-9250-86fa7d4dc8ba_3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/34/89/e3/3489e396-af12-602b-b023-34ff02533b3e/6ccfe3c4-2e06-4435-8ea9-f1ddfa90ab7f_4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/60/cd/51/60cd5191-95c3-2fc7-0751-92e2d00c7ec1/7e50c2b1-1f58-42ba-a1bb-ca1d0d5d4446_5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E9%9D%92%E6%A9%99%E6%97%A5%E8%AE%B0-%E6%97%A5%E8%AE%B0%E6%9C%AC-%E7%AC%94%E8%AE%B0%E6%9C%AC-%E8%AE%B0%E4%BA%8B%E6%9C%AC-%E5%A4%87%E5%BF%98%E5%BD%95/id1066756614?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ea/8f/9f/ea8f9fb2-6c73-bfd1-8f40-a5a1864e18a2/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "明军 李",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 87,
    "slug": "id1155888011",
    "name": "中国搜索-新华社旗下新闻资讯搜索平台",
    "description": "中国搜索App是新华社中国搜索旗下推出的以新闻资讯阅读为主的移动端应用，拥有强大的语音搜索引擎功能。 1、精准、权威： 中国搜索APP——“权威搜索，官方新闻”。同样的新闻，不一样的解读；精准聚焦，精确推送。 2、语音识别： 强大的语音识别功能，为您提供更便捷的搜索方式，语音识别一键完成搜索需求。 3、汇聚权威新闻热搜、流媒体视频： 中央重点新闻网站权威新闻、资讯不间断更新。作为您的私人新闻顾问，为您挑选出最热真新闻，让您随时看到国内外所有大事。200家地方媒体作为数据支撑，让您的需求一站直达。 中国搜索网络主流新闻资讯类视频直击当下最新热点，让您身临其境，不错过每一个现场细节。",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.1,
    "reviewCount": 86,
    "platform": "iPhone / iPad / Apple Watch",
    "tags": [
      "资讯",
      "新闻",
      "阅读",
      "中国搜索"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/24/79/a1/2479a1ee-0cb6-05b1-a6c5-7338c65cc1c5/9a1a0d95-fd9a-4445-8c2a-536916f9d156_iOS-1242x2208-_U641c_U65b0_U95fb.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/36/aa/6d/36aa6da2-ec5f-9f51-cc5a-0a1ece3e3d7d/95357363-f41e-4383-bb6e-e81533fae70a_iOS-1242x2208-_U641c_U7f51_U7ad9.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/a1/59/6a/a1596aec-eb1b-efd7-f069-4fe59c1fed84/361971d3-fa88-45da-abd5-6cf996511def_iOS-1242x2208-_U641c_U62a5_U520a.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/60/a1/e6/60a1e688-1b06-f3a7-0c07-c6f1a137c5ca/f5b445e3-bfae-4fe9-91e2-c1c9de2f6cda_iOS-1242x2208-_U641c_U6545_U4e8b.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E4%B8%AD%E5%9B%BD%E6%90%9C%E7%B4%A2-%E6%96%B0%E5%8D%8E%E7%A4%BE%E6%97%97%E4%B8%8B%E6%96%B0%E9%97%BB%E8%B5%84%E8%AE%AF%E6%90%9C%E7%B4%A2%E5%B9%B3%E5%8F%B0/id1155888011?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/da/a6/3a/daa63a69-41d3-8836-261c-03b190f65c65/AppIcon-0-1x_U007emarketing-0-6-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "Chinaso Inc.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 88,
    "slug": "id1312864700",
    "name": "天九老板云",
    "description": "天九老板云  一站式企业在线服务平台，与全球创新企业共享商机。  交朋友、话商机、做生意， 超百万老板在此汇聚， 合作互补，挖掘商机，利益共享。   ——用天九老板云，生意还能这样做—— 「高端人脉」：与实力老板在线沟通，一键关注约谈，优质人脉高效打通； 「商机发布」：线上发布好商机，吸引拓展好资源，切实解决合作痛点； 「项目直播」：直播同台对话创新企业，获取全球创新企业商机，把握前沿创新企业动态； 「老板头条」：商业情报速递，行业热点追踪，实时呈现老板们都爱看的资讯；   ——用天九老板云，特色功能这样玩儿—— 担心项目不真实？顾虑合作不盈利？ 天九老板云采用「实名认证」。 信息透明，沟通安",
    "category": "Business",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.3,
    "reviewCount": 986,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/dd/c3/19/ddc3197c-23f0-aab2-28dd-13c8a62f9194/1-1242X2688.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/2e/55/3d/2e553d6a-233e-4516-0682-fcc8afc3eab7/2-1242X2688.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ad/e1/db/ade1db07-4591-2027-b059-d3020ea9cbc5/3-1242X2688.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/38/d0/b8/38d0b84e-4557-a44a-157c-6a851801bf88/4-1242X2688.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%A4%A9%E4%B9%9D%E8%80%81%E6%9D%BF%E4%BA%91/id1312864700?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b2/23/7b/b2237bda-52b8-04d1-b906-608db96d5aac/AppIcon-0-0-1x_U007ephone-0-1-0-0-85-220.png/512x512bb.jpg",
    "developer": "Beijing Tojoycloud Network Technology Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 89,
    "slug": "id6767075757",
    "name": "少年环球视野-英语时文分级阅读点读跟读答题精讲每日更新",
    "description": "少年环球视野是专为小初高、四六级、考研、雅思、托福打造的全球素养与时文学习平台，适配全学段视野拓展、素养提升与写作素材积累需求。  平台内容聚焦环球素养通识+优质原创时文两大核心。素养内容涵盖世界人文地理、历史文化、前沿科技、国际热点等通识知识，以动画短视频、趣味课程形式呈现，通俗易懂，贴合学员认知节奏。同时依托权威外刊及主流媒体素材，持续更新适配学生的原创时文内容，涵盖科技热点、文化故事、榜样事迹、全球议题等，可直接作为语文写作、阅读理解的优质素材。  产品核心功能齐全，可点读、跟读配音、复读、双击查词、生词本等功能，提高学习效率，通过听-说-读-写-练-思，形成 “学 - 练 - 测” 闭",
    "category": "Book",
    "price": "免费",
    "originalPrice": null,
    "rating": 4,
    "reviewCount": 158,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4d/1a/13/4d1a1337-ac62-fa1f-4d51-d4adac15636f/5.5_U5907_U4efd.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/77/ee/ce/77eecef3-1ed4-d54d-c6f2-753ed14c9346/5.5_U5907_U4efd_4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/94/11/5f/94115fc2-52bb-2a91-2ceb-3682d0945e39/5.5_U5907_U4efd_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3c/b6/3b/3cb63b35-256e-8019-8cd8-b4dd82478c73/5.5_U5907_U4efd_3.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%B0%91%E5%B9%B4%E7%8E%AF%E7%90%83%E8%A7%86%E9%87%8E-%E8%8B%B1%E8%AF%AD%E6%97%B6%E6%96%87%E5%88%86%E7%BA%A7%E9%98%85%E8%AF%BB%E7%82%B9%E8%AF%BB%E8%B7%9F%E8%AF%BB%E7%AD%94%E9%A2%98%E7%B2%BE%E8%AE%B2%E6%AF%8F%E6%97%A5%E6%9B%B4%E6%96%B0/id6767075757?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/04/40/65/044065a0-767a-748f-65a5-6520c8bcc548/AppIcon-0-0-1x_U007epad-0-11-0-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "Zhengzhou Xingdu Technology Co., Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 90,
    "slug": "id1205952707",
    "name": "柠檬云财务",
    "description": "柠檬云财务APP是一款超600万家企业使用的专业财务记账软件  核心功能 【电脑手机同步做账】 支持电脑、手机、平板等所有设备使用，只需登录账户即可随时随地快速记账  【账簿及报表自动生成】 账簿及报表自动生成，电脑手机随时随地查看，还可一键打印及导出  【资金流水智能记账】（电脑端功能） 支持一键导入微信、支付宝及银行交易数据，并可智能生成凭证  【轻松查验发票】 扫一扫就能秒查发票真伪，更有会计分录大全，财税法规库，税率查询，增值税计算等实用工具  【发票自动生成凭证】 扫一扫发票，就可以智能生成凭证，高效工作不加班  【一键生成工资条】（电脑端功能） 支持自动计提工资并生成凭证，一键生成",
    "category": "Finance",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 8060,
    "platform": "iPhone / iPad",
    "tags": [
      "理财",
      "记账",
      "金融"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9a/53/22/9a53223c-389d-53ce-25b9-d02336f5c2bd/1ead5a68-85a0-4544-9ff8-559273379896_3@1x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0d/df/c3/0ddfc330-df0e-4ff3-c778-5ac7d9a3e7f0/e9ec309f-0571-4fb7-9367-5efac69e290b_1@1x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1d/aa/d0/1daad07b-61dd-c1c6-549b-4184e7cae011/ac247e30-fbbd-4626-bd07-994d0f9d3f3a_2@1x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9a/ff/a9/9affa974-be1d-9722-6bef-f51e2b5ff1be/c1cceb28-7dce-4f89-894e-0c1882773680_5@1x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7c/50/89/7c508950-6179-e158-d8cb-496202606915/75d30d4b-b44d-4ce2-a1ce-1e170ba666a1_4@1x.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%9F%A0%E6%AA%AC%E4%BA%91%E8%B4%A2%E5%8A%A1/id1205952707?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7f/af/2f/7faf2f69-9785-7450-821a-1ad254855093/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/512x512bb.jpg",
    "developer": "Shenzhen Yicai Information Technology Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 91,
    "slug": "workday",
    "name": "\"Workday\"",
    "description": "Workday 应用可以让您随时随地通过移动设备来安全地访问您的 Workday 应用程序。   作为员工，通过使用简单流畅的界面，您可以实现： • 快速查看薪资、查看或申请短期休假、工作打卡、提交工时表以及提交费用报告。  • 接收关于考勤、重要更新以及审批的推送通知、警报和提醒。使用 Workday 应用立即执行操作。 • 浏览公司名录、安全地查看同事的个人资料、提供反馈以及随时随地参加学习课程。  作为经理，无论身处何处，您都可以实现： • 轻松批准员工申请。 • 查看您的团队或团队成员个人的相关资料，立即执行与您的角色相关的操作，例如：执行职务变更、进行薪酬变更或提供绩效反馈。  • ",
    "category": "Business",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 25438,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/52/8e/12/528e128a-499a-09c3-4895-50e724e2654b/1_iphone_6.5-inch_1242x2688_Home.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9d/33/49/9d334994-935a-5002-d811-fc17980d3053/2_iphone_6.5-inch_1242x2688_TimeTracking.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5b/a8/f2/5ba8f200-f17d-f6b1-0686-905f12b56f9f/3_iphone_6.5-inch_1242x2688_Chat.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bf/04/e0/bf04e042-e8c6-9bf3-606f-c1a4a6e9e61d/4_iphone_6.5-inch_1242x2688_BenefitsPay.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3f/26/dc/3f26dcaa-bb75-c516-d925-e4a6a8379c7a/5_iphone_6.5-inch_1242x2688_Expenses.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/workday/id316800034?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/18/62/16/186216d7-d2e9-ca5d-cceb-5c0afcb6f674/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    "developer": "Workday, Inc",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 92,
    "slug": "dailybill",
    "name": "DailyBill-精致优雅的随手记账工具",
    "description": "DailyBill 是一款简洁优雅的理财记帐应用。只需下拉，点击等几个简单的动作，它就能轻松为您整理好每日的开销，让您对自己的个人财务和收支情况有更详细的了解，让您的消费变得更聪明。 整个记账app操作精致伴随动效及音效。如果您喜欢极简模式可以在设置中心随心关闭或打开。  重点是：我们绝对不会搜集您的私人信息，也不会做与记账无关的功能。  记账不止是记录个数字，同时还可以拍摄定格的瞬间，写下美好的事物。 图表的展示不仅可以按 日/月/年 时间段统计，还可以自定义任意时间。 分类预算让你更好的控制自己的消费情况，做到心中有数。  ••• 主要功能 ••• ○ 完美支持云同步和云备份 ○ 预算设置",
    "category": "Finance",
    "price": "¥18.00",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 1236,
    "platform": "iPhone / iPad",
    "tags": [
      "工具",
      "实用",
      "便捷"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/f2/f0/ee/f2f0eeaf-a2e2-b9c1-08ef-c8faf7eb9991/c8e856bd-aef8-4a03-9d34-308e6d4b16ac_1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/30/9b/4c/309b4c60-5720-caf0-f813-1188c9d5e8ea/0255dcb7-1fee-4ae8-82e3-7afa224bb684_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/bc/78/84/bc7884a5-5087-2ba2-1503-9913c6b325e9/a129b13a-b257-442e-a426-bdc67605c9e5_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/be/70/d0/be70d008-1ab1-7a68-591a-e217830a3af1/3918e0fe-ae0a-4cfb-a7eb-a1fc53809154_4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/6f/48/64/6f48648d-28dc-ff76-d758-1ba58fc0b033/6d2288e4-01c0-405e-a1f8-5f8f772f117b_5.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": false,
    "appStoreUrl": "https://apps.apple.com/cn/app/dailybill-%E7%B2%BE%E8%87%B4%E4%BC%98%E9%9B%85%E7%9A%84%E9%9A%8F%E6%89%8B%E8%AE%B0%E8%B4%A6%E5%B7%A5%E5%85%B7/id1378858306?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/c2/e6/bd/c2e6bdab-dfd1-e919-b5c2-9f0148a8cbe7/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "坚涛 陈",
    "updatedAt": "2026-08-25"
  },
  {
    "id": 93,
    "slug": "id1662298467",
    "name": "来记账本-养成财务管理好习惯",
    "description": "「来记账本」是一款完全根据个人定制的资产管理记账App，无广告！无社区！无理财！ 每天下班后回家后，整理一天的资产开支、收入情况，记录到来记账本App  【丰富的功能】 ①基础记账功能，支出、收入、转账，还支持退款，单笔可操作多个退款，支持关联图片 ②内置丰富的收支分类，什么？不够你用？没关系！你完全可以自定义想要的分类！我们会定期更新自定义图库！ ③超级强大的统计功能，针对账单支持年、季、月、周、日不同维度的统计，自由度相当高！ ④配合强大的基础统计功能，从而展示完美的统计图表，一目了然！ ⑤支持几乎所有类型的资产管理方式，现金账户、信用账户、充值账户、投资账户、债务，悄悄告诉你，输入股票、",
    "category": "Finance",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 44,
    "platform": "iPhone / iPad",
    "tags": [
      "理财",
      "记账",
      "金融",
      "来记账本"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/16/42/1f/16421f86-3423-2b78-8bd3-ecf9ed36f6f2/650f8c1d-bc94-4803-9f43-0ce1c3f43625_5.5_1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b4/71/ca/b471caf8-05c3-32cd-a4fc-3505d4e3166f/b2a27010-3a00-443a-8a2f-1b0bb703c4a5_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/2f/eb/57/2feb574c-8536-3ddb-2461-aae1fcc2cf94/e70467ff-27b7-407d-a3bc-9e2c26429057_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/9f/97/cb/9f97cb8f-aafb-35df-f2e0-b19eab0c3af6/6f247c7d-4834-45cd-9fd1-1cb41d8f58f7_4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f3/b5/68/f3b568ce-8e9b-b2b6-0c38-6e032c28dcd8/0ab49ab9-1bcf-48a2-bf58-b5df1c07f728_5.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%9D%A5%E8%AE%B0%E8%B4%A6%E6%9C%AC-%E5%85%BB%E6%88%90%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86%E5%A5%BD%E4%B9%A0%E6%83%AF/id1662298467?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/64/4d/3a/644d3ab3-064a-aaf1-ecef-1edf6520811c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "百强 陈",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 94,
    "slug": "id1172161344",
    "name": "启航教育-专注考研辅导28年",
    "description": "启航教育致力于为大学生群体提供个性化、互动化、智能化的在线学习体验。  启航教育APP 全新界面：主流的视觉界面，人性的用户体验，完善的功能体系。 海量课程：海量的学习资源，高清的学习课程，智能的分类讲解。 高清课件：高清的视频课件，稳定的教学网课，完善的配套服务。 高效备考：科学的学习计划，灵活的学习时间，系统的规划指导。  【产品服务】 启航教育提供高质量录播课、直播课、一对一、面授等学习资源，辅以由专业化、高学历的教辅团队提供的规划咨询、班级督学、知识答疑、阶段测评、作业批改等周边服务，利用一站式解决方案帮助学员完成学习目标。 【发展历程】 启航教育，成立于1998年，是国内从事考研培训",
    "category": "Education",
    "price": "免费",
    "originalPrice": null,
    "rating": 3.9,
    "reviewCount": 5722,
    "platform": "iPhone / iPad",
    "tags": [
      "学习",
      "教育",
      "知识",
      "启航教育"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/cf/4e/a4/cf4ea4c6-1def-6d20-0615-a64c9bc47b4c/_U56fe_U4e001242x2208.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f6/af/b1/f6afb1cb-cc28-6076-d930-4e623f1ea03b/_U65b0_U5efa_U9879_U76ee777.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ae/c3/53/aec3530d-5436-79b6-21ff-65b1d82651b5/_U56fe_U56db1242x2208.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%90%AF%E8%88%AA%E6%95%99%E8%82%B2-%E4%B8%93%E6%B3%A8%E8%80%83%E7%A0%94%E8%BE%85%E5%AF%BC28%E5%B9%B4/id1172161344?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/03/8c/17/038c1762-3909-67e2-f9aa-04fa58733c5a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Beijing Aiqihang Network Technology Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 95,
    "slug": "mba",
    "name": "MBA智库—让管理者执行力知识得到提升的学习教育视频听书软件",
    "description": "MBA智库——管理者专业学习成长平台，创立于2006年，以让学习更有效，更便捷为经营理念，围绕内容、媒体、教育三种形态，打造职业经理人立体式生活圈，对其学习成长路径，提供全方位服务。旗下有百科、课堂、文档、资讯、培训、商学院等频道。致力于帮助企业管理者、创业者及MBA学员增强管理经营能力，提高管理经营水平。 作为专业经济管理学习成长网站，历经18年的发展，网站已拥有超过1000万+企业管理者、创业者、专家学者、MBA学生等对经济管理感兴趣、对自我职业成长有强烈需求的用户群体。  在MBA智库，你可以体验： *智库课堂：1000+职场线上课程，职场人晋升的研修院 *智库百科：43w+经济管理百科",
    "category": "Education",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 11392,
    "platform": "iPhone / iPad",
    "tags": [
      "学习",
      "教育",
      "知识"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8a/85/8d/8a858d8e-7d98-a6e7-7087-35ad93e5817e/b0f419fd-98d4-4bc6-ada2-74c9a76494f5_1242-2208-1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/93/79/31/937931ec-ad88-feb0-e167-feb7acae6b33/08c29931-e945-4fea-9598-69216d7afe65_1242-2208-2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/05/21/90/05219076-f47a-d507-f8bd-dc5a5d4978d7/a6e9864b-1073-4789-a9a5-391358be87fb_1242-2208-4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/70/b9/47/70b947ec-e8c8-5649-ce12-14396b1afca0/85e00a6d-c682-4b55-9a01-04a1b66ce68f_1242-2208-5.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/73/85/1a/73851a07-cad7-622a-0336-39f2d2a6b328/211cbecf-5609-4e4d-9792-59d25efd9663_1242-2208-3.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/mba%E6%99%BA%E5%BA%93-%E8%AE%A9%E7%AE%A1%E7%90%86%E8%80%85%E6%89%A7%E8%A1%8C%E5%8A%9B%E7%9F%A5%E8%AF%86%E5%BE%97%E5%88%B0%E6%8F%90%E5%8D%87%E7%9A%84%E5%AD%A6%E4%B9%A0%E6%95%99%E8%82%B2%E8%A7%86%E9%A2%91%E5%90%AC%E4%B9%A6%E8%BD%AF%E4%BB%B6/id908915361?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/34/2b/64/342b64fa-1102-0a27-f327-8abc2b3f012c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "mbalib",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 96,
    "slug": "id591578609",
    "name": "高顿-成就年轻梦想",
    "description": "高顿教育—成就年轻梦想 提供专业教育、职业考试培训、职业技能培训等，多元化的学习服务和全周期的人才服务  内容覆盖： 【国内财会证书培训】初级会计职称考试，中级会计职称考试，注册会计师，注册税务师，管理会计师 【国际财会证书培训】ACCA，CMA，USCPA 【金融证书培训】CFA，FRM，证券从业资格考试，基金从业，期货从业，银行从业，中级经济师 【考研/公考培训】考研，公务员 【职业能力培训】薪酬管理，PMP，心理咨询师，一级建造师 【语言能力培训】能力英语，托福，雅思，日语，韩语，法语，德语  功能特点： 1.直播课堂：专业的名师大咖给你更高效的考试辅导和财经热点解读 2.题库：海量题库",
    "category": "Education",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 8375,
    "platform": "iPhone / iPad",
    "tags": [
      "高顿"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0f/ce/e3/0fcee3ce-b316-4f24-65ba-d295c17f17a2/17312868-5f82-4ee9-a3fd-868bb51e55ca_1242_U002a2208_Uff082_Uff09.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/36/29/61/3629617a-de9b-8147-05ba-fb2c03648705/7d3fa9c3-f79b-4e5b-bcd2-e21f9e018aee_1242_U002a2208_Uff084_Uff09.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/53/21/97/532197d1-3155-a487-187d-c3a85f41339c/1069b0a3-fd59-49d4-a2b2-3cb27d60b0f5_1242_U002a2208_Uff085_Uff09.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5c/12/78/5c127873-b7e8-0c69-a68f-d99d33f4d1a4/aeeda7b6-fabf-4dd2-b85b-15e563c5e4a7_1242_U002a2208_Uff087_Uff09.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/11/9a/81/119a81c1-ee8f-894a-c82b-a8b80ed90ad8/ba02effc-a8f6-4882-90ef-529c9ff9cf46_1242_U002a2208_Uff086_Uff09.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E9%AB%98%E9%A1%BF-%E6%88%90%E5%B0%B1%E5%B9%B4%E8%BD%BB%E6%A2%A6%E6%83%B3/id591578609?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/de/3e/61/de3e618e-065c-3961-ef8f-a130a518e448/AppIcon-1x_U007epad-0-1-0-85-220-0.jpeg/512x512bb.jpg",
    "developer": "Shanghai Golden Education Technology Co., Limited",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 97,
    "slug": "edjing-mix-dj",
    "name": "Edjing Mix: DJ打碟混音器",
    "description": "想成为嗨翻全场的DJ大师吗？edjing Mix 能将你的设备瞬间变为专业DJ调音台。轻松玩转数百万首曲目，创作惊艳的混音作品，点燃派对气氛！  无论你是经验丰富的高手，还是刚刚起步的新手，edjing Mix 都能满足你创作超凡混音的一切所需。准备好释放你内心的DJ之魂吧！  爱上它的理由： • 海量曲库：无缝访问 Beatport、SoundCloud Go+、iTunes 等平台的数百万首歌曲！ • 即时Remix：超过20种专业DJ效果，让你的混音更具创意。 • 深度玩法：支持采样器和外部硬件集成，像专业人士一样搓盘。  核心功能： • 自动BPM检测：精准匹配歌曲节奏，实现完美无缝的",
    "category": "Music",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 45538,
    "platform": "iPhone / iPad",
    "tags": [
      "Mix:"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d1/17/85/d1178533-db54-d5f7-b95d-bd0de61f451a/zh-Hans_iphone69_01.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9c/15/a4/9c15a43d-0602-4e63-309d-5a7047d53831/zh-Hans_iphone69_02.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/51/4c/ac/514cac6c-31f9-6b46-8d56-38845dea6729/zh-Hans_iphone69_03.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1f/ef/5b/1fef5b08-9a9a-e3d0-fa9c-cf8286561b14/zh-Hans_iphone69_04.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c8/73/f9/c873f963-c963-6d0b-2021-060577e1bcc4/zh-Hans_iphone69_05.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/edjing-mix-dj%E6%89%93%E7%A2%9F%E6%B7%B7%E9%9F%B3%E5%99%A8/id493226494?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c2/4b/ab/c24babc9-ae76-4d33-e5c1-adab8fc7e20e/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg",
    "developer": "MWM",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 98,
    "slug": "id6774826335",
    "name": "简约音乐播放器-纯净本地音乐播放器无损高音质简音乐音频播放器",
    "description": "[简约音乐播放器] - 你的全能本地音乐伴侣，开启纯净高音质聆听之旅。 ※ 全格式支持，无损播放 • 无论 MP3、AAC 等常用格式,还是 DSD (DFF/DSF)、FLAC、WAV 等高解析度音频，，均可完美解码，呈现原始音质。 ※ 多样化导入，轻松管理 • 无需数据线？没问题！支持 Wi-Fi 传输、隔空投送、本地音频文件、USB 数据线等多种便捷方式，轻松将电脑或其它设备的音乐导入 App。 ※ 丰富音效，精准调控 • 提供环绕、重低音、蝰蛇、人声增强、黑胶模拟等多款专业音效，针对不同曲风和个人偏好自由调节，随心切换，打造专属听感。 ※ 简洁界面，专注体验 • 告别广告与冗余功能，极",
    "category": "Music",
    "price": "免费",
    "originalPrice": null,
    "rating": 3.5,
    "reviewCount": 2,
    "platform": "iPhone / iPad",
    "tags": [
      "音乐",
      "音频",
      "播放器"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4f/e3/4c/4fe34c3a-3671-6b8a-3c80-00b7cd6c0768/1.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/36/ba/cf/36bacf0e-3a17-3bb9-3686-a18d8316b811/2.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/54/89/71/5489714e-ef10-648a-85fd-f3e43153d7b5/3.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6f/50/a8/6f50a807-26d3-f4e0-cf8b-67586e8ac078/4.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%AE%80%E7%BA%A6%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8-%E7%BA%AF%E5%87%80%E6%9C%AC%E5%9C%B0%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8%E6%97%A0%E6%8D%9F%E9%AB%98%E9%9F%B3%E8%B4%A8%E7%AE%80%E9%9F%B3%E4%B9%90%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/id6774826335?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/66/ae/0b/66ae0bc5-6530-398a-4499-a68d45235091/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/512x512bb.jpg",
    "developer": "凤梅 邹",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 99,
    "slug": "id1339124759",
    "name": "音频剪辑 – 手机铃声制作&mp3音乐剪辑",
    "description": "想制作属于自己独特炫酷的苹果手机铃声吗？或者有时会想把多首歌曲拼接起来当串烧，合并成自己想要的音乐？还是想知道不同歌曲混音后效果？ 音乐剪辑（幂果）是一款操作方便的音乐mp3剪切合并混音工具。简单出色，功能实用！不管你是专业音乐人还是音乐小白，都能轻松玩转。  功能特点： 1、专业的铃声剪辑：可自由剪辑，已为您设定铃声最大时长为40s（符合手机铃声特点）！ 2、简单的音乐拼接：歌曲剪辑拼接为一体，串烧喜欢的歌曲吧！ 3、独特的混音合成：随意剪辑两首曲子，混合一起播放，可以感受不一样的音乐效果！  订阅说明： - 订阅VIP后，您可以无限制使用所有的功能 - 订阅提供4个时间段的VIP服务，包括",
    "category": "Music",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 9801,
    "platform": "iPhone / iPad / Mac",
    "tags": [
      "音乐",
      "音频",
      "播放器",
      "音频剪辑",
      "–"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/29/49/11/29491182-5df7-ad1e-c9b0-ac2a24f48a2e/1e304ac9-b23f-4e72-95d7-932218b86dd7_5.5_U82f1_U5bf81_cn.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/3f/13/3a/3f133a57-559b-71d3-17f5-f735b3e3d016/d917d6b6-78fc-4dbc-b995-dfbb45058b10_5.5_U82f1_U5bf82_cn.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/08/aa/e8/08aae87f-0536-f70e-2305-f48103fe08ec/13ed63c2-0e3c-4332-95cd-195f01145a81_5.5_U82f1_U5bf83_cn.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/0a/70/a4/0a70a4c4-54e0-8acc-e3ef-8b5b8b46b6c6/294c541f-8023-449d-8c07-5a02b47dd8df_5.5_U82f1_U5bf84_cn.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/58/18/0a/58180a1a-3f35-a19a-0309-a95f7a7c9c29/f0e65d15-4c0b-46d3-8286-20c61ba8e2ca_5.5_U82f1_U5bf85_cn.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E9%9F%B3%E9%A2%91%E5%89%AA%E8%BE%91-%E6%89%8B%E6%9C%BA%E9%93%83%E5%A3%B0%E5%88%B6%E4%BD%9C-mp3%E9%9F%B3%E4%B9%90%E5%89%AA%E8%BE%91/id1339124759?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c4/de/a5/c4dea5d9-c978-d542-17c4-6a31f84b5634/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Wuhan Net Power Technology Co., Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 100,
    "slug": "groovepad",
    "name": "Groovepad - 用于创建电子音乐的移动应用",
    "description": "Groovepad助你成为DJ！创作律动旋律，轻轻松松让音乐梦想变为现实！  Groovepad是一个简单易用的音乐工作坊，一定能最大限度地激发您的艺术潜力。其卓越的功能包括： - 庞大的资料库中充满了独特而奇妙的乐曲，您可以搜索并选择喜欢的乐曲作为起点。流行的体裁包括嘻哈、电子舞曲、浩室音乐、杜波斯特泊、鼓和贝司、电子乐等等 - 释放您内心的DJ：用Live Loops打造一流的音乐，将各种声音完美融合 - 借助一些精彩的FX特效，例如过滤、翻边、混响和延迟，您可以让派对重新注入活力，一切只靠音乐就可以 - 分享和启迪：分享您的作品，用您的DJ才华给亲朋好友带去启发和惊叹  用Groovep",
    "category": "Music",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 4688,
    "platform": "iPhone / iPad",
    "tags": [
      "音乐",
      "音频",
      "播放器"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/2f/17/ee/2f17ee63-e230-6582-5fa6-c17579a784f1/iphoneX_Chinese__U0028Simplified_U0029_01@3x.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fe/46/d9/fe46d91c-8a5d-06cb-24cc-21a0a1452ed8/iphoneX_Chinese__U0028Simplified_U0029_02@3x.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f2/9e/03/f29e0313-5593-fcc1-3514-eab5a3690c54/iphoneX_Chinese__U0028Simplified_U0029_03@3x.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/be/8f/9d/be8f9de5-3d3c-4c6a-1b3d-7a448cf3e865/iphoneX_Chinese__U0028Simplified_U0029_04@3x.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5e/0b/1b/5e0b1b35-937c-a206-c2eb-02dd6e5839ef/iphoneX_Chinese__U0028Simplified_U0029_05@3x.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/groovepad-%E7%94%A8%E4%BA%8E%E5%88%9B%E5%BB%BA%E7%94%B5%E5%AD%90%E9%9F%B3%E4%B9%90%E7%9A%84%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8/id1454398991?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5b/0f/29/5b0f29ec-8fc3-9b84-2e82-00fe4f7110e5/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "developer": "Easybrain Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 101,
    "slug": "titack",
    "name": "TiTack国际版 : 海外短视频剪辑外国图片随心编辑助手",
    "description": "This is a multifunctional material editing software that integrates image editing, video editing, sound effects, image information viewing, and ISBN generation. Supports various editing functions such as cropping, filtering, texture mapping, and speed adjustment, making it easy for you to use. Fun v",
    "category": "Lifestyle",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.2,
    "reviewCount": 3773,
    "platform": "iPhone / iPad",
    "tags": [
      ":"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0c/41/46/0c414661-70b2-3b62-53ec-985892c575ab/1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/54/51/63/545163b8-db05-4f85-19c3-0bf8c07a7b5b/2.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d6/71/b9/d671b91d-9508-d045-e9fb-54d83bb03928/3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/60/bf/b9/60bfb995-6be0-792a-cbfd-91d9723c7211/4.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d2/cb/a9/d2cba974-52e6-a7a5-8791-b0ff955ca7d0/5.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/titack%E5%9B%BD%E9%99%85%E7%89%88-%E6%B5%B7%E5%A4%96%E7%9F%AD%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91%E5%A4%96%E5%9B%BD%E5%9B%BE%E7%89%87%E9%9A%8F%E5%BF%83%E7%BC%96%E8%BE%91%E5%8A%A9%E6%89%8B/id6754385831?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a3/b9/de/a3b9deab-27ac-874a-4ac8-63316da6366c/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "developer": "特 王",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 102,
    "slug": "id1458061021",
    "name": "视频剪辑精灵 - 证件照换底色&视频剪辑编辑vlog制作",
    "description": "视频剪辑精灵，为手机用户量身打造，只需要一台手机，人人都可以是视频剪辑大师，海量电影级主题模板任您挑，视频剪辑裁剪、音乐剪辑、vlog视频制作更简单，更有范！ 视频剪辑精灵，一款专业手机视频剪辑工具，注于视频剪辑、视频编辑、视频制作、视频美化领域，可以为您的视频添加滤镜、特效、字幕、配音，音乐，更有超多效果等你创造，让您掌上就做自己生活的“导演”。视频剪辑精灵还让视频变得更美更有趣，帮助你在手机上制作VLOG视频，还可以制作个大视频网站短视频，助你快速上热门。更支持音频剪辑，让你轻松设置自己的专属铃声。 [功能介绍] *新增证照换底功能：一键换底换背景，智能美颜，免费制作，轻松制定属于自己的证",
    "category": "Photo & Video",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 14072,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f8/7d/f2/f87df227-7eac-0006-4d67-c0f53a31acc2/1242_2688-01__U00281_U0029.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/99/cf/42/99cf4237-b8af-8c0a-6346-04cdace5217d/1242_2688-02__U00281_U0029.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ec/ae/03/ecae03bc-121c-d4b7-b853-11ffa601eaaa/1242_2688-04__U00281_U0029.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3c/7f/8d/3c7f8dc3-5892-7f13-5fbf-da2db975a5cf/1242_2688-03__U00281_U0029.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91%E7%B2%BE%E7%81%B5-%E8%AF%81%E4%BB%B6%E7%85%A7%E6%8D%A2%E5%BA%95%E8%89%B2-%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91%E7%BC%96%E8%BE%91vlog%E5%88%B6%E4%BD%9C/id1458061021?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/95/5c/05/955c050f-d064-2eb3-0ff7-c198d2bdf4f5/AppIcon-0-0-1x_U007emarketing-0-11-0-0-85-220.png/512x512bb.jpg",
    "developer": "Changsha Fugui Bamboo Network Technology Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 103,
    "slug": "id1522859632",
    "name": "视频编辑精灵—视频剪辑&AI成片&全能视频神器",
    "description": "视频制作，是专业为爱剪辑之人打造的视频剪辑软件，专注于视频剪辑，视频编辑，抖音剪辑等领域，用户能够在视频剪辑精灵里快速剪辑，分割视频，也可以进行配音，添加字幕，音频剪辑等，帮助您快速剪辑出你受喜欢的，受欢迎的热门视频。甚至你是剪辑小白还是大佬，都能在爱剪辑大师中找到对剪辑的热情。  功能概要： 1.不同的剪辑功能：视频剪辑精灵提供了全面剪辑功能，关键帧动画，剪切功能，分割，变速等，多样的功能总有一件满足你的要求。  2.优秀的音频服务：视频剪辑精灵完全提供了丰富的剪辑功能，对于音频剪辑也很容易理解，为了让用户能够让视频更加丰富，我们提供了背景音乐添加等功能，让用户的视频更加绘声绘色。  功能介",
    "category": "Photo & Video",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 901,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/a2/62/d8/a262d8e1-c5c5-fd8d-c07b-37e43d01d89d/729c7ad0-85bd-4e49-9abf-43abc14a1f00_1242_2208-1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/11/9d/37/119d37b8-a27e-50bd-efe6-b103fdd5dd7b/717f03df-0dbb-4ebe-aea3-6aae70c1d396_1242_2208-2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/5f/ac/32/5fac3239-f456-454f-d4cd-c802e41dd36e/70183135-7419-4105-8787-6cce304ed851_1242_2208-3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/7e/9d/d6/7e9dd69a-b921-b8a0-ad53-e4db5b2642ab/2c2e98e1-4d23-4264-9a26-47e61cf1b994_1242_2208-5.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/69/2f/ff/692fff69-8b2c-3199-9f8e-98d668369a74/4e99497c-99b8-4e54-b024-d726445a7e14_1242_2208-4.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91%E7%B2%BE%E7%81%B5-%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91-ai%E6%88%90%E7%89%87-%E5%85%A8%E8%83%BD%E8%A7%86%E9%A2%91%E7%A5%9E%E5%99%A8/id1522859632?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a3/e0/8d/a3e08d67-51a9-0d12-682e-b504f0c118a2/AppIcon-0-0-1x_U007emarketing-0-6-0-0-85-220.png/512x512bb.jpg",
    "developer": "Changsha Years Information Technology Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 104,
    "slug": "id655516874",
    "name": "去哪儿旅行Pro-订旅游行程，特价酒店机票火车票轻松订",
    "description": "去哪儿旅行Pro—总有你要的低价！  去哪儿旅行APP可实时搜索约9000家旅游代理商网站，搜索范围覆盖全球范围内超过68万条国内及国际航线，超过580家航空公司，其中，与国内外超过100家航空公司进行了深度合作。平台的搜索范围还覆盖了全球范围内超过约147万家酒店、120万余条度假线路、1万个旅游景点。  通过移动客户端的全平台覆盖，去哪儿旅行提供吃住行游购娱一站式解决方案，随时随地为旅行者提供国内外机票、酒店、度假、门票、租车、接送机、火车票、汽车票和团购等旅行信息的深度搜索和预订。超过80%的低价占比和全面丰富的旅行产品，帮助旅行者找到性价比高的产品和优质的信息，聪明地安排旅行。  主要",
    "category": "Travel",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 4928,
    "platform": "iPhone / iPad",
    "tags": [
      "旅游",
      "出行",
      "导航"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/58/f0/91/58f09135-dac1-993f-be27-70102e504c41/f353d477-f11d-49bf-847d-a9bb1383a3f4_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e8/52/08/e8520827-e28f-0712-d734-481d3eb6c794/55cf3ad1-6152-4cb3-b2d6-3c5071b613d7_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7c/b5/41/7cb5419a-bc90-30bd-d93f-b2c7df35a25a/bd519db8-9e94-4c16-9861-b38d37e0f001_5.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e4/51/c5/e451c5a1-0db6-7e99-29c8-59ee454e75b5/67710b3a-eb05-483c-be04-93e8bcc04d7a_5_U5907_U4efd.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8f/41/48/8f4148d1-1bd6-3544-c349-032c3cbbcaf3/eea04896-aa78-4211-9ea9-35003acbbf8b_6.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%8E%BB%E5%93%AA%E5%84%BF%E6%97%85%E8%A1%8Cpro-%E8%AE%A2%E6%97%85%E6%B8%B8%E8%A1%8C%E7%A8%8B-%E7%89%B9%E4%BB%B7%E9%85%92%E5%BA%97%E6%9C%BA%E7%A5%A8%E7%81%AB%E8%BD%A6%E7%A5%A8%E8%BD%BB%E6%9D%BE%E8%AE%A2/id655516874?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/5b/e8/805be87c-5233-b2cd-927a-1084e28ce5c4/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    "developer": "Beijing Qunar Information Technology Company Limit",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 105,
    "slug": "gps",
    "name": "GPS状态",
    "description": "此小工具包含以下功能： - 3D地球以及街景地图（包含国内以及国外几十个国家） - GPS定位 - 多种卫星的轨道以及实时位置3D展示（包括GPS卫星、北斗卫星） - 速度计 - 语音播报速度 - 指南针 - 水平仪 - 加速度测量 - 海拔高度 - 手机姿态 - 可以猜测所在楼层，当然只是个游戏，如果猜的差不多，别忘记给个好评哦！ - 可以记录您的运动轨迹 - 运动轨迹会自动保存到云端（需联网） - 可以与朋友分享您的运动轨迹（支持新浪微博、腾讯微博、微信等社交平台） - 可以分享自己的位置给好友 - 可以拍照分享照片给自己的好友 - 应用在记录运动轨迹的时候可以切换到后台，不影响其他应用的",
    "category": "Navigation",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 4912,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/c0/38/7b/c0387bc1-7d60-1f7e-c7f8-c61eff110fca/34b574af-1c05-467a-ae06-90bbac0fe336_1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/d8/44/de/d844def6-cdd8-f80c-9a18-af037d57c6f0/1ce33f70-00a2-42e4-b202-d78cd66b9429_2.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/34/c1/32/34c13250-9ba3-10ae-66c1-922dc4e28bd8/4dbcc968-edd6-4ee2-af27-30f9839f032e_6.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/a8/9c/13/a89c13be-d43d-2e7b-6155-b23c5e4b4e82/99ffea36-f1e7-4f0b-8c34-348928582d3c_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/5e/c2/93/5ec2932c-b9b7-bda4-d0ec-6d9b1c8803b3/cb44ed27-1bf6-4c8a-b292-d05a708f8c2d_7.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/gps%E7%8A%B6%E6%80%81/id831152887?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/d4/c2/82/d4c28219-2e51-b7a6-ac67-dd6935302e1a/AppIcon-2-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    "developer": "Beijing Zhiyue Information Technology Co., Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 106,
    "slug": "id6739420101",
    "name": "维斗实况地图-北斗卫星5G导航",
    "description": "维斗实况地图，集高清卫星影像、北斗智能导航、专业钓点信息、便捷停车查找和精准天气预报于一身，为您提供全方位、实时贴心的位置服务。  核心功能亮点： 1、超清卫星地图，俯瞰城市脉络： ·提供高清卫星地图视图，清晰呈现街道、建筑、绿地等地形细节。 ·多图层切换，轻松掌握城市街景全貌，规划行程更直观。 2、智能北斗导航，规划最优路线： ·依托北斗卫星导航系统 ，提供精准、可靠的定位与路线规划。 ·灵活路线选择：根据实时路况、距离、偏好（如拥堵）智能推荐多条路径。 ·全程语音导航：清晰播报指引，解放双手，驾驶更安全便捷。 3、一键探索周边钓点，垂钓爱好者的福音！ ·一键获取您当前位置周边的所有热门钓点",
    "category": "Navigation",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 6831,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b4/4d/3e/b44d3e1e-2525-a949-5a2d-58334a6092ce/7.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ab/cc/57/abcc5715-b74d-5650-451f-ec157ee5f948/1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/89/0a/36/890a3698-b400-3f12-1360-e9f7f917b935/3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d0/db/e1/d0dbe103-5f2d-559b-7aad-b3c56bfba706/6.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/58/a5/7b/58a57b9f-5a74-d90b-d5f4-6fe91879ef7b/4.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%BB%B4%E6%96%97%E5%AE%9E%E5%86%B5%E5%9C%B0%E5%9B%BE-%E5%8C%97%E6%96%97%E5%8D%AB%E6%98%9F5g%E5%AF%BC%E8%88%AA/id6739420101?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/08/69/59/08695953-a67f-b1f3-b866-936306a92aa2/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    "developer": "Guangzhou Jishu Network Technology Co.,Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 107,
    "slug": "id1265404088",
    "name": "极简时钟",
    "description": "极简时钟 Zen Flip Clock  一款多主题的极简时钟与专注计时工具，让时间更清晰、更有节奏。  支持全屏时钟显示，适用于学习、办公、桌面展示等多种场景。打开即可使用，专注每一刻。  为什么选择极简时钟  不只是一个时钟，更是你的时间管理工具。从专注学习到日常生活记录，帮助你更高效地使用时间。  核心功能  多主题极简时钟 提供多种风格时钟主题，包括翻页、数字和极简设计。适合作为桌面时钟或全屏时钟使用。  番茄钟 内置番茄工作法，帮助提升专注效率。  正计时 适用于运动、冥想和日常计时。  整点报时 支持自定义提醒，建立规律作息。  数据统计 记录专注时间与使用情况，帮助你了解时间分配",
    "category": "Lifestyle",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.7,
    "reviewCount": 15965,
    "platform": "iPhone / iPad",
    "tags": [
      "极简时钟"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d0/58/ff/d058ff86-b03a-ce92-515c-253024d8d9f2/79465cf7-f125-46b5-97bd-524ee4a6d108_iPhone6.5-_U65b0_U98ce_U683c-_U7b80_U4e2d.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/21/a5/b8/21a5b85f-6800-d21f-529b-f3089af3ccfd/iPhone6.5-DigitalWall-zhs.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/01/fa/43/01fa43e7-235a-7cd9-36f8-071bdaa519ff/iPhone6.5-_U6781_U7b80-_U7b80_U4f53.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8f/74/11/8f741105-8b30-6f0e-cb4a-c5407e3b3434/06989671-da25-4a52-a345-64d387c1b830_iPhone6.5-_U8ba1_U65f6-_U7b80_U4e2d.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/92/52/4f/92524f80-3a90-e562-1eef-8901f2e22161/34c3c7a5-5991-4fff-8d34-b1e4fd84661d_iPhone6.5-_U5c0f_U7ec4_U4ef6-_U7b80_U4e2d.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%9E%81%E7%AE%80%E6%97%B6%E9%92%9F/id1265404088?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/09/18/a5/0918a5f1-4f55-1f9f-1638-cbc50698a66d/zfc-glass-icon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "Chaoyang Minimal Software Studio",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 108,
    "slug": "desket",
    "name": "Desket - 桌上天气日历时钟",
    "description": "让一天更加简单和智能！ Desket是一款必备的桌面应用，它结合了简洁美观的翻页时钟设计，天气、空气质量信息、D-Day倒计时、日历以及帮助专注的计时器功能。 体验Desket，感受时间管理带来的便利吧！  1. 翻页时钟  通过大数字显示的数字翻页时钟，一目了然地查看时间。支持AM/PM显示，方便区分昼夜。  2. 天气和空气质量信息  屏幕左上角显示当前位置的天气和空气状态。天气图标直观显示天气状况（晴天、多云等），还有温度和湿度信息，方便出行准备。  3. D-Day倒计时  提供D-Day功能，可以统计距离特定日期的剩余天数，轻松掌握重要日程和纪念日的时间，非常实用！  4. PM2.",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 5,
    "reviewCount": 3,
    "platform": "iPhone / iPad",
    "tags": [
      "天气",
      "时钟",
      "日历"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0f/d6/cc/0fd6cc91-4a54-fdbb-4b8f-feb86423f774/IMG_7759.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ec/86/2d/ec862d81-7ab9-ebd5-8402-1ac4a4e7846c/IMG_7760.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2d/2b/63/2d2b63d5-c54d-3d59-e776-da65da803790/IMG_6964.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/desket-%E6%A1%8C%E4%B8%8A%E5%A4%A9%E6%B0%94%E6%97%A5%E5%8E%86%E6%97%B6%E9%92%9F/id6474268279?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b2/79/c8/b279c88d-0817-a874-b55b-fadb72f4c2dd/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
    "developer": "hoon jung",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 109,
    "slug": "id434209233",
    "name": "墨迹天气-让未知可先知",
    "description": "墨迹天气，让未知可先知。 全新品牌形象，全新视觉升级，从预报天气服务，到提供智慧生活方案。助力全球用户先人一步洞悉气象变化，实现智慧决策。 稳居QuestMobile 2024年天气类赛道用户规模榜首。  【AI指数】覆盖运动、骑行、洗车、跑步场景，结合小时级天气数据与大模型，清晰展示未来24小时每个时段的适宜程度，并给出专属建议与智能提醒，为您的户外生活提供智能决策。 【大雨定点速报】提供“雨前-雨中-雨后”全周期内逐小时的决策保障。在暴雨影响的关键56小时（-8小时至+48小时），给出详细提醒和可行建议，准确指引每一步行动。 【台风实时预报】实时显示台风位置、强度与路径，整合多个预测模型，",
    "category": "Weather",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 2912382,
    "platform": "iPhone / iPad / Apple Watch",
    "tags": [
      "天气",
      "时钟",
      "日历",
      "墨迹天气"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/da/d2/84/dad284f1-4f74-dd67-4f5d-15ca47224a4d/1242-2208-1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f4/72/cc/f472ccaf-7589-a74a-a678-208ac9182063/1242-2208-2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/41/e5/b6/41e5b64a-92e2-0256-00d4-e46791427bc3/1242-2208-3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8b/b1/17/8bb1173a-c69b-e011-50fe-4a26f959a52a/1242-2208-4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/64/33/c3/6433c3cd-5f39-e15a-9827-2fcc973e21f4/1242-2208-5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%A2%A8%E8%BF%B9%E5%A4%A9%E6%B0%94-%E8%AE%A9%E6%9C%AA%E7%9F%A5%E5%8F%AF%E5%85%88%E7%9F%A5/id434209233?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2f/f0/1c/2ff01c07-006b-c027-52cd-20764a8ad287/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    "developer": "Beijing MojiFengyun Technology Co.,Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 110,
    "slug": "id1449972815",
    "name": "希望之村：你是希望",
    "description": "重燃生命之火，续写你的希望。你将有机会在此踏入神秘的史前世界，历经人类从原始社会迈向文明社会的史诗旅程。一时一生，游戏中的时间有它独特的流转方式，每一生与你共度的人也不尽相同，发展更长远繁荣的家族与时代也将成为你每一生的奋斗目标。  【生存挑战，智勇并存】 面对有限的时间与自然的严酷考验，你需要智勇双全，从狩猎采集到农耕养殖再到建造家园，每一次决策都是对生命力量的证明。 【自由建设，专属家园】 你可以自由规划并建设自己的家园，不断解锁海量科技，从零开始打造你的家园！这将是对你创造力与生存能力的多重考验。 【科技探索，探索奥秘】 游戏内设有海量可供解锁的科技，从基础的工具制造到高级的农业技术再到",
    "category": "Games",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.3,
    "reviewCount": 35117,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/34/bb/9c/34bb9c81-a096-45df-7931-9052d5f4ee7a/5.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8c/92/d3/8c92d3d7-05ae-ecf5-4d75-53f00e846aae/3.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b6/5c/04/b65c0479-9f02-2820-2947-ac6ab45f2c83/2.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7f/fe/ad/7ffead4b-d0f4-7d68-6ac1-e1acfb9bed2a/4.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1f/88/c4/1f88c4f9-e3db-7f3d-3363-89b23d99704b/_U007d_U0028GSOFRDF@7AD9_U007dHGJ1O3TK.jpg11_U00281_U0029.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%B8%8C%E6%9C%9B%E4%B9%8B%E6%9D%91-%E4%BD%A0%E6%98%AF%E5%B8%8C%E6%9C%9B/id1449972815?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7d/af/80/7daf8010-ec1f-04ab-7773-e51a2950c4af/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Xiamen Kaleyoubi Network Technology Co.,Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 111,
    "slug": "id1561903786",
    "name": "心动小镇",
    "description": "《心动小镇》是一款慢节奏生活模拟游戏。无论拥有什么样的爱好、个性，在这里都能随心所欲展示。现在就放松心情，在小镇悠哉度日，遇见生活的美好吧！  【游戏特色】 ▷不断尝试每一种可能 ◁ 丰富爱好，自由发展！ 钓鱼、烹饪、养猫、园艺、捕虫、观鸟…没有体力限制，也没有“今天应该做什么”；抛开束缚与规则，只关注自己的感受。  ▷认真置装每一寸空间 ◁ 装修建造，理想居所！ 从收集资源，到垒砌砖瓦；从点缀鲜花，到摆正挂画…一花一草、一砖一瓦都可以随心创造。你的每一次精心设计，都让小镇一点点更靠近你梦想中的样子。  ▷随心开启每一次快乐 ◁ 时间自由，拒绝束缚！ 心动小镇没有每日任务的束缚，也不存在每天完",
    "category": "Games",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.5,
    "reviewCount": 209007,
    "platform": "iPhone / iPad",
    "tags": [
      "心动小镇"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/34/69/73/346973f6-d4bc-9857-6bf6-db12a9fe20df/6_U6708-_U5fc3_U52a8_U5c0f_U9547-_U4e09_U4e3d_U9e25_U8054_U52a8KV-_U82f9_U679c_U5546_U5e97_U56fe-2796x1290.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9a/da/c2/9adac2ca-b14a-9eba-56d5-196cd3c237ea/_U5bfb_U9cb8_U5b63-_U7b80_U4e2d.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3d/8d/49/3d8d4904-19db-447b-543b-c6afc298969a/_U6d77_U5e95_U5730_U56fe-_U7b80_U4e2d.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e9/80/ac/e980ac37-d29a-536f-5f5a-99b8d15b037a/1-_U88c5_U4fee_U81ea_U7531.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e1/09/02/e10902e0-30e9-64b0-e1f8-d699b2101c40/2_U751f_U6d3b_U4f53_U9a8c.jpg/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%BF%83%E5%8A%A8%E5%B0%8F%E9%95%87/id1561903786?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/07/77/cc/0777ccff-4f60-e3ef-6c5e-f7509b64e112/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "X.D. Network Inc.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 112,
    "slug": "id1636239131",
    "name": "解压模拟器-ASMR减压&换装改造",
    "description": "什么是沉浸式体验？ ASMR 是什么意思？下载这个游戏，你就知道啦！  你看过沉浸式视频吗？沉浸式护肤？吃播？ 沉浸式的声音会让你感到极度舒适吗？沉浸式小游戏你玩过没有！？我们针对生活中的各种各样的场景制作了这款游戏，让你在玩游戏的同时享受沉浸式体验带给你的舒适感。  晚上的派对结束后，丽莎疲惫地回到了家。她需要做一次深层的皮肤清洁和护肤。善待自己也是一个释放的过程呢！  这里有一只流浪狗，身上到处都是泥巴和寄生虫。狗需要温暖和照顾。经过彻底的身体清洁和狗毛修剪后，一只可爱的小狗狗出现了！你很高兴也放心了许多，内心充满了成就感！这款游戏也好想是个养宠物模拟器一样哦！你可以照顾各种可爱的小动物！",
    "category": "Games",
    "price": "免费",
    "originalPrice": null,
    "rating": 3.8,
    "reviewCount": 85249,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fa/ec/c0/faecc044-f21e-a7a7-e55a-edd25c701003/546a5a70-efad-475b-8e78-914a8198de5f_1242x2208_1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/82/72/cd/8272cd99-610b-62a2-c264-08f3d39eb39f/1ff7134c-c55e-4b92-8485-d5049b7ebc3e_1242x2208_2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/87/96/48/879648aa-c6e6-073b-49c8-96347ab08856/23f54627-33da-459b-b019-d11cd28b2b5a_1242x2208_3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a5/5f/b6/a55fb666-db22-bc77-42be-7e998fc565ca/89f1db5d-d497-4088-a9fc-38bff0c0906a_1242x2208_4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/86/a2/c0/86a2c0a3-1b89-289d-71aa-459d8bf3a8dc/63248635-fec8-4dc8-8c70-50adf1a79678_1242x2208_5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%A7%A3%E5%8E%8B%E6%A8%A1%E6%8B%9F%E5%99%A8-asmr%E5%87%8F%E5%8E%8B-%E6%8D%A2%E8%A3%85%E6%94%B9%E9%80%A0/id1636239131?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/89/ea/75/89ea754d-6bb9-aaf2-5e64-6f8136bfe4a6/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Xian Diankou Software Technology Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 113,
    "slug": "id1577874288",
    "name": "梦境漂流瓶-成人树洞聊天交友倾诉社交APP",
    "description": "是否在寻找一款好用人多的漂流瓶？是否在因为没地方认识更多可爱活泼的人而发愁？是否因为满肚子的心事情感无处倾诉而烦恼？《漂流瓶》想你所想懂你所需！  单身的你，或是想寻找生命中的那个TA，或是想认识有意思的人，或是想排解漫漫长夜的空虚，无奈生活圈子太小！  在繁忙的城市里，每天都有无数的人在擦肩而过，却又没有方法彼此相识！  《漂流瓶》是一种全新的相遇方式：简单、心动、惊喜，相遇本就该如此美好......   【非自动续费VIP会员说明】 -- 订阅周期：1个月，12个月。 -- 订阅价格：1个月40元；12个月300元。 -- 付款：通过用户的iTunes账户扣款，用户确认购买后即付款。 --",
    "category": "Social Networking",
    "price": "免费",
    "originalPrice": null,
    "rating": 5,
    "reviewCount": 72754,
    "platform": "iPhone / iPad",
    "tags": [
      "社交",
      "聊天",
      "社区"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a0/a9/7c/a0a97c7b-bfbe-1686-17cc-3683c9d2e47e/6ab27b35-f7b1-4152-9bd7-3900289bb355__U5546_U5e97_U56fe01_Uff081242_U002a2208_Uff09@3x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a7/a9/6a/a7a96a32-3fa3-6dcf-065a-d4676ce60094/5598a389-5f80-4faa-9504-ac24ca254291__U5546_U5e97_U56fe02_Uff081242_U002a2208_Uff09@3x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d4/76/c1/d476c1f3-9b2e-b851-36d0-7befa439b21e/26907b2b-c01c-40f6-975f-ffcc132cc25d__U5546_U5e97_U56fe03_Uff081242_U002a2208_Uff09@3x.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%A2%A6%E5%A2%83%E6%BC%82%E6%B5%81%E7%93%B6-%E6%88%90%E4%BA%BA%E6%A0%91%E6%B4%9E%E8%81%8A%E5%A4%A9%E4%BA%A4%E5%8F%8B%E5%80%BE%E8%AF%89%E7%A4%BE%E4%BA%A4app/id1577874288?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b9/cd/a0/b9cda0fb-3675-8ed9-a866-28f63f74af99/AppIcon-0-0-1x_U007ephone-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "Lingbao CoolLemon Technology Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 114,
    "slug": "id6468895305",
    "name": "知聊-一对一视频聊天",
    "description": "附近真人一对一视频聊天软件  深夜加班后想打视频？周末一个人不知道干什么？  知聊，专注附近一对一视频聊天的同城交友软件。每条消息都有人秒回，每次倾诉都有回应，告别“已读不回”的失落感。  你可能正在经历：  ▸ 加班到深夜，回到家空荡荡，想找人打视频说说话 ▸ 周末宅在家不知道干什么，或节假日一个人不想刷短视频 ▸ 刚搬到新城市谁也不认识，或出差晚上在酒店不知道找谁 ▸ 深夜翻来覆去睡不着，或心情不好想找个人视频聊聊天 ▸ 周末约不到人，想找搭子一起看电影、吃饭、徒步 ▸ 想打游戏找不到队友，或下班后想找人说说话放松一下  不管你是哪一种，知聊都能帮你快速匹配在线聊得来的真人，不冷场，聊得起",
    "category": "Social Networking",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 23198,
    "platform": "iPhone / iPad",
    "tags": [
      "知聊"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2d/45/d5/2d45d5e9-c6fc-9dc0-67b0-ddcdf0c5c70c/e1902b1f-4544-4cdc-8f81-de386b37e083_1242_2208_6@1x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1c/86/9b/1c869b28-1b31-8c61-643c-7902d52b0ba8/016f20b2-4fdc-4a1f-b0e2-dba7a0a18f01_1242_2208_5@1x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/66/a8/8b/66a88bc8-e320-c733-72e5-7f2898171713/ea577069-69ac-4b0c-8cd1-7c1593f36f75_1242_2208_4@1x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/df/40/fa/df40fa61-b1c2-8c9b-9687-c8acf6a12b60/8eec2b0c-4650-44ae-8f97-9c2461b45de5_1242_2208_3@1x.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c8/b2/a1/c8b2a14b-454c-7708-ee80-a9e52abcbbfb/b364d809-0be1-45ee-a38b-adc71fede68a_1242_2208_2@1x.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E7%9F%A5%E8%81%8A-%E4%B8%80%E5%AF%B9%E4%B8%80%E8%A7%86%E9%A2%91%E8%81%8A%E5%A4%A9/id6468895305?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0e/53/46/0e53460b-cd5a-7b60-9bdf-9345d7ef2be0/AppIcon-0-0-1x_U007ephone-0-1-0-0-85-220.png/512x512bb.jpg",
    "developer": "Zhiliao Information Technology Wuhan Co., Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 115,
    "slug": "id1417815172",
    "name": "暮瑟-视频互动交友软件",
    "description": "暮瑟APP是一款基于智能设备的社交交友和远程控制工具APP，专注解决异地伴侣情感问题。 开启蓝牙将设备连接到我们的app应用程序,使用者可通过视频、音乐、手绘、摇一摇、游戏、远程互动等多种方式满足私密探索和愉悦需求。",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 2.7,
    "reviewCount": 1603,
    "platform": "iPhone / iPad",
    "tags": [
      "暮瑟"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/90/6e/64/906e6478-c2bd-02b1-1883-2f2bd593ea56/1290_2796-1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c3/f3/f6/c3f3f6c9-c33d-51b3-cd03-d9117cbc9caf/1290_2796.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%9A%AE%E7%91%9F-%E8%A7%86%E9%A2%91%E4%BA%92%E5%8A%A8%E4%BA%A4%E5%8F%8B%E8%BD%AF%E4%BB%B6/id1417815172?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5a/77/07/5a7707c3-7756-05d4-5555-f163654291e1/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    "developer": "涛 郑",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 116,
    "slug": "id1463260661",
    "name": "文撩-随时随地有人撩你",
    "description": "月老红线~天定姻缘~；这是一个多元化的恋爱、聊天、暧昧、交友社区，~欢迎各位小可爱的加入！ 文撩是一个暖心的年轻人聊天交友社区，各种可爱的小哥哥小姐姐等你来文聊~ 姻缘红线 恩爱双心结，姻缘一线牵。通过姻缘红线功能，每一段不期而遇，或许都是天定姻缘。开启姻缘红线，文撩将会为您牵线搭桥，促成您的美好姻缘。 假装情侣 恋爱从假装情侣开始，在文撩，每个人都可以向喜欢的小哥哥/小姐姐发起情侣申请，一起做亲密的情侣约定任务，满七天即可申请结婚，获得亲密称号等奖励~ 亲密关系 文撩支持建立各种有趣的亲密关系，男朋友/女朋友,备胎，闺蜜，秘书，女仆，爸爸等搞怪好玩的亲密关系，支持自定义关系名称，好玩不停~~",
    "category": "Social Networking",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 130861,
    "platform": "iPhone / iPad",
    "tags": [
      "文撩"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b6/5f/d2/b65fd28e-6531-8d9b-1725-ae74efa71d72/1284-12.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7e/95/ce/7e95ce5d-58d5-9bcd-b810-744fac099e2d/2.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/52/4a/bb/524abbea-ac38-7751-5696-e62801eedd52/3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/13/b9/03/13b903be-52bb-8dc2-b73d-008d7d210fcb/1284-4.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/76/34/dd/7634dd8b-9297-02bf-60a1-1119d7925110/1290-5.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%96%87%E6%92%A9-%E9%9A%8F%E6%97%B6%E9%9A%8F%E5%9C%B0%E6%9C%89%E4%BA%BA%E6%92%A9%E4%BD%A0/id1463260661?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9f/fa/86/9ffa86ed-71a0-b092-1755-c3da7def96fb/AppIcon_1-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "Weinan Xinfeiyue Network Technology Co., Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 117,
    "slug": "id1462418495",
    "name": "淘券返利 - 优惠券购物比价平台",
    "description": "领取淘宝京东拼多多优惠券再下单，购物更省钱。  ●每日上新，百万张淘宝优惠券限时抢，享独家优惠 ●券额大，优惠大，各种优质商品仅售价5折就能买到 ●天猫、淘宝月销过万商品，很多都能领到优惠券  【功能亮点】 分享赚钱：高佣选品，佣金可达售价一半以上！ 9块9包邮：优质商品，低价超值，包邮还返利！  极速提现：一元提现，闪电到账，安全可靠！  【产品特色】 1.佣金比例可查，比同行多30%！ 2.提现闪电到账，无需人工审核！ 4.门槛低，佣金满一元即可提现！",
    "category": "Lifestyle",
    "price": "免费",
    "originalPrice": null,
    "rating": 5,
    "reviewCount": 315,
    "platform": "iPhone / iPad",
    "tags": [
      "购物",
      "比价",
      "电商",
      "淘券返利"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/23/2b/9f/232b9f86-b21d-e104-0e11-a4f4f751e7cf/15f462db-f192-4cd4-b2f0-0849256e5e3c_104465a2-8593-4a3b-95c1-363ee4f26871.png/406x228bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%B7%98%E5%88%B8%E8%BF%94%E5%88%A9-%E4%BC%98%E6%83%A0%E5%88%B8%E8%B4%AD%E7%89%A9%E6%AF%94%E4%BB%B7%E5%B9%B3%E5%8F%B0/id1462418495?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/d9/da/37/d9da37a8-8900-5f7d-7599-15ad77029701/AppIcon-1x_U007emarketing-0-5-0-85-220.png/512x512bb.jpg",
    "developer": "Suzhou Baoruihong Trading Co. Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 118,
    "slug": "id1212182562",
    "name": "小米有品",
    "description": "小米有品是小米旗下新生活方式电商平台， 致力于成为用户追求品质生活的首选平台，小米有品坚持用小米模式做生活消费品，为用户提供高品质、高颜值、有科技感的好产品，为生活提供全场景解决方案。 【小米新品全在售】小米手机、小米电视、小米小爱、小米空调、净化器、洗衣机、平衡车、电动车、摄像头、小米电脑、路由器等全系小米商品货品充足，官方渠道，正价保真！ 【科技新品众筹尝鲜】前沿炫酷的科技智能商品精彩纷呈，大小家电、厨电、卫浴、…脑洞大开，创意无限！ 【优选科技生活好物】小小指甲刀、超软乎毛巾、透气吸汗袜、…优选日用商品，科技感好物款款贴心！ 【新人专享福利】新注册就送超值大礼包，购物直接抵现金。上小米有",
    "category": "Shopping",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 212039,
    "platform": "iPhone / iPad",
    "tags": [
      "小米有品"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f1/11/57/f1115701-9132-5371-eae1-671d12d67378/2208_1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d8/37/ff/d837ff40-43b7-e047-5e6f-b723d2e34ec3/2208_2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5b/66/33/5b6633bf-64af-a7c7-4640-fd9baf8d804a/2208_3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e1/27/c9/e127c97b-1670-ff0b-87dd-1c57bea5279d/2208_4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bb/a6/3f/bba63f89-5a61-3b32-2986-d2120a2a9ad9/2208_5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%B0%8F%E7%B1%B3%E6%9C%89%E5%93%81/id1212182562?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/48/f4/9b/48f49b76-4e24-40a2-5dfb-8c618e4863a8/AppIcon-1x_U007emarketing-0-6-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "Beijing Xiaomi Co., Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 119,
    "slug": "id802627559",
    "name": "折买-购物省钱助手一淘返利网",
    "description": "折买Zhemai.com-专注购物省钱13年，累计为用户省钱超过100亿元的购物返利APP。   • 超高返现比例，远超同类APP  • 先领优惠券再下单，比在淘宝、京东、拼多多、抖音等平台直接买更省钱；   • 下单就拿高返利，0手续费0门槛极速提现；    • 点外卖、打车、电影票都能领红包再返现，一省到底。  1. 购物返利——持续更新淘宝、天猫、京东、拼多多、抖音、唯品会等国内优秀电商平台优惠券折扣信息，省钱如此轻松！ 2. 生活优惠——尊享外卖、电影票、打车等百余项吃喝玩乐优惠券和返利权益，省钱无处不在 3. 一键搜券——比价领优惠券更方便  复制链接，2步找到内部大额优惠券+返现 ",
    "category": "Shopping",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 6310,
    "platform": "iPhone / iPad",
    "tags": [
      "购物",
      "比价",
      "电商",
      "折买"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6f/78/04/6f780468-74d6-f92e-ab66-3be93aa36f65/1290x2796-_U7701_U94b1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/52/6e/f4/526ef4e1-ac30-b9f3-4ab2-d722b7ef07ac/1290x2796-_U65b0_U4eba_U798f_U5229500_U5143.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/95/9b/1f/959b1fe4-75e1-f830-b249-925ed901a887/1290x2796-_U6700_U9ad8_U8fd4.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/89/bf/57/89bf570b-9df6-cce8-3815-975c29959d4e/1290x2796-_U7b7e_U5230_U9886_U7ea2_U5305.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/cb/a5/7c/cba57ca4-9350-1391-ac87-8d302b95fc0f/1290x2796-_U5403_U559d_U73a9_U4e50.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%8A%98%E4%B9%B0-%E8%B4%AD%E7%89%A9%E7%9C%81%E9%92%B1%E5%8A%A9%E6%89%8B%E4%B8%80%E6%B7%98%E8%BF%94%E5%88%A9%E7%BD%91/id802627559?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e2/0f/1f/e20f1f56-9df9-43b8-5a84-a1dbdfcfe605/AppIcon__2024_7_4-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "Chengdu Keji Technology Co.,Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 120,
    "slug": "id1464481676",
    "name": "包小省-网购优惠券省钱神器",
    "description": "包小省APP-网购导购返利隐藏优惠券搜索工具，领券后下单在返回优惠，省钱可达90% 【购物领补贴】 通过包小省购买淘宝/天猫商品，可享受返利，极速到账，随时随到； 【商城返利】 引入了唯品会，京东等购物平台，更多返利更多优惠，等你发现； 【搜索工具】 海量优惠券，购物之前先搜券，大额优惠券随领随用，有些甚至可节省90%； 【快捷查券】 复制淘宝商品标题，链接，淘口令，打开包小省APP为您自动查找优惠信息； 【每天10点上更新】 每天人工精选百款优惠商品，专业买手为您推荐，性价比高； 【在线客服】 有问题？找人工客服！机智活泼的客服小姐姐全天在线为您服务~",
    "category": "Shopping",
    "price": "免费",
    "originalPrice": null,
    "rating": 3.3,
    "reviewCount": 260,
    "platform": "iPhone / iPad",
    "tags": [
      "包小省"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/e6/c9/cb/e6c9cbb5-7298-11e0-0114-321b1178ddd6/b10980c4-659f-4084-a9d0-edcf01831b82_1.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/56/4a/ba/564abac5-5b56-a9b5-6c13-1e14ad5e9a6a/c5c3ab79-f299-4743-9c4a-68b26f3fb22b_1242x2208bb-2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/23/8a/fd/238afdee-7a16-29cc-3cc9-9f4d667df290/a3e764fb-33fb-45cb-b941-a06650cd45cb_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/c2/be/d1/c2bed18e-00bb-1f5d-44d1-6270403091aa/bef2b035-671e-48c3-87bc-c4664277f10d_1242x2208bb.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%8C%85%E5%B0%8F%E7%9C%81-%E7%BD%91%E8%B4%AD%E4%BC%98%E6%83%A0%E5%88%B8%E7%9C%81%E9%92%B1%E7%A5%9E%E5%99%A8/id1464481676?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9b/b7/f2/9bb7f216-88c7-eecb-759e-6dd77bc78438/AppIcon-1x_U007emarketing-0-6-0-0-85-220-0.png/512x512bb.jpg",
    "developer": "Taizhou Clearly Understand Network Technology Co.,Ltd.",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 121,
    "slug": "id1386975827",
    "name": "全能扫描王-扫描文件全能王",
    "description": "全能扫描王是一款功能强大的扫描软件，提供文档扫描、文字识别、证件扫描、创建PDF、表格提取、格式转换、拍照翻译等实用功能。利用先进的图像处理技术，自动裁边，透视矫正，批量、高效的处理各种文档，是您的工作、学习的超强帮手。   主要功能 - 快速扫描文档，自动裁边，透视矫正，提供多种滤镜。 - 高精度批量文字识别，支持手写，准确率高达95%。 - 快速创建PDF文件，提供签名、加密、水印等PDF处理工具包。 - 表格提取，精准还原表格内容，支持常规有线、无线、含单元格等复杂表格。 - 格式转换，支持转Word、Excel、PDF、PPT、TXT、图片等格式 - 证件扫描，精准切边，1:1还原到A",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 128304,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/c7/5d/0e/c75d0ea3-56cd-b24e-acab-477d4bd1d5d5/60deeaed-a7d7-40a5-b5be-86ef1b5e3235_1_U00281_U0029.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/99/40/f0/9940f091-688b-ad6f-0970-14e7582a07f1/8d6ac301-649f-4e4a-9016-af8e191b98e8_2_U00281_U0029.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/47/42/3f/47423f4a-e81f-b7f4-21ff-418a4b68de66/0dac654a-b027-4369-8742-44cdb1e31901_4_U00281_U0029.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%85%A8%E8%83%BD%E6%89%AB%E6%8F%8F%E7%8E%8B-%E6%89%AB%E6%8F%8F%E6%96%87%E4%BB%B6%E5%85%A8%E8%83%BD%E7%8E%8B/id1386975827?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/86/5c/7e/865c7e7c-961a-b0f0-d7c2-4f7108570a84/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "阳杰 刘",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 122,
    "slug": "id1435573338",
    "name": "全能图转文-OCR文字识别全能扫描王",
    "description": "《全能图转文》专业文字识别扫描工具，是“全能扫描仪”的文字识别版。继承了“全能扫描仪”的强大文件管理系统和智能自动切边优势，专业深挖文字识别的用户需求，推出以“OCR文字识别”为核心的全新APP。  ——【应用特色】—— 【全能扫描】快速扫描图片/文档/PDF/身份证/书籍等！ 【批量扫描】支持批量选图识别，批量处理简单高效！ 【精准识别】十万次识别测试，准确识别率高达99%！ 【智能分段】开启自动分段模式，识别结果智能分段！ 【识别语言】支持中英日韩等12国语言文字识别扫描！ 【文件管理】文件夹分类管理，超便捷文件增删改查！ 【PDF生成】自动切边去杂乱背景，图片转PDF导出！ 【二次编辑】",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 1438,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/28/6c/7e/286c7e55-d5fe-4147-b6cc-6b64e3d6a675/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/5c/5c/c0/5c5cc0a9-865c-ab1a-0374-ce6bfb0d78eb/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/fd/09/48/fd094846-6668-33bd-6579-f26078665509/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/a3/ed/78/a3ed78f3-ebef-96bf-be7b-5b5fce17782b/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/19/5e/96/195e96a9-9baa-a146-bff9-85d95e3b8483/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%85%A8%E8%83%BD%E5%9B%BE%E8%BD%AC%E6%96%87-ocr%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB%E5%85%A8%E8%83%BD%E6%89%AB%E6%8F%8F%E7%8E%8B/id1435573338?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/fe/48/97/fe48975c-c94a-643b-2bef-e86462e6c614/AppIcon-1x_U007emarketing-0-5-0-0-85-220.png/512x512bb.jpg",
    "developer": "Shanghai Quentin network technology co. LTD",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 123,
    "slug": "id1447579724",
    "name": "图片转文字-OCR文字识别扫描翻译",
    "description": "图片转文字，一款图片文字识别和翻译软件。随身拍照取字，扫描翻译器。精准的文字识别，104种语言互译，助力高效文本整理、外语学习。  ——【应用特色】—— 精准识别：高达99%以上的标准文字识别准确率。 智能分段：识别结果支持智能自动分段 全能翻译：支持104国语言翻译。 全能识别：支持中英日韩等12国语言文字识别。 便捷分享：一键复制、直接导出TXT/PDF。 便捷操作：识别结果支持拨打电话、发送邮件、访问网址、查地理位置等。  ——【联系我们】—— 如有任何问题欢迎撩骚，您的建议和反馈，是我们产品改进的巨大动力，感谢每一位使用产品支持我们的小伙伴们，我们一直在努力做到最好！联系邮箱：cxy0",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 1227,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/eb/b6/c1/ebb6c16b-ff48-90f0-4569-9090f73fecdd/mzl.cpyecgjg.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/54/87/e3/5487e3a4-2c71-e361-8751-6555dfa274bc/mzl.jdzdbbap.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/f7/c0/13/f7c013ce-bb93-01f6-d53e-630625bdc38d/mzl.zxmjchsb.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/b4/65/4d/b4654d71-4c7d-27ab-481b-65ecdb450d19/mzl.uexcmmlq.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%9B%BE%E7%89%87%E8%BD%AC%E6%96%87%E5%AD%97-ocr%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB%E6%89%AB%E6%8F%8F%E7%BF%BB%E8%AF%91/id1447579724?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/64/30/be/6430be42-2d2d-494d-9e32-ce3467d272be/AppIcon-0-1x_U007emarketing-0-0-85-220-0-5.png/512x512bb.jpg",
    "developer": "Shanghai Quentin network technology co. LTD",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 124,
    "slug": "id1595039555",
    "name": "手机扫描王-扫描计数、智能测距、文字OCR识别、文档增强",
    "description": "本软件是一款多格式文档图片互转的全能转换器！为学习、办公等多场景提供支持。  1.扫描计数：拍摄工地建材，扫描数数，方便实用； 2.智能测距：手机变身测距仪，测直边长度，场地面积； 3.文字OCR识别：识别纸质或电子文字，支持多种语言； 4.文档增强：拍摄并扫描文档，增强纸张效果，使得不清楚，泛白的变黑的文字能够再现； 5.证件扫描：支持身份证，驾照、护照、银行卡等多种证件，扫描后生成A4纸格式，可直接打印使用； 6.格式转换：支持PDF与Word、Excel、PPT格式一键互转，同时还支持图片转化PDF，转换结果精准清晰，且质量可靠； 7外部.导入：支持外部文件导入PDF转化器APP进行文档",
    "category": "Utilities",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 2827,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ce/70/d4/ce70d464-b62f-3179-3b39-ebd927288edf/eca7846f-0f00-4487-a2b2-b3be9959fbb1_8-4_U5907_U4efd_3.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/4f/8f/58/4f8f5826-34c0-8b5e-7ac8-dd4fbd1e4d4d/82c1e5e2-dca0-468f-9f0a-bfa7354af320_8-4_U5907_U4efd_15.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/e7/e8/ce/e7e8ce95-e12c-7e5d-727d-dc8b43d74eb6/65de5624-37d3-49a0-8699-514dc14f6ccc_8-4_U5907_U4efd_13.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/61/d5/22/61d5227a-1501-34ff-78b4-d1e345e30ef9/dc42d2d6-81b1-4f75-ad3e-7c014765fbf1_8-4_U5907_U4efd_4.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/a8/39/93/a839939a-3cfa-8b0a-ebe0-efe79e0a6581/722fd51c-89e9-4793-bf68-d706fea4e9d8_8-4_U5907_U4efd_7.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%89%8B%E6%9C%BA%E6%89%AB%E6%8F%8F%E7%8E%8B-%E6%89%AB%E6%8F%8F%E8%AE%A1%E6%95%B0-%E6%99%BA%E8%83%BD%E6%B5%8B%E8%B7%9D-%E6%96%87%E5%AD%97ocr%E8%AF%86%E5%88%AB-%E6%96%87%E6%A1%A3%E5%A2%9E%E5%BC%BA/id1595039555?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/45/6a/67456a3f-ea57-e71d-658b-042d20c6d6c2/AppIcon-0-0-1x_U007emarketing-0-9-0-85-220.png/512x512bb.jpg",
    "developer": "小英 吕",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 125,
    "slug": "id388627783",
    "name": "扫描全能王-手机扫描仪 & PDF图片转文字",
    "description": "扫描全能王是一款集文件扫描、图片文字提取识别、PDF 内容编辑、PDF 分割合并、PDF 转 Word、电子签名等功能于一体的智能扫描软件。自动扫描，生成高清扫描件，支持JPEG、PDF 等多格式保存，还能将扫描件一键转换为 Word/ Excel/ PPT 等多种格式文档，通过手机、平板电脑、电脑等多设备同步查看。  -----功能亮点----- 【手机扫描仪】 手机拍纸质文档，智能去除杂乱背景，生成高清JPEG、PDF文件。默认自动扫描，对准纸质文档自动拍照，解放双手。 支持多种图像优化模式，可手动调节图像参数，将纸质文件快速转为清晰的扫描件。  【图片转文字利器】 智能 OCR 识别文字",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 6421715,
    "platform": "iPhone / iPad",
    "tags": [
      "&"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/d6/2d/ff/d62dff6a-ef11-a914-9ba1-b14817fa3a8d/dccb29a2-d232-4fd7-99b5-208d86fc3333__U5c0f-1.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/7f/74/b6/7f74b6b4-4786-2204-01c1-5be0b52b1e36/a1cbf020-bf89-40d5-9afb-71760a26eaf3__U5c0f-2.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/0f/5b/b7/0f5bb7e9-3603-8335-49cc-407c9a2d9c63/3b149114-2356-451b-9a2a-0fa710f4bd29__U5c0f-3.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/50/90/e3/5090e3ed-a9a1-b517-2459-cd1f0212f8d7/e9098bb4-06bd-4be8-aca3-94173c870e43__U5c0f-4.jpg/392x696bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/fe/d4/b2/fed4b27f-fc9e-7add-40eb-6d4d952f39b2/984564e6-ed89-41ef-82d0-45d43d6734a7__U5c0f-5.jpg/392x696bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E6%89%AB%E6%8F%8F%E5%85%A8%E8%83%BD%E7%8E%8B-%E6%89%8B%E6%9C%BA%E6%89%AB%E6%8F%8F%E4%BB%AA-pdf%E5%9B%BE%E7%89%87%E8%BD%AC%E6%96%87%E5%AD%97/id388627783?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f7/ae/9f/f7ae9f20-d5ed-fdb8-c75e-7b5844536878/AppIconLite-0-0-1x_U007ephone-0-6-0-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "INTSIG Information Co., Ltd",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 126,
    "slug": "id1460078746",
    "name": "口袋扫描仪Pro - 专业PDF编辑、文字识别",
    "description": "被知乎日报、少数派、最美应用等30多家媒体和KOL推荐过的口袋扫描仪Pro，是一款扫描效果强大、文字识别准确度极高的扫描工具，可以将您的设备瞬间变成功能强大的扫描仪。万元机械级别的扫描质量，98%以上的文本识别准确度，一键转换成PDF/图片，随时随地多端同步，还支持各种第三方应用分享，比如电子邮件，Dropbox，Google Drive，OneDrive，Evernote等等。   可以扫描什么：  -账单，发票，合同，收据，名片、报告、文件、身份证.......  -手稿，网页，PPT，书籍，笔记、琴谱、白板、试卷.......  -备忘录，便笺，论文  -你能想到的，我们都能扫描   好",
    "category": "Business",
    "price": "¥8.00",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 899,
    "platform": "iPhone / iPad",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/f4/82/1b/f4821b58-25b5-982b-aeb8-9268ae356770/3335983d-9f9c-4660-8a41-12c3e94fe408_1242_2208-_U4e2d_U65871_.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/21/fb/04/21fb0450-0405-bf93-de94-7a7eeee6bdbe/f43f55dd-ddd0-43aa-8f8c-b6baf0f6e7e2_1242_2208-_U4e2d_U65872_.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/a9/41/fe/a941fe68-f6ad-7a58-86f9-eda85108b38b/c33c8a14-17ee-4c35-a2f3-7809aeeefe58_1242_2208-_U4e2d_U65873_.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/cf/0a/44/cf0a4434-0cce-f344-d2ad-ff92e4e45280/89c26a2c-fb16-4ad0-a5f2-081b74dd3240_1242_2208-_U4e2d_U65874.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/04/67/f3/0467f3fc-e6be-7b46-2ef9-b23b6f9f70a0/2eb3627a-3eb8-43e9-82a4-28faad4f92f8_1242_2208-_U4e2d_U65875.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": false,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%8F%A3%E8%A2%8B%E6%89%AB%E6%8F%8F%E4%BB%AApro-%E4%B8%93%E4%B8%9Apdf%E7%BC%96%E8%BE%91-%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB/id1460078746?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/9b/04/5c/9b045c05-4dfb-8b34-45dd-04b22618d901/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg",
    "developer": "HiThink Financial Services Inc.",
    "updatedAt": "2026-08-28"
  },
  {
    "id": 127,
    "slug": "craft",
    "name": "Craft - 笔记与文档编辑器",
    "description": "用Craft释放创造力，掌控自己的计划，这是一款强大的应用程序，能彻底改变您写作、组织和完成任务的方式。无论是个人日志、工作项目还是日常计划，Craft都能帮您用自己的方式创建令人惊艳的文档、管理任务、构建动态集合、组织整理自己的想法。它可以在iPhone、iPad和Mac之间无缝同步，让您无论在线还是离线都拥有随时准备就绪的完美工作空间。  随时随地写作 您的绝佳想法不会等待网络连接。离线时也能无缝工作，全面访问所有功能，所做更改会在下次连接网络时自动同步。Craft提供iPhone、iPad和Mac版本，无论您选择哪款设备，都能确保为您带来一致而强大的写作体验。  独属于您的个性化风格 创",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.8,
    "reviewCount": 4109,
    "platform": "iPhone / iPad / Mac",
    "tags": [],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a2/0a/65/a20a6541-7cca-3b3e-e0cb-9164436a4eb1/0_APP_IPHONE_69_0.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4c/71/2b/4c712b6f-037a-d1f2-7fe6-cac04627ac72/1_APP_IPHONE_69_1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d7/2f/d3/d72fd3b1-1aa3-6c69-ccf5-d71beb16e06e/2_APP_IPHONE_69_2.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a0/bf/07/a0bf07fa-950e-e8de-c558-e184aa4e263d/3_APP_IPHONE_69_3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6c/1d/56/6c1d5688-0f0b-ccd8-5788-31461a1833cf/4_APP_IPHONE_69_4.png/320x480bb.jpg"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/craft-%E7%AC%94%E8%AE%B0%E4%B8%8E%E6%96%87%E6%A1%A3%E7%BC%96%E8%BE%91%E5%99%A8/id1487937127?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bc/3b/41/bc3b4145-8e8e-d1e5-9296-8f79a4a964ab/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "Craft Docs Limited",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 128,
    "slug": "id568266312",
    "name": "密码管家 - 密码管理器",
    "description": "• 账号密码太多记不住? 让密码管家为您效劳吧! 有了它, 从此挥别遗忘账号密码的窘境! 密码管家是一款「安全加密」的账号密码管理器, 储存于里面的数据均受「密码」及「加密」保护, 确保私密数据不外流!   • 功能特色:   • 采用高规格的AES256位加密技术, 有效防堵黑客入侵  • 内置功能强大的浏览器, 支持自动填充和一键填充登录信息(账号密码), 快捷易用, 从此无需再去记账号密码  • 多重锁保护: 登录上锁, 文件夹上锁, 密码区域上锁, 内置浏览器上锁等  • 支持密码锁、图形锁和指纹锁三种上锁方式  • 支持多级文件夹, 以更好地组织你的私密数据, 你还可以为每个文件夹设",
    "category": "Productivity",
    "price": "¥38.00",
    "originalPrice": null,
    "rating": 4.5,
    "reviewCount": 285,
    "platform": "iPhone / iPad",
    "tags": [
      "密码管家"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/99/00/b1/9900b1a0-4ae1-1fe0-5cb6-4da063d62a42/mzl.ovlmqxlr.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/f8/48/97/f848975b-8eaa-81b4-319a-0b4f3933999d/mzl.kpawjckb.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/61/e4/5b/61e45bd3-7b57-cdb6-83c0-63570d02cac7/mzl.wviaszym.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/8e/a8/48/8ea848f4-0133-1352-b8a6-2e3bac4b3501/mzl.pfefmtvi.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ca/4a/0c/ca4a0c23-a363-2d72-d99f-cc66d43f51f3/mzl.ijedpdqo.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": false,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%AF%86%E7%A0%81%E7%AE%A1%E5%AE%B6-%E5%AF%86%E7%A0%81%E7%AE%A1%E7%90%86%E5%99%A8/id568266312?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bc/88/71/bc887165-07af-4a81-3c0e-75638312485d/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "developer": "广栋 莫",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 129,
    "slug": "id1633197438",
    "name": "账号本子 - 随身账号密码管家",
    "description": "超简洁、不联网、无广告、采用 PBKDF2 和 AES-256 混合加密，只做最好的账号密码管理体验。",
    "category": "Lifestyle",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.9,
    "reviewCount": 761,
    "platform": "iPhone / iPad",
    "tags": [
      "账号本子"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/2e/ba/44/2eba443d-f45d-6330-0753-17be147f322f/39645d7a-2b3d-4273-a547-cb41267a56bb__U7ec4_5.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e3/4d/da/e34dda47-d3e4-a577-3dcb-f4ba74981b6a/6dd0b0fc-bebd-44cc-b475-651b47fd8c04__U7ec4_6.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/33/85/5c/33855c09-5c9f-9e86-71cf-d80923dc3e06/488d728e-a19e-432f-b9b0-d24dd8423565__U7ec4_7.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/98/38/79/98387957-00a7-8560-d39f-e21c65ac78aa/1fab8ea0-4e9f-493b-a2bc-67eb9b3996bd__U7ec4_8.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/85/0b/ab/850bab6e-7837-742d-7393-0b0ba6c55d0e/281726e5-e12c-4bc7-80d1-ed977308ed0f__U7ec4_9.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E8%B4%A6%E5%8F%B7%E6%9C%AC%E5%AD%90-%E9%9A%8F%E8%BA%AB%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81%E7%AE%A1%E5%AE%B6/id1633197438?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/70/83/807083f8-97a0-3f6e-77d2-43ed70d42c45/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "developer": "日伟 何",
    "updatedAt": "2026-08-29"
  },
  {
    "id": 130,
    "slug": "id954830708",
    "name": "密码管家-保护隐私",
    "description": "你是否有过忘记账号密码的烦恼？密码钱包来帮你解决这个烦恼。 密码钱包是一款账号密码管理工具，旨在为iOS平台用户提供专业、完善和高效的密码保护管理服务。其主要功能和特性有： - 支持各种社交平台、邮箱、银行卡、身份证的信息管理 - 最强级别的加密保护你的数据安全 - 同步备份到iCloud数据永不丢失 - 丰富的账号模板 - 支持Touch ID",
    "category": "Productivity",
    "price": "免费",
    "originalPrice": null,
    "rating": 4.6,
    "reviewCount": 66,
    "platform": "iPhone / iPad",
    "tags": [
      "密码管家",
      "保护隐私"
    ],
    "screenshots": [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple1/v4/10/04/bc/1004bc13-4275-b039-4d90-a7396a7bd5db/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple3/v4/ad/a1/dc/ada1dc2f-9a3b-a0a5-3999-6a57fe9393bf/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple3/v4/a0/1f/ef/a01feffd-9d62-5774-a1b3-38be69391037/pr_source.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple5/v4/ac/d0/d3/acd0d398-49bf-0913-b258-eec5e8d48bed/pr_source.png/392x696bb.png"
    ],
    "featured": false,
    "isFree": true,
    "appStoreUrl": "https://apps.apple.com/cn/app/%E5%AF%86%E7%A0%81%E7%AE%A1%E5%AE%B6-%E4%BF%9D%E6%8A%A4%E9%9A%90%E7%A7%81/id954830708?uo=4",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/12/52/10/125210cf-aa23-88f9-772a-777e57b07c75/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/512x512bb.jpg",
    "developer": "益 李",
    "updatedAt": "2026-08-29"
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

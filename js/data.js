// === App Data with localStorage support ===
const STORAGE_KEY = 'iosyun_apps';

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
    "updatedAt": "2026-08-01"
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
    "reviewCount": 35753,
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
    "updatedAt": "2026-08-01"
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
    "updatedAt": "2026-08-01"
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
    "updatedAt": "2026-08-01"
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
    "updatedAt": "2026-08-01"
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
    "updatedAt": "2026-08-01"
  },
  {
    "id": 7,
    "name": "GoodNotes 6",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1a/39/39/1a39395c-f1d7-af6d-a627-ca55a8934691/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    "category": "效率",
    "price": "免费",
    "originalPrice": "¥68",
    "isFree": true,
    "rating": 4.5,
    "reviewCount": 679286,
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
    "updatedAt": "2026-08-01"
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
    "updatedAt": "2026-08-01"
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
    "updatedAt": "2026-08-01"
  },
  {
    "id": 10,
    "name": "Reeder 5",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5f/3e/d4/5f3ed4e2-9ada-1102-af29-1c9bf490cb71/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    "category": "工具",
    "price": "$4.99",
    "originalPrice": "¥68",
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
    "updatedAt": "2026-08-01"
  }
];
// Load from localStorage or fallback to defaults
function loadApps() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return JSON.parse(JSON.stringify(defaultApps));
}

// Save to localStorage
function saveApps(newApps) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newApps));
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
    '    if (stored) {\n' +
    '      const parsed = JSON.parse(stored);\n' +
    '      if (Array.isArray(parsed) && parsed.length > 0) return parsed;\n' +
    '    }\n' +
    '  } catch(e) {}\n' +
    '  return JSON.parse(JSON.stringify(defaultApps));\n' +
    '}\n\n' +
    'function saveApps(newApps) {\n' +
    '  localStorage.setItem(\'' + STORAGE_KEY + '\', JSON.stringify(newApps));\n' +
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

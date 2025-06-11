// 履歷資料
const resumeData = {
  基本資料: {
    姓名: "Adda Chen",
    英文名: " ",
    頭像: "images/image3.png",
    聯絡資訊: [
      {
        類型: "教育",
        圖示: "images/image4.png",
        內容: "臺灣科技大學, 學士, 化學工程系 2009-2011",
      },
      {
        類型: "教育",
        圖示: "images/image4.png",
        內容: "臺北商業大學, 學士, 資訊管理系 2024-now (在職進修)",
      },
      {
        類型: "電子郵件",
        圖示: "images/image8.png",
        內容: "mon02118@gmail.com",
        連結: "mailto:mon02118@gmail.com",
      },
      // {
      //   類型: "電話",
      //   圖示: "images/image7.png",
      //   內容: " ",
      // },
    ],
    簡介: "5年以上的iOS開發經驗。專長在金融數據圖表深度客製化",
  },
  技能: [
    { 類別: "Programming", 內容: "Swift, Python" },
    {
      類別: "Architecture",
      內容: "MVVM, Redux, MVC, Clean Architecture ...",
    },
    {
      類別: "Library",
      內容: "Chart, Combine, RxSwift, Alamofire, Snapkit, FMDB ...",
    },
    { 類別: "UI", 內容: "Programmatic UI, Storyboard, SwiftUI" },
    { 類別: "AI", 內容: "VSCode+Copilot, Xcode+Copilot ..." },
    { 類別: "Other", 內容: "Git, VSCode, Postman, Porxyman, Mockoon ..." },
    { 類別: "Learning", 內容: "Flutter, Golang, SQL ..." },
  ],
  工作經驗: [
    {
      公司: "資深 iOS 工程師, 鉅亨金融科技, 台北",
      時間: "2023.04 - now (Swift)",
      職責: [
        "金融數據圖表視覺化",
        "Clean Architecture架構實作",
        "Chart圖 深度客製化",
        "專案重構",
      ],
      產品: [
        {
          名稱: "鉅亨網",
          連結: "https://apps.apple.com/tw/app/%E9%89%85%E4%BA%A8%E7%B6%B2/id1071014509",
        },
      ],
    },
    {
      公司: "資深 iOS 工程師, 華南永昌證券, 台北",
      時間: "2023.01 - 2023.04 (Swift)",
      職責: [
        "負責iOS新App開發",
        "建構App內資料庫架構(FMDB)",
        "建構Unit Test/UI Test 架構",
        "分析現有架構優劣、實作解決方案、專案重構",
      ],
      產品: [
        {
          名稱: "華南e指沖",
          連結: "https://apps.apple.com/tw/app/%E8%8F%AF%E5%8D%97e%E6%8C%87%E6%B2%96/id6469095445",
        },
      ],
    },
    {
      公司: "軟體設計工程師, CMoney 全曜財經(作者組), 台北",
      公司連結: "http://www.cmoney.com.tw/",
      時間: "2020.04 - 2022.05 (Swift / Python)",
      職責: [
        "負責設計與建構 iOS App",
        "整理金融相關資料並將其視覺化",
        "依照團隊需求製作自動化工具，減少重覆工作、優化流程",
        "依照需求製作爬蟲工具抓取網路資源",
        "根據產品需求，提供工程解決方案",
        "協助新進工程師教育訓練 - 工具教學",
      ],
      工具教學連結:
        "https://chenadda.notion.site/3e5d84302b3048c68bb81ebaa40a8d3c",
      產品: [
        {
          名稱: "愛德恩小朋友-找出動能強勢股票",
          連結: "https://apps.apple.com/tw/app/id1554607229",
        },
        {
          名稱: "無聊詹-監控警報器",
          連結: "https://apps.apple.com/tw/app/id1313186295",
        },
        {
          名稱: "阿水-布林通道盤中飆股監控",
          連結: "https://apps.apple.com/tw/app/id1448801052",
        },
        {
          名稱: "丹尼爾-主流強勢股",
          連結: "https://apps.apple.com/tw/app/id1447192291",
        },
        {
          名稱: "林恩如-強棒旺旺來",
          連結: "https://apps.apple.com/tw/app/id1435764701",
        },
      ],
    },
    // {
    //   公司: "研發工程師, 高恒材料科技, 上海",
    //   公司連結: "http://www.innotack.com/",
    //   時間: "2013.02 - 2015.06",
    //   職責: ["製程工程研發", "技術文件編寫與技術交流"],
    //   產品: [],
    // },
  ],
  個人專案: [
    {
      標題: "OwnerKChart - 個人的客製化台指Mac前端介面 - Redux架構實作",
      圖片連結: [
        "https://firebasestorage.googleapis.com/v0/b/savepdf-2163f.appspot.com/o/page1.png?alt=media&token=8cc1399e-f5bd-40dd-a4fe-f37029187f33",
        "https://firebasestorage.googleapis.com/v0/b/savepdf-2163f.appspot.com/o/page2.png?alt=media&token=265ec439-a490-48eb-9e8d-35a86aaac203",
      ],
      技術: "SwiftUI-Mac/iPhone",
      圖片: ["images/image6.png", "images/image2.png"],
      圖片說明: ["OwnerKChart 圖一", "OwnerKChart 圖二"],
    },
    {
      標題: "淘寶優惠券搜尋中心 - LineChatbot",
      描述: "輸入商品關鍵字可搜索淘寶相關商品優惠券",
      技術: "",
      圖片連結:
        "https://firebasestorage.googleapis.com/v0/b/savepdf-2163f.appspot.com/o/3.webp?alt=media&token=8ca3d70c-1f88-4e10-b7ad-448af7aafe32",
      圖片: "images/image5.png",
      圖片說明: "淘寶優惠券搜尋中心",
    },
    {
      標題: "FollowMeMap - iOS",
      描述: "提供位置紀錄、並分享即時路線給朋友的iOS App應用",
      技術: "",
      圖片連結:
        "https://firebasestorage.googleapis.com/v0/b/savepdf-2163f.appspot.com/o/2.webp?alt=media&token=49c7a76f-d0c1-4cb8-b736-fa3478bc893b",
      圖片: "images/image1.png",
      圖片說明: "FollowMeMap",
    },
  ],
  頁腳: {
    版權: "© 2024 Adda. 保留所有權利。",
  },
  影片展示: [
    {
      id: "demo-video-1",
      標題: "股票列表",
      描述: "1. 股票列表上下左右滑動\n2. 左右收合Cell\n3. 凍結Header Cell\n4. 即時更新數據",
      影片連結:
        "https://firebasestorage.googleapis.com/v0/b/savepdf-2163f.appspot.com/o/demo1.mp4?alt=media&token=bf17c572-ec91-443d-9ad0-9ebd85553528",
      海報圖片: "images/thumbnail_1.jpg",
    },
    {
      id: "demo-video-2",
      標題: "顯示綜合市場資訊",
      描述: "1. 動態抓取資料顯示\n2. Cell Height動態變更\n3. 共用股票列表模組\n4. 定期快取資料",
      影片連結:
        "https://firebasestorage.googleapis.com/v0/b/savepdf-2163f.appspot.com/o/demo2.mp4?alt=media&token=11e62839-8e3b-4f1f-b21a-345ca9dd28c1",
      海報圖片: "images/thumbnail_2.jpg",
    },
    {
      id: "demo-video-3",
      標題: "個股內頁行情顯示",
      描述: "1. 日k顯示各種資訊\n2. 查價線資源滑動變更顯示\n3. 分時走勢漸層顯示\n4. 分時走勢Y軸客製化",
      影片連結:
        "https://firebasestorage.googleapis.com/v0/b/savepdf-2163f.appspot.com/o/demo3.mp4?alt=media&token=25f3672e-f8f0-4fd4-9690-a789252001dc",
      海報圖片: "images/thumbnail_3.jpg",
    },
  ],
};

// 將資料指派給 window 對象，使其在全域範圍內可用
window.resumeData = resumeData;

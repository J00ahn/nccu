// 질문 9개
const qnaList = [
    {
        q: '1. 目前餓不餓？',
        a: [
          { answer: 'a. 不餓', type: [2,5,6,13] },
          { answer: 'b. 好餓!', type: [0,1,2,3,4,6,7,8,9,10,11,12,14,15] },
      
        ]
      },
      {
        q: '2. 你是什麼派的？',
        a: [
          { answer: 'a. 西洋派!', type: [5,6,7,8,11,13,14] },
          { answer: 'b. 日式!', type: [0,1,12] },
          { answer: 'c. 台式!', type: [3,4,9] },
          { answer: 'd. 韓式', type: [2,10,15] },
  
        ]
      },
      {
        q: '3. 喜不喜歡吃肉？',
        a: [
          { answer: 'a. 喜歡', type: [8,14,15 ] },
          { answer: 'b. 還好', type: [0,1,2,9,10,11,12] },
        ]
      },
      {
        q: '4. 你想吃麵嗎？',
        a: [
          { answer: 'a. 想吃', type: [9,10,11] },
          { answer: 'b. 我不喜歡麵', type: [0,2,4,5,6,7,8,12,13,14,15] },
        ]
      },
      {
        q: '5. 你要吃健康一點的嗎？',
        a: [
          { answer: 'a. 不要', type: [1,3,6,7,8,9,11,14,15] },
          { answer: 'b. 要', type: [0,2,4,5,10,12,13] },
        ]
      },
      {
        q: '6. 涼的還是熱的?',
        a: [
          { answer: 'a. 熱', type: [1,3,4,6,7,8,9,11,12,14,15] },
          { answer: 'b. 涼的', type: [0,5,10,13] },
        ]
      },
      {
        q: '7. 錢夠嗎？',
        a: [
          { answer: 'a. 還好 ', type: [1,2,5,6,7,8,9,10,12,13 ] },
          { answer: 'b. 夠 ', type: [0,3,4,11,14,15 ] },
        ]
      },
      {
        q: '8. 你要在哪裡吃？',
        a: [
          { answer: 'a. 不想出門，想點外送', type: [0,6,7,8,9 ] },
          { answer: 'b. 外面，我要帶走', type: [2,5,6,7,8,13]},
          { answer: 'c. 在餐廳裡', type: [1,3,4,9,10,11,12,14,15] },
        ]
      },
    
      {
        q: '9. 你要一個人吃嗎？',
        a: [
          { answer: 'a. 對，我沒有朋友', type: [0,1,2,5,6,9,10,11,12,14 ] },
          { answer: 'b. 不，要跟大家一起吃', type: [3,4,7,8,15] },
        ]
      }
        
  ]
  // 음식 15개 결과
  const infoList = [
    {
      name: '壽司?',
      desc: '金鮨日式料理'
    },
    {
      name: '拉麵?',
      desc: '鬼匠拉麵， 展弟拉麵店'
    },
    {
      name: '便當?',
      desc: '菁英食堂自助餐，政大排骨王便當，美香味快餐'
    },
    {
      name: '火鍋?',
      desc: '鴻記石鍋，小尚品精制鍋物,貓空有機農家直送'
    },
    {
      name: '餃子?',
      desc: '八方，飽飽食府'
    },
    {
      name: '三名字?',
      desc: 'Subway , Juicy Bun'
    },
    {
      name: '漢堡?',
      desc: '麥當勞, Mos burger, Juicy Bun'
    },
    {
      name: '披薩?',
      desc: 'Come See Pizza'
    },
    {
      name: '炸雞?',
      desc: 'KFC,3Q脆皮雞排'
    },
    {
      name: '炸醬麵?',
      desc: '飽飽食府'
    },
    {
      name: '涼拌米線?',
      desc: '華越美食,滇味廚房'
    },
    {
      name: '義大利麵?',
      desc: 'Lazy Pasta'
    },
    {
      name: '咖哩?',
      desc: '咖哩飯店，咖在有哩，咖哩空間'
    },
    {
      name: '沙拉?',
      desc: 'Juicy Bun, Subway'
    },
    {
      name: '牛排?',
      desc: '湘湘牛排館'
    },
    {
      name: '韓式烤肉?',
      desc: '高句麗，石鍋'
    },
  ]
const fakeCO2 = []
const fakePM25 = []
const fakeHUM = []
const fakeTMP = []
const fakeLabels = []

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i = 0; i<100; i++) {
  fakeCO2.push(randomIntFromInterval(300, 600))
}

for(let i = 0; i<480; i++) {
  fakePM25.push(randomIntFromInterval(20, 70))
}

for(let i = 0; i<100; i++) {
  fakeHUM.push(randomIntFromInterval(1, 100))
}

for(let i = 0; i<100; i++) {
  fakeTMP.push(randomIntFromInterval(15, 35))
}

// for(let i = 0; i<=480; i++) {
//   fakeLabels.push(i)
// }
// console.log('fakeLabels@@@@@@@@@', fakeLabels);


//////////////////////////////////////////////////////
// 初始化開始時間為午夜（00:00）
let currentTime = new Date("2000-01-01T00:00:00");

// 定義時間間隔（3 分鐘）
const timeInterval = 3 * 60 * 1000; // 3 分鐘的毫秒數

// 生成 480 筆資料
for (let i = 0; i < 480; i++) {
  fakeLabels.push(currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }));
  currentTime = new Date(currentTime.getTime() + timeInterval);
}

// 添加第 481 筆資料（與第一筆相同）
fakeLabels.push(" 00:00 ");// !!!!注意!!!!! 如果是"00:00"會導致hover沒東西!!!
// 前後加一個空格" 00:00 "讓它變獨一無二字串!!!
//////////////////////////////////////////////////////


export { fakeCO2, fakePM25, fakeHUM, fakeTMP, fakeLabels }

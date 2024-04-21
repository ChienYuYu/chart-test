const fakeCO2 = []
const fakePM25 = []
const fakeHUM = []
const fakeTMP = []
const fakeLabels = []

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i = 0; i<20; i++) {
  fakeCO2.push(randomIntFromInterval(400, 600))
}

for(let i = 0; i<20; i++) {
  fakePM25.push(randomIntFromInterval(30, 100))
}

for(let i = 0; i<20; i++) {
  fakeHUM.push(randomIntFromInterval(30, 100))
}

for(let i = 0; i<20; i++) {
  fakeTMP.push(randomIntFromInterval(20, 35))
}

for(let i = 1; i<=20; i++) {
  fakeLabels.push(i)
}

// /////////////////////////
let timeArray = [];
let now = new Date();
for (let i = 20; i >= 0; i--) {
    let time = new Date(now.getTime() - i * 10000); // 每10秒鐘往前一筆
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timeArray.push(`${hours}:${minutes}:${seconds}`);
}
console.log(timeArray);
// ////////////////////////


export { fakeCO2, fakePM25, fakeHUM, fakeTMP, fakeLabels, timeArray }
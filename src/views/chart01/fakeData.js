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

for(let i = 0; i<100; i++) {
  fakePM25.push(randomIntFromInterval(1, 200))
}

for(let i = 0; i<100; i++) {
  fakeHUM.push(randomIntFromInterval(1, 100))
}

for(let i = 0; i<100; i++) {
  fakeTMP.push(randomIntFromInterval(15, 35))
}

for(let i = 1; i<=40; i++) {
  fakeLabels.push(i)
}


export { fakeCO2, fakePM25, fakeHUM, fakeTMP, fakeLabels }
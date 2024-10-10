const fakeCO2 = []
const fakePM25 = []
const fakeHUM = []
const fakeTMP = []
const fakeLabels = []
const testArr = []

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i = 0; i<420; i++) {
  fakeCO2.push(randomIntFromInterval(400, 600))
}

for(let i = 0; i<420; i++) {
  fakePM25.push(randomIntFromInterval(30, 35))
}

for(let i = 0; i<420; i++) {
  fakeHUM.push(randomIntFromInterval(50, 60))
}

for(let i = 0; i<420; i++) {
  fakeTMP.push(randomIntFromInterval(20, 25))
}

for(let i = 0; i<420; i++) {
  testArr.push(randomIntFromInterval(500, 900))
}

for(let i = 1; i<=420; i++) {
  fakeLabels.push(i)
}



export { fakeCO2, fakePM25, fakeHUM, fakeTMP, fakeLabels, testArr }
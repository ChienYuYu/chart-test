const fakeData = [1, 0, 1, 3, 8, 2, 1, 0,2,0]
const fakeData02 = []
const fakeLabels = []

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


for(let i = 0; i<100; i++) {
  fakeData02.push(randomIntFromInterval(1, 10))
}

for(let i = 1; i<=10; i++) {
  fakeLabels.push(i)
}


export { fakeData, fakeData02, fakeLabels }
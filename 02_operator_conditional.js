// 문제1
const age = 17;
const result = age >= 18 ? "관람 가능" : "관람 불가";
console.log(result);


// 문제2
const score = 76;
let bonus = 0;

if (score >= 80) bonus += 10;
else if (score >= 50) bonus += 5;

console.log(`점수: ${score}, 보너스: ${bonus}`);


// 문제3
const month = 4;
let season = "";

switch (month) {
  case 12: case 1: case 2:
    season = "겨울";
    break;
  case 3: case 4: case 5:
    season = "봄";
    break;
  case 6: case 7: case 8:
    season = "여름";
    break;
  case 9: case 10: case 11:
    season = "가을";
    break;
  default:
    season = "잘못된 월입니다.";
}

console.log(`${month}월은 ${season}입니다.`);


// 문제 5
const n = 10;
let i = 1;

while (i <= n) {
  if (i % 2 !== 0) console.log(i);
  i++;
}


// 문제 6
for (let j = 1; j <= 20; j++) {
  if (j % 5 === 0) continue;
  console.log(j);
}


// 문제 7
for (let k = 1; k <= 50; k++) {
  if (k >= 30) break;
  console.log(k);
}

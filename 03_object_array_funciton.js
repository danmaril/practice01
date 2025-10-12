/* 2-1. min, max function (함수 선언문) */
function min(a, b) {
  return a < b ? a : b;
}

function max(a, b) {
  return a > b ? a : b;
}

const num1 = 10;
const num2 = 20;

console.log("최소값 :", min(num1, num2));
console.log("최대값 :", max(num1, num2));


/* 2-2. 화살표 함수로 변경하기 (삼항 연산자 사용) */
const minArrow = (a, b) => a < b ? a : b;
const maxArrow = (a, b) => a > b ? a : b;

const x = 10;
const y = 20;

console.log("최소값 :", minArrow(x, y));
console.log("최대값 :", maxArrow(x, y));


/* 3-2. 객체 생성자로 계산기 객체 만들기 */
function Calculator() {
  this.a = 10;
  this.b = 20;
  this.sum = function() {
    return this.a + this.b;
  };
  this.multi = function() {
    return this.a * this.b;
  };
}

const calc = new Calculator();
console.log("합 :", calc.sum());
console.log("곱 :", calc.multi());


/* 4-2. 숫자값 배열과 문자값 배열 정렬하기 */
const numbers = [20, 100, 37, 54, 88, 9];
const strings = ["wow", "js", "party", "hello"];

const ascNum = [...numbers].sort((a, b) => a - b);
const descNum = [...numbers].sort((a, b) => b - a);

const ascStr = [...strings].sort();
const descStr = [...strings].sort().reverse();

console.log(ascNum);
console.log(descNum);
console.log(ascStr);
console.log(descStr);


/* 5-1. 학생 객체 정렬 및 이름 합성 함수 작성 */
function Student(firstName, lastName, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

const studentList = [
  new Student("길동", "홍", 60),
  new Student("보고", "장", 70),
  new Student("관순", "유", 80)
];

function sortFromScore(arr) {
  return arr.sort((a, b) => b.score - a.score);
}

function makeFullName(arr) {
  return arr.map(s => ({
    name: s.lastName + s.firstName,
    score: s.score
  }));
}

sortFromScore(studentList);
console.log(studentList);
console.log(makeFullName(studentList));

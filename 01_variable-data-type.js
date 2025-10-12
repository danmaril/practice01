// 문제1
const name = "이정웅";
const age = 25;
const address = "서울";

console.log(name, age, address);
console.log(typeof name, typeof age, typeof address);


// 문제2
const student = {
  name: "홍길동",
  studentId: 12345,
  major: "컴퓨터공학"
};

console.log(student.name, student.studentId, student.major);

student.year = 2;      // 속성 추가 (OK)
delete student.major;  // 속성 삭제 (OK)

console.log(student);


// 문제3
const foods = ["피자", "치킨", "초밥", "라면", "떡볶이"];

foods.push("햄버거");   // 추가
foods.pop();            // 마지막 제거
foods.shift();          // 첫 번째 제거
foods.unshift("삼겹살"); // 첫 번째 추가

console.log(foods);


// 문제4
const numbers = [10, 20, 30, 40, 50];
const doubled = [];

numbers.forEach(num => doubled.push(num * 2));

console.log(doubled);


// 문제5
const students = [
  { name: "홍길동", grade: 1, score: 75 },
  { name: "이몽룡", grade: 2, score: 85 },
  { name: "성춘향", grade: 3, score: 95 }
];

students.forEach(s => {
  console.log(`이름: ${s.name}, 학년: ${s.grade}학년, 점수: ${s.score}`);
});

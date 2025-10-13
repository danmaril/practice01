/* 1. 클래스와 메서드 정의 */
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name}가(이) ${this.sound} 소리를 냅니다.`);
  }
}

class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);  
    this.breed = breed;  
  }

  
  speak() {
    console.log(`${this.name} (${this.breed})가(이) ${this.sound}라고 짖습니다!`);
  }
}

const myDog = new Dog("초코", "멍멍", "푸들");
myDog.speak();



/* 2. Getter와 Setter 활용 */
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    this._width = value;
  }

  set height(value) {
    this._height = value;
  }
}

const rect = new Rectangle(10, 5);
console.log("면적:", rect.area);

rect.width = 15; 
console.log("변경 후 면적:", rect.area);

/* 3. Rest 파라미터와 Spread 문법 활용 */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArrays = [ ...arr1, ...arr2];

let sumAll = 0;
for (const num of mergeArrays) {
  sumAll += num;
}
console.log(`합계: ${sumAll} `);
console.log('병합된 배열:', mergeArrays);

/* 4. 구조분해 할당 활용 */
const user = {
  name: '홍길동',
  age: 30,
  locaton: '서울'
}

const [first, ...other] = [1, 2, 3, 4, 5];

const {name, age} = user;


console.log(`${name}은 ${age}살입니다.`)
console.log(`첫 번째 요소: ${first}`);
console.log(`나머지 요소: [${other}]`);

/* 5. 클래스와 구조분해 할당을 활용한 학생 관리 시스템 */
class Student {
  constructor(name, age, score) {
    this.name = name;
    this.score = score;
    this.age = age;
  }
}

const studentA = new Student('유관순', 20, 90);
const studentB = new Student('홍길동', 23, 80);
const studentC = new Student('장보고', 25, 70);

const students = [studentA, studentB, studentC];

const names = students.map(({name}) => name);
const scores = students.map(({score}) => score);

console.log('학생 이름:', names.join(', '));
console.log('학생 점수:', scores);

/**
 * 1. map 사용
 * const names = students.map(({name}) => name);
 * const scores = students.map(({score}) => score);
 * 
 * 2. for ...of 사용
 * for (const{ name, score } of students) {
 *    names.push(name);
 *    scores.push(score);
 * }
 */
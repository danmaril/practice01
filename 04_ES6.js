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

// Functions and OOP

// Function with parameter and return value
function add(a: number, b: number): number {
    return a + b;
  }
  console.log(add(5, 3)); // Output: 8
  
  // OOP - Class, Object, and Inheritence
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    studentId: number;
  
    constructor(name: string, age: number, studentId: number) {
      super(name, age);
      this.studentId = studentId;
    }
  
    study(): void {
      console.log(`${this.name} is studying.`);
    }
  }
  
  let student1 = new Student("Alice", 22, 12345);
  student1.greet();
  student1.study();
  
// 1. Data Types and Variables

// Tipe data dasar
let message: string = "Hello, TypeScript!";
let age: number = 25;
let isStudent: boolean = true;

// Array
let scores: number[] = [90, 85, 88];

// Tuple
let student: [string, number];
student = ["John Doe", 21];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green;

// Any
let randomValue: any = "Could be anything";
randomValue = 42;

// Void
function sayHello(): void {
  console.log(message);
}

sayHello();

// Type Annotations in TypeScript
// Type annotations tell TypeScript what type of value a variable will refer to.
// Basic type annotations

let apples: number = 5; // 'apples' can only be a number
let speed: string = "fast"; // 'speed' can only be a string

apples = 10; // Valid, since 10 is a number

let nothingmuch: null = null; // 'nothingmuch' can only be null
let nothing: undefined = undefined; // 'nothing' can only be undefined

// Built-in objects
let now: Date = new Date(); // 'now' is a Date object

// Arrays
let colors: string[] = ['red', 'green', 'blue']; // Array of strings
let myNumbers: number[] = [1, 2, 3]; // Array of numbers
let truths: boolean[] = [true, false, true]; // Array of booleans

// Classes
class Car {
    // Class definition (empty for now)
}

let car: Car = new Car(); // 'car' is an instance of the Car class

// Object literal
let point: { x: number, y: number } = {
    x: 10,
    y: 20
}; // 'point' must have properties x and y, both numbers

// Function type annotation
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};
// logNumber is a function that takes a number and returns nothing (void)

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y" : 20}';
const coordinates = JSON.parse(json); // TypeScript infers 'any' type here
console.log(coordinates);
// To avoid 'any', add an annotation:
// const coordinates: { x: number; y: number } = JSON.parse(json);

// 'any' Type: A type that can be any value. Avoid using 'any' to maintain type safety.

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // Declare type since we don't initialize immediately

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// Type annotation ensures 'foundWord' is always a boolean

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // Can be a boolean or a number

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]; // Now a number
    }
}
// Use union types when a variable might hold more than one type of value
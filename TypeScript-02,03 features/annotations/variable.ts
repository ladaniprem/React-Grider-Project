let apples : number =  5;
let speed : string = "fast";

apples = 10;

let nothingmuch : null = null; 
let nothing : undefined = undefined;

// bulid in objects 

let now:Date = new Date();

// Array

let colors : string[] = ['red', 'green', 'blue'];
let myNumbers : number[] = [1, 2, 3];
let truths : boolean[] = [true, false, true]; 

// classes 

class Car {

}

let car : Car = new Car(); // car :- variable of type Car, Car :- instante of class Car

// Object literal

let point : {x:number, y:number} = {
    x : 10,
    y : 20
};

// Function
 
const logNumber:(i:number) => void  = (i:number) => {      // (i:number) => void annotation for function type
   console.log(i);
};

// when to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y" : 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);



// any Type :- A type ,just as string or boolean are types, that represents any value.
// means ts has no idea what this is can't check for correct properties references
// avoid variable with any type at all costs the type safety of typescript
// any  type is a way to opt out of type checking in typescript

// 2) When we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord : boolean; // we don't know if it will be true or false, so we use boolean type;

for (let i=0; i<words.length;i++){
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero : boolean| number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      
        numberAboveZero = numbers[i];
        
    }
    
}

// Theory:
// This file demonstrates function annotations in TypeScript. 
// Function annotations allow us to specify the types of parameters and return values, 
// which helps catch errors at compile time and improves code readability.
// The examples include different ways to define functions: arrow functions, function declarations,and anonymous functions. 
// It also shows how to annotate functions that return void (no value) 
// and how to destructure parameters with type annotations.

const add = (a:number,b:number) => {
    return a + b;
};

const sunstract = (a:number,b:number):number => {
  return a - b;
};

function divide (a:number,b:number):number {
     return a/b;
}

const multiply = function (a:number,b:number):number {
     return a*b;
}

const logger = (message : string) : void => {
     console.log(message);
}

const therowError = (message:string) :void => {
     if(!message){
     throw new Error (message);
     }
};

const forcast = {
     date: new Date(),
     weather: 'sunny'
};

// const logWeather = (forcast: {date : Date,weather:string}): void => {

//     console.log(forcast.date);
//     console.log(forcast.weather);
// };

// logWeather(forcast);

//ES2015
 
// const logWeather = ({date,weather}) => {
//     console.log(date);
//     console.log(weather);   
// }
const carMakers  = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carByMake : string[][] = [];

// Help with interface when extracting va;ues 

const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Help with 'map'
carMakers.map((car:string): string => {
  return car.toUpperCase();
})

// flexible style
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-01-01');
importantDates.push(new Date());
importantDates.push(100); // Error: Argument of type 'number' is not assignable to parameter of type 'Date | string'.


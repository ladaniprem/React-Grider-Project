/** 
 - Represents a drink object with specific properties.

 - This object is used to demonstrate how tuples can be used in TypeScript to enforce
   a specific order and type of elements, as opposed to regular objects where the order
   of properties does not matter.

 - Tuples are a special type of array that can hold a fixed number of elements,
   where each element can be of a different type.

 - In the context of tuples, you might represent the same
 - data as a fixed-length array with ordered types, e.g., `[string, boolean, number]`.
 
 - @property color - The color of the drink (e.g., "brown").
 - @property carbonated - Indicates if the drink is carbonated.
 - @property sugar - The amount of sugar in the drink (in grams).
 */
const drink = {
    color : "brown",
    carbonated : true,
    sugar : 40
};
// type alias
type Drink = [string, boolean, number];
// const pepsi : [string,boolean,number] = [
//     'brown',
//     true,
//     40
// ];
const pepsi : Drink = [
    'brown',
    true,
    40
];
const sprite : Drink = [
    'clear',
    true,
    40
];
const tea : Drink = [
    'brown',
    false,
    0
];

const CarSpecs : [number,number] = [444,3334];

const carStats = {
    hoursepower : 444,
    weight : 3334
}
// pepsi[0] = 40; // Error: Type 'number' is not assignable to type 'string'.
// pepsi[1] = false; // Valid: boolean can be assigned to boolean.


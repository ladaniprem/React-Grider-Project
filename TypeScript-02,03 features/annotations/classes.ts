class Vehicel {
    // public drive() : void {
    //    console.log("Driving a vehicle");
    // }
    // color: string = 'red';
    //   color: string ;

    constructor( public color?: string) {
        if (color) {
            this.color = color;
        } 

    }
// protected hook() : void {
public hook() : void {
    console.log('beep');
}

}

class Car extends Vehicel{
    constructor(public wheels : number,color:string ){
        super(color ); // Call the parent constructor with a color
    }
   drive(): void {
       console.log('vroome');   
   }
   startdriving() : void {
    this.drive();
  //  this.hook();
   }
}
 const vehicle = new Vehicel();
// vehicle.drive(); // Output: Driving a vehicle
// console.log(vehicle instanceof Vehicel); // Output: true
// vehicle.hook(); // Output: beep
console.log(vehicle.color); // Output: red


const car = new Car(4, 'blue');
car.drive(); // Output: Driving a vehicle
console.log(car instanceof Car); // Output: true
car.hook();


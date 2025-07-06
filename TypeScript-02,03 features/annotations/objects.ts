const profile = {
  name: 'prem',
  age : 20,
  coords : {
    lat: 0,
    lng: 15
  },
  setAge (age: number) : void {
    this.age = age;
  }
};

// Destructuring with type annotations
const {age, name: profileName} : {age : number ; name:string} = profile;
const {coords: {lat, lng}} : {coords: {lat: number; lng: number}} = profile;

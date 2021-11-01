class MyClass {
  //class methods
  constructor() {
    //..
  }
  method1() {}
  method2() {}
  //etc..
}
//Example:

// class User {
//   constructor(name) {
//     this.name = name
//   }
//   get name() {
//     return this._name
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return
//     }
//     this._name = value
//   }
//   sayHi() {
//     console.log(this.name)
//   }
// }
// //Usage:
// let user = new User('John')
// user.sayHi()
// user.age = 33
// console.log(user.age)

class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with the ${this.speed} speed.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still`);
  }
}
let animal = new Animal('Dog')

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");
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
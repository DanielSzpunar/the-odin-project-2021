const personFactory = (name, age) => {
  const sayHello = () => console.log('hello')
  return {name,age,sayHello}
}
const dan = personFactory('dan', 41)
console.log(dan.age)
dan.sayHello()

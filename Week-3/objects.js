//JS objects
const car = {type:"Fiat", model:"300", color:"white"};     
console.log(car);
console.log(car.model)
//destructing
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a)
//spread operator
const person = { name : 'Maria' , age :20, isMarried : false,};
const person2={...person , salary: 500000};
console.log(person2)
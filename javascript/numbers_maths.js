// const score = 100
// const balance = new Number(400) // ye cheez guarantee karti hai ki number hi hoga 


// console.log(score);
// console.log(balance.toString()); 

// console.log(score.toFixed(1)); // this will fix give the value upto how many decimal places you want

// const value = 123.998989
// console.log(value.toPrecision(7)); // upto how many significant figures you want precision and will give the output in string 


// const number = 100000000
// console.log(number.toLocaleString("en-IN"));


//// ++++++++++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.ceil(4.2)); // ceil means greatest integer 
console.log(Math.floor(4.8)); // lowest integer
console.log(Math.random()); // this will any random number between 0 - 1



console.log(Math.random() * 10 + 1); // this is for getting value between 1 - 10 but +1 to avoid 0 wala case
console.log(Math.floor(Math.random() * 10 + 1)); // to get a single value

const min = 10 
const max = 20 
// ek range de denge min max ke form toh 

console.log(Math.floor(Math.random()* (max - min + 1 ) + min));












const mydate = new Date();
console.log(mydate);

console.log(mydate.toDateString());
console.log(mydate.toString());

const curr = Date.now() // for milisecond ( better for comparision)
console.log(curr);

// let myDate = new Date("12-17-2024") // one type to declare date
// let myDate = new Date(2023 , 0 , 12 ) // month ki indexing 0 se shuru hoti hai 
let myDate = new Date( 2024 , 11 , 17 , 23 , 7) 
console.log(myDate.toLocaleString());

console.log(myDate.getTime()) // for milisecond of any given date from ( 1 JAN 1970)
console.log(Math.floor(myDate.getTime() / 1000))

console.log(Math.floor(Date.now() / 1000));









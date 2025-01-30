// scope {} bas yahi matlab hai scope ka 
let a = 10 ;
const b = 20 ; 
var c = 0 ; // this is an error because var acts like global scope 

if (true){
    let d = 0 ;
    const j = 0 ;
    var v = 0 ;
}

// console.log(d);
// console.log(j);
console.log(v); // this will not give an error 


console.log(one(4)); // ye ek function hai to isko upar neeche kahi bhi call kar skte hai 
function one(num){
    return num + 1 
}

const addtwo = function add(num){ // ye abhi ek function toh hai lekin ye variable ke andar store hai toh isko aise call nahi kar skte
    return num + 2 
}

console.log(addtwo(5))
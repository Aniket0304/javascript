// we can use "this" keyword in arrow function 

// const chai = function (){
//     let username = "Aniket"
//     console.log(this.username) // function ke andar use nahi kar skte 
// }
// chai()

const chai = () => {
    let username = "Aniket"
    console.log(this)
}
chai()
// arrow function ke andar this ko use kar liya hai 

// ek aur method hai bahut important hai wo bahut use hota hai 
const addtwo = (num1 , num2) => (num1 + num2)
console.log(addtwo(3,4))

// agar () use kar rhe ho toh "return" use karne ki zaroorat nahi hai lekin {} use kar rhe ho toh "return " use karna padega.
function user(username , password , email){
    this.username = username ;
    this.password = password ;
    this.email = email;

    const greetings = function(){
        console.log(`Hello ${this.username}`)
    }
    return this
}
const userone = new user("aniket" ,"123anik" , "aniket0124@gmail.com") // this ka use karke humne ek object banaya hai 
console.log(userone) // main baat ye hai ki new ka use kiya warna wo har baar reference change kar deta 
const usertwo = new user("tushar" , "123tush" , "tushar0124@gmail.com")
console.log(usertwo)    

console.log(userone.constructor) // constructor function khud ko return kiya hai

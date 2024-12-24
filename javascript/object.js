// Objects
const mysym = Symbol("value")
const jsuser = {
    name : "Aniket",
    age : 20,
    email : "aniketyahoo.com",
    [mysym] : "mykey1", // iske ham aise normal bhi likh skte hai like mysym : "mykey" lekin waha pe data type string ho jaayega 
    "full name" : "Aniket Dubey" 
}

// console.log(jsuser.email); // phla tareeka 
// console.log(jsuser["email"]); // doosra tareeka , accha isme ye baat hai ki javascript key ko bhi string ki tarah recognize karta hai.
// console.log(jsuser["full name"]); // agar key me string pass ki toh ek lauta yahi ek tareeka hai isko access karne ka 

// let say hame koi data change karna hai jsuser me se toh ham kya karenge 
jsuser.email = "aniketgoogle.com"
console.log(jsuser.email)
// abhi agar isko freeze karna hai ki ab change na ho ske toh 
// Object.freeze(jsuser)
jsuser.email = "aniketmicrosoft.com"
console.log(jsuser.email);

// ab ek greetings function banayenge 
jsuser.greetings = function(){
    console.log(`Hello user , ${this.name}`)
}
console.log(jsuser.greetings); // abhi ye  sirf referece le raha hai kuch output nahi de paa raha hai 
console.log(jsuser.greetings());



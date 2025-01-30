// functions to create for unknown arguments
function calculatecartdetails(...anynumber){
    return anynumber
}
console.log(calculatecartdetails(200 , 300 , 400 , 500))

// taking arguments as object 

const user = {
    username : "Aniket" ,
    age : 19
}
function userdeclaration(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`)
}
// userdeclaration(user)
userdeclaration({
    username : "Tushar" ,
    age :22
})

// taking arguments as arrays
const array = [200 , 400 , 500 , 600]

function getanyelement(getarray){
    return getarray[1]
}

// console.log(getanyelement(array))
console.log(getanyelement([200 , 400 , 500 , 600]))
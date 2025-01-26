const newobj = {
    name : "aniket",
    age : 20,
    email : "aniketdubey",
    fullname :{
        username : {
            use: "aniket0124"
        }
    }
}
console.log(newobj.fullname.username.use); // we can create object inside object inside object 

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}

const obj3 = Object.assign({} , obj1 , obj2) // the synatax is Object.assign(target , source)
// target means in which you want to assign or insert and source is from where you want to insert

console.log(obj3);

const user = [
{
    id : 1 ,
    email : "aniketdubey0124@gmail.com"
}, 
{
    name : "aniket"
},
{
    name : "Tushar"
}
]

console.log(user[2].name)

console.log(Object.keys(user))

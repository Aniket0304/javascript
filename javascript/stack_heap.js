// stack contains (Primitive types)
// Heap contains ( Non - primitive types)

let name = "Aniket"
let anothername = name
anothername = "Dubey"

console.log(name);
console.log(anothername); //yaha pe ek copy banta hai na ki koi pointer declare hota hai 

let user = {
    email : "aniketdubey@gmail.com",
    age : 18
}


let user2 = user
// agar yaha user2 me koi change karenge to wo user me bhi change hoga 
// kyunki ye non primitive type hai aur ye heap me store hota jo ki kisi variable ko copied data nahi deta
// wo seedha usko pointer bana deta hai 

user2.email = "dubeyaniket@gmail.com"
console.log(user.email);
console.log(user2.email);



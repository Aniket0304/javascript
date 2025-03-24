const myHeroes = ["thor" , "spiderman"]

let heroesPower = {
    thor: "thunder",
    spiderman: "web",

    getspiderpower: function(){
        // console.log(this.spiderman)
    }
}


Object.prototype.printMe = function(){
    // console.log(`There are superheroes in this world`) // we have given the object a prototype function names printMe
}

heroesPower.printMe();
heroesPower.getspiderpower();

const User = {
    name : "Aniket",
    age : 20,
    email : "aniketdubey0124@gmail.com"
}

const Teacher = {
    videos : true
}

const TeacherSupport = {
    isAvailable : true
}

const TASupport = {
    makAssignment : "JSassignment",
    __proto__ : TeacherSupport
}

TeacherSupport.__proto__ = Teacher;  // methods of declaring prototype 

let anotherUsername = "ChaiAurCode      "
String.prototype.truelength = function(){
    console.log(this.trim().length)
}

anotherUsername.truelength();
User.email.truelength();





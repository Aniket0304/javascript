// how to build a class in JS
class User {
    constructor(username, email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){ // in class we dont have to use function keyword to define a function as they are methods of class
        console.log(`${this.password}`+`abc`)
    }
}

const UserOne = new User("Aniket" , "aniket@gmail.com" , "12345")

UserOne.encryptPassword();
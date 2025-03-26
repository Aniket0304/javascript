
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static method can be called without creating an object
        return `123`
    }
}

const hitesh = new User("Aniket")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.logMe());

console.log(iphone.createId());  // an instance of a class can not call a static method of a class


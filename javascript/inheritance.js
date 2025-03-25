class User{
    constructor(username){
        this.username = username ;
    }

    logMe(){
        console.log(`Username ${this.username} is logged in`)
    }
}

class Student extends User{
    constructor(username , email){
        super(username);
        this.email = email;
    }
    addCourse(){
        console.log(`${this.username} added a course`)
    }
}

const StudentOne = new Student("Aniket" , "aniket@gmail.com")

StudentOne.logMe();
StudentOne.addCourse();
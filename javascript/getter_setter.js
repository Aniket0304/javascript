class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(password){
        this._password = password;
    }
}

const userOne = new user("aniket@gmail.com" , "aniket123");
console.log(userOne.password);
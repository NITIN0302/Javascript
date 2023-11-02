
class user
{
    constructor(username,age,password)
    {
        this.username = username;
        this.age = age;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
}


let chai = new user("Shubham","14","Shubham123");
console.log(chai.encryptPassword())
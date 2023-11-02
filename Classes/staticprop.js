class User
{
    constructor(username)
    {
        this.username = username;
    }

    login()
    {
        console.log(`This is ${this.username}`);
    }

    static createUser()
    {
        return "123";
    }
}

// static keyword resist the object to call the method

const user1 = new User("Shubham")

user1.login()
console.log(user.createUser())
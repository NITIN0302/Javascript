function User(username,loginCount,isLogedin)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedin = isLogedin;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("Nitin",12,true);
const userTwo = new User("Shubham",11,false);

console.log(userOne);
console.log(userTwo);
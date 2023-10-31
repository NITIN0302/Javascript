//Injecting a prototype inside a function object

function createUser(userName,score){
    this.userName = userName;
    this.score = score;
}


createUser.prototype.increment = function()
{
    this.score++;
}

createUser.prototype.printDetails = function()
{
    console.log(`${this.userName}, ${this.score}`);
}


let userOne = new createUser("Shubham",25);
let userTwo = new createUser("Nitin",250);

userOne.printDetails();

function setUserName(username)
{
    this.username = username;
}


function createUser(username,email,password)
{
    setUserName(username)
    this.email = email
    this.password = password
}


let user1 = new createUser("Shubham","shubham@fb.com","1122");
console.log(user1)

// Output will be : createUser { email: 'shubham@fb.com', password: '1122' } 
// Because the reference will be erased from call stack after the completion of execution
// To remove this error we can use call method passed with this method of the parent function

function setUserName1(username)
{
    this.username = username;
}


function createUser1(username,email,password)
{
    setUserName1.call(this,username)
    this.email = email
    this.password = password
}


let user2 = new createUser1("Shubham","shubham@fb.com","1122");
console.log(user2)
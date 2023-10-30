// Promise 1
let promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 1");
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("Completed Task 1");
})

// Promise 2
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve();
    },1000)
})
.then(()=>{
    console.log("Completed Task 2")
})

//Promise 3 chaining of resolve and reject
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(error)
        {
            console.log("Async Task 3")
            resolve({username:"Nitin",location:"Varanasi"});
        }
        else
        {
            reject("Error : Something went wrong");
        }
    },1000)
})
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise is either resolve or rejected");
})



new Promise((resolve,reject)=>{
    let val = true;
    if(val)
    {
        resolve({name:"Shubham",location:"Mainpur"});
    }
    else{
        reject("Error : Promise is rejected")
    }
})
.then(({name})=>{
    console.log(name);
    return name;
})
.then((name)=>{
    console.log(name);
})
.catch((error)=>{
    console.log(error);
})


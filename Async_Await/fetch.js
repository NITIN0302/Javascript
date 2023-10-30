
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})


// https://blog.logrocket.com/fetch-api-node-js/

// link for fetch Api documentation

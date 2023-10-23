const obj1 ={
    username:"Nitin",
    price:"999",
    welcomeMssg: function() {
        console.log(`${this.username}, How are you?`);
    }
}

obj1.welcomeMssg()
obj1.username="Sam"
obj1.welcomeMssg()


// this is not used in arrow function
const chai = ({username}) =>{
    console.log(`${username} Chai is best`)
}


//implicit return
const chai1 = ({username}) => console.log(`${username} Chai is best`)

chai(obj1)
chai1(obj1)


//Selfinvoking function


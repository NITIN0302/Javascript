var mySym = Symbol("key1")

const JsUser = {
    name:"Nitin",
    "full name":"Nitin Srivastava",
    isLogged:false,
    [mySym] : "mykey1"  //Symbol are used with square bracket to behave 
    //like Symbol otherwise it behaves like string
}

console.log(JsUser.name)
console.log(JsUser["full name"])
console.log(JsUser["isLogged"])
console.log(JsUser[mySym])

// Object.freeze(JsUser)


JsUser.greeting = () =>{
    console.log("Hello World")
}


JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
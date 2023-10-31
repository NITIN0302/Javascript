
let myArray = ["Sleeping","Running","Working"];

let myLocation = "Varanasi";

let user = {
    name : "Shubham",
    age : 21,
    getAge: function(){
        console.log(`${this.name} age is ${this.age}`)
    }
}


// Object have highest priority it will inject isLoggedin method in every object.

Object.prototype.isLoggedin = function(){
    console.log("Person is logged out");
}

myArray.isLoggedin()
myLocation.isLoggedin()
user.isLoggedin()

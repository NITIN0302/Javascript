let obj1 = {
    1:"a",
    2:"b"
}


let obj2 = {
    3:"c",
    4:"d"
}

let obj3 = Object.assign({},obj1,obj2)   //Used to merge two object
console.log(obj1.hasOwnProperty(5))     //To check their is a key present in the object

console.log(obj3)
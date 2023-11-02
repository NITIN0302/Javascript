const car = {
    name:"Defender",
    price:"1.5cr",
    isAvailable:true
}


console.log(Object.getOwnPropertyDescriptor(car,"name"))

// defining properties

Object.defineProperty(car,"name",
{
    enumerable: false,
    writable:false
})
console.log(Object.getOwnPropertyDescriptor(car,"name"))

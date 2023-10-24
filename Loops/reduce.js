const nums = [1,2,3,4,5,6,7,8,9]

let mynums = nums.reduce((ele1,ele2)=>ele1+ele2)

console.log(mynums)


let mysum = nums.reduce((ele1,ele2)=>{
    return ele1 + ele2;
},10);  
// The value after comma wil innitialize the ele1 with that value 
// In this case ele1 = 10

console.log(mysum)


const cart = [
    {
        course:"DSA",
        price:999
    },
    {
        course:"WEB DEV",
        price:1999
    },
    {
        course:"AI/ML",
        price:4999
    }
]


let total = cart.reduce((ele1,ele2) =>{
    return ele1 + ele2.price;
},0)

console.log(total)
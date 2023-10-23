

//hoisting property will be followed in this case
console.log(addone(5))
function addone(num)
{
    return num+1
}


//hoisting property is not followed in this case beacuse the function is initialize to const variable

console.log(addtwo(10))
const addtwo = function(num){
    return num+1;
}




// Spread and Rest operator

function calculateCartPrice(...arg)
{
    let num1 = 0
    arg.forEach((ele)=>{
        num1 += ele
    })
    return num1
}

console.log(calculateCartPrice(10,20,30));

const obj1 = {
    name:"Nitin Srivastva",
    price:"999",
    time:"2 Hours",
    system:"Window 10"
}

for (const key in obj1) 
{
    console.log(key, "->" , obj1[key])
}


const coding = [1,2,3,4,5,6,7,8,9]

coding.forEach((ele)=>{
    console.log(ele);
})


// you can pass a function in forEach loop
coding.forEach(function(ele){
    console.log(ele+10);
})

const value = null ?? null ?? null ?? 20;  //Nullish Coalesing operator

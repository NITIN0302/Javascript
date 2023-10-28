let veg = document.querySelector('.veggies');
let vegi = veg.querySelectorAll('.name');

//Event Bubbleup
veg.addEventListener('click',(ele)=>{
    console.log("veg ul clicked")
},false);

vegi.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        console.log(`${ele.innerHTML} ul clicked`)
        // e.stopPropagation(); for stoppin the control to for parent event
    },false)    
});


//Event Capture
veg.addEventListener('click',(ele)=>{
    console.log("veg ul clicked")
    // ele.stopPropagation(); Preventing the control to go to child event
},true);

vegi.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        console.log(`${ele.innerHTML} ul clicked`)
    },true);    
});

































// vegi.addEventListener('click',(ele)=>{
//     console.log(`${ele.innerHTML} is clicked`)
// })
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




































// vegi.addEventListener('click',(ele)=>{
//     console.log(`${ele.innerHTML} is clicked`)
// })
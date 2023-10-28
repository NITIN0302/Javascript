let veg = document.querySelector('.veggies');
let vegi = veg.querySelectorAll('.name');

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
let veg = document.querySelector('.veggies');

veg.addEventListener('click',(e)=>{
    console.log(e.target.parentNode.tagName)
    let removeit = e.target;
    removeit.remove();
},false)    
let a = document.querySelectorAll('#Acc')

let Cartbtn = document.querySelector('#AddToCart')

Cartbtn.addEventListener('click',(ele)=>{
    a.forEach((e)=>{
        console.log(e.checked);
    })
});






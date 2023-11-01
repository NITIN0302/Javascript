let a = document.querySelectorAll('#Acc')
let item = document.querySelector('.items')
let cart = document.querySelector('.cart');
let Cartbtn = document.querySelector('#AddToCart')
let rmvbtn = document.querySelector('#Remove')

Cartbtn.addEventListener('click',(ele)=>{
    a.forEach((e)=>{
        let parentLi = e.parentElement;
        if(e.checked == true)
        {
            e.setAttribute('id','Crt')
            let parentUl = parentLi.parentElement;
            parentUl.removeChild(parentLi)
            e.checked = false;
            cart.appendChild(parentLi);
        }
    })
});


rmvbtn.addEventListener('click',(ele)=>{
    let v = document.querySelectorAll('#Crt')
    v.forEach((e)=>{
        let cartLi = e.parentElement;
        if(e.checked == true)
        {
            e.setAttribute('id','Acc');
            let cartUl = cartLi.parentElement;
            cartUl.removeChild(cartLi)
            e.checked = false;
            item.appendChild(cartLi);
        }
    })
})






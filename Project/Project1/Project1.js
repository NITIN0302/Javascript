let color = ['white','black','grey','yellow'];
let i = 0;
let boxes = document.querySelector('.parent');
let innerbox = boxes.querySelectorAll('.colorbox');

innerbox.forEach((ele)=>{
    ele.setAttribute('id',color[i]);
    ele.style.backgroundColor = color[i];
    i = i+1;
})

innerbox.forEach((ele)=>{
    ele.addEventListener('click',function(e)
    {
        document.body.style.backgroundColor = e.target.id;
    })
})
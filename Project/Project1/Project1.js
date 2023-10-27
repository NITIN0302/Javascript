const innerbox = document.querySelectorAll('.colorbox');
let a = document.querySelectorAll('.parent');
console.log(a)

innerbox.forEach((ele)=>{
    ele.addEventListener('click',(e) => {
        console.log(ele);
        console.log(e);
        document.querySelector('body').style.backgroundColor = e.target.id
        document.querySelector('p').style.backgroundColor = e.target.id
        console.log(document.body)
    })

})
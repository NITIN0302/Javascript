let val = document.querySelector('.keyPress');

document.body.addEventListener('keypress',(ele)=>{
    val.innerHTML = `Your pressed key ${ele.key}`;
});
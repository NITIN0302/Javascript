let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let data = document.querySelector('ul');
let startevent;



start.addEventListener('click',(ele)=>{
    startevent = setInterval(()=>{
        let child = document.createElement('li');
        let text = document.createTextNode('Hello World');
        child.appendChild(text);
        data.appendChild(child);
    },1000);
})

stop.addEventListener('click',(ele)=>{
    clearInterval(startevent);
})
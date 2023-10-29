const hex = '0123456789ABCDEF';
let intervalId = null;
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');

start.addEventListener('click',(ele)=>{
    let color = '#';
    intervalId = setInterval(() => {
        for(let i=0;i<6;i++)
        {
            color += hex[Math.floor(Math.random()*16)];
        }
        document.body.style.backgroundColor = color;
        color = '#'
    }, 1000);
});


stop.addEventListener('click',(ele)=>{
    clearInterval(intervalId);
});


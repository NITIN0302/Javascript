let a = document.querySelector('.time');

setInterval(function(){
    const date = new Date();
    a.innerHTML = date.toLocaleTimeString();
},1000)
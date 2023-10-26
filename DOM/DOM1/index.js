let a = document.getElementById('title');
console.log(a)



// <h1>DOM learning with Chai aur code <span> Hello World </span></h1>


// This will give the HTML part is declared in the content
a.innerHTML     
// In this case output will be 
// DOM learning with Chai aur code <span style="display:none;"> Hello World </span>


// This will only show the displayed content and avoid the hidden content
a.innerText    
// In this case output will be 
// DOM learning with Chai aur code



// This will give all the text content even if it is hidden
a.textContent  
// In this case output will be 
// DOM learning with Chai aur code Hello World

// document.querySelector('') //for accesing using name
// document.querySelector('#ID') //for accessing using id
// document.querySelector('.class') // for accessing using class
// document.querySelectorAll('') // for accessing all the element of same name




//selection of all the child element using querySelector


let b = document.querySelectorAll('h1');
b.forEach((ele) =>{
    ele.setAttribute('class','text hidden one two')
})

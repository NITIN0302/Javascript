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


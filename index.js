// document.getElementById("countpeople").innerText = 5


// we store the counter of people by this method

// process for creating a working button
// initialize the count as 0
// listen for click on increment button
// increment the count variable when the button is clicked
// change the countpeople in the html to reflect the new count

let countEl = document.getElementById("countpeople")
let str = document.getElementById("preventries")
let count = 0

function increment()
{
    count += 1
    countEl.innerText = count
}

function decrement()
{
    count -= 1;
    countEl.innerText = count
}
function save()
{
    let countstr = + count + " - "
    str.textContent += countstr
    countEl.innerText = 0
    count = 0
}



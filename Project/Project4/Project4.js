let num = Math.round(Math.random()*100 + 1)
let form = document.querySelector('form')
let rem = document.querySelector('.chance')
let previous = document.querySelector('.guess')
let dec = document.querySelector('.status');
let chance = 10;

form.addEventListener('submit',(ele)=>{
    ele.preventDefault()
    let guess = parseInt(document.querySelector('#num').value);
    if(isNaN(guess) || guess <= 0 || guess > 100)
    {
        alert("Enter the valid number")
    }
    else if(chance <= 0)
    {
        dec.innerHTML = "You Loose the game"
        previous.innerHTML = "Previous Guess"
        rem.innerHTML = 'Remaining Chances : 0'
    }
    else
    {
        if(guess == num)
        {
            dec.innerHTML = "You Guessed the write number";
        }
        else if(guess > num)
        {
            dec.innerHTML = "You Guessed the larger number";
        }
        else 
        {
            dec.innerHTML = "You Guessed the smaller number";
        }
        chance = chance-1
        rem.innerHTML = `Remaining Chances : ${chance}`;
        previous.innerHTML += (guess + " ")
    }
})
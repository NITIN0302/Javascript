function calculateBMI()
{
    let a = document.getElementById('height').value 
    let b = document.getElementById('weight').value 
    let c = document.querySelector('p')
    c.replaceWith(`Your BMI is : ${b/(a*a)}`)
}
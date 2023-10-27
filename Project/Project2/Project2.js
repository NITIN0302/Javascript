let form = document.querySelector('form');

form.addEventListener('submit',(ele)=>{
    ele.preventDefault()

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    if(height === '' || height < 0 || isNaN(height))
    {
        alert('Please Enter a valid Height');
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        alert('Please Enter a valid Weight');
    }
    else
    {
        let BMI = Math.round(weight/(height*height/10000));
        let a = document.querySelector('p');
        let b = a.innerHTML;
        a.innerHTML = `${b} ${BMI}`
    }

})
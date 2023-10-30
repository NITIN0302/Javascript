let xhr = new XMLHttpRequest();
const url = "https://api.github.com/users/NITIN0302"
xhr.open('GET',url);
let data;

xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4)
    {
        data = JSON.parse(xhr.response);
        console.log(data);
    }
} 
xhr.send();
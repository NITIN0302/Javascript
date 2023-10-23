const course = {
    name:"Javascript",
    price:"999",
    time:"1 hour"
}

function printcourse({name})
{
    console.log(name);
}

function printval({price})
{
    console.log(price);
}

printcourse(course)
printval(course)

//setPrototypeOf() function is used for inheritance


let Teacher = {
    name:"Salil Modak",
    subject:"Physics"
}

let TeachingSupport = {
    isAvailable:true
}

Object.setPrototypeOf(Teacher,TeachingSupport)

console.log(Teacher.isAvailable)


// by using class

class Teachers
{
    constructor(username,status,subject)
    {
        this.username = username;
        this.status = status;
        this.sibject = subject;
    }

    printDetails()
    {
        console.log(`${this.username},${this.status},${this.subject}`)
    }
}


class Teachersup extends Teachers
{
    constructor(subject,username,status,isAvailable)
    {
        super(username,status,subject);
        this.isAvailable = isAvailable;
    }

    printDetail()
    {
        console.log(`${this.username},${this.status},${this.subject},${this.isAvailable}`)
    }
}

const t1 = new Teachersup("Maths","Shubham","Assistant",true)

t1.printDetail();
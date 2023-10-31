
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
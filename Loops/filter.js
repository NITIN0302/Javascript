let num = [1,2,3,4,5,6,7,8,9]

let mynums = num.filter((ele) => ele>4);

console.log(mynums)


let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "blue",
        "type": "minivan",
        "registration": new Date(12,1,2012),
        "capacity": 7
    }
  ]


  let mycar = cars.filter((car) =>{
    return car.type == "minivan"
  })

  console.log(mycar)
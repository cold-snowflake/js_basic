// let num = 5

// while(num<400){
//     num+=10
//     if(num>50 && num<300)continue
//     console.log(num)
// }

// do{
//     num+=14
//     console.log(num)
// }while(false)

// const myArr = [{ name: 'Tetiana', age: 26}, true, 20, 'happy']
// const person = {
//     'name': 'Tetiana',
//     'age': 26,
//     'profession': 'programmer',
//     'isMarried': false,
//     cars: {
//         volvo: 2,
//         renault: 3
//     }
// }

// for( let personKey in person){
//     const objectKeys = []
//     const objectValues = []

//     if(typeof person[personKey] === 'object'){

//         for (i in person[personKey]){
//             objectKeys.push(i)
//             objectValues.push(person[personKey[i]])
//         }
//     }else{
//         objectKeys.push(personKey)
//         objectValues.push(person[personKey])

//     }
//     console.log(objectKeys)
//     console.log(objectValues)
// }

// const ulElement = document.createElement('ul') 

// for (i in person){
//     const liElement = document.createElement('li')
//     liElement.innerHTML = `<h1>${i}:</h1> <h2>${person[i]}<h2>`
//     ulElement.appendChild(liElement)
// }
// document.body.appendChild(ulElement)

// const valueElement = Object.values(person)
// console.log(valueElement)
// const keyElement = Object.keys(person)
// console.log(keyElement)

// for (i=0; i<=5; i++){
//     for(j=0; j<=5; j++){
//         for(k=0; k<=5; k++){
//     console.log('i', i, "j=", j, 'k is', k)
// }}}
// let sum=0
// for (i=0; i<=5; i++){
//     let factorial = 1
//     for(j=1; j<=i; j++){
//         factorial *= j
//     }
//     sum += factorial
// console.log(sum)
// }
// console.log(sum)
// let cars = ['volvo', 'bmw', 'audi', 'toyota', 'mersedes', 'acura', 'mazda']
// let person = [
//     {
//      name: 'Tetiana',
//      age: 26,
//      gender: 'female',
//      salary: 6000
//     },
//     {
//      name: 'Stiven',
//      age: 35,
//      gender: 'male',
//      salary: 10_000
//     },
//     {
//     name: 'Samin',
//     age: 39,
//     gender: 'male',
//     salary: 11_000
//     },
//     {
//     name: 'Monica',
//     age: 46,
//     gender: 'female',
//     salary: 1_000
//     },
//     {
//     name: 'Lisa',
//     age: 22,
//     gender: 'female',
//     salary: 4_000
//     },
//     {
//     name: 'Bob',
//     age: 26,
//     gender: 'male',
//     salary: 100_000
//     }
// ]
// let badTotal = 0
// const personDescription = person.map(detaile =>{
//     badTotal += detaile.salary
//     let heOrShe = detaile.gender === 'male' ? 'he' : 'she'
//     return `${detaile.name} ${heOrShe} is ${detaile.age}, and ${heOrShe} has salary ${detaile.salary}`
// })
// console.log(personDescription)
// console.log(badTotal)

// const salaryList = document.createElement('ul')

// personDescription.forEach(person=>{
//     const personList = document.createElement('li')
//     personList.innerText = person
//     salaryList.appendChild(personList)
// })
// document.body.appendChild(salaryList)
// const totalySalary = person.reduce((a, person)=>{
//     return a + person.salary
// },0)
// console.log(totalySalary)

// const totalElement = document.createElement('h3')
// totalElement.innerText = `Total: ${totalySalary}`
// document.body.appendChild(totalElement)

// cars.forEach(car => {
//     console.log('car', car)
// })
// console.log(cars.sort())
// console.log(cars.reverse())
// const concatArr =   [...cars, ...person]     //cars.concat(person)
// console.log(concatArr)

// const newCars = cars.map(car=>{
//     longName = ''
//     if (car.length < 4){
//         longName = 'This is short name car: '
//     }else if (car.length < 7){
//         longName = 'This is normal name car: '
//     } else {
//         longName = 'This is long name car: '
//     }
//     return `${longName} ${car}`
// })
// newCars[2] = 'ferrari'
// console.log(cars)
// console.log(newCars)



//homework 5

let lessNumber = Number(prompt('Enter any number'))
let biggerNumber = Number(prompt(`Enter number bigger than ${lessNumber}`))

while (lessNumber > biggerNumber){
    biggerNumber = Number(prompt(`Enter number bigger than ${lessNumber}`))
}
let stepNumber = Number(prompt('Enter number bigger than 0'))

while(stepNumber < 0){
    stepNumber = Number(prompt('Enter number bigger than 0'))
}

let sumOfFactorials = 0
for(i=lessNumber; i<=biggerNumber; i+=stepNumber){
    factorial = 1
    for(j=1; j<=i; j++){
        factorial *= j
    }  
    sumOfFactorials += factorial
}
console.log(sumOfFactorials)

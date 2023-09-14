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

// let lessNumber = Number(prompt('Enter any number'))
// let biggerNumber = Number(prompt(`Enter number bigger than ${lessNumber}`))

// while (lessNumber > biggerNumber){
//     biggerNumber = Number(prompt(`Enter number bigger than ${lessNumber}`))
// }
// let stepNumber = Number(prompt('Enter number bigger than 0'))

// while(stepNumber < 0){
//     stepNumber = Number(prompt('Enter number bigger than 0'))
// }

// let sumOfFactorials = 0
// for(i=lessNumber; i<=biggerNumber; i+=stepNumber){
//     factorial = 1
//     for(j=1; j<=i; j++){
//         factorial *= j
//     }  
//     sumOfFactorials += factorial
// }
// console.log(sumOfFactorials)


// homework
// // to redo
// let grade = [];
// console.log(grade)
// function addGrade(){
  
//    grade.push(10);
//    return grade;
// }
// console.log(grade)
//   function showFirstQuestion() {
//     document.getElementById("firstQuestion").style.display = "block";
//   }
//   function showSecondQuestion(){
//     document.getElementById("secondQuestion").style.display = "block"
//   }
//   function correctFirstAnswer(){
//     showSecondQuestion();
//     addGrade();
//   }
//   function showThirdQuestion(){
//     document.getElementById("thirdQuestion").style.display = "block"
//   }
//   function correctSecondAnswer(){
//     showThirdQuestion();
//     addGrade();
//   }
//   function showFourthQuestion(){
//     document.getElementById("fourthQuestion").style.display = "block"
//   }
//   function correctThirdAnswer(){
//     showFourthQuestion();
//     addGrade();
//   }
//   function showFifthQuestion(){
//     document.getElementById("fifthQuestion").style.display = "block"
//   }
//   function correctFourthAnswer(){
//     showFifthQuestion();
//     addGrade();
//   }
//   function showResult(){
//     document.getElementById("result").style.display = "block"
//   }
//   function correctFifthAnswer(){
//     showResult();
//     addGrade();
//   }
  
//   let gradeResult = 0

//   for (let i = 0; i < grade.length; i++ ) {
//     gradeResult += i
//     console.log(gradeResult)

//   }
//   console.log(gradeResult)

//   document.getElementById("result").innerHTML = `<h1>grade <br> ${gradeResult} </h1>`
  

//homework 6
confirm(`Let's start`)
mathQuestion = Number(prompt('How much will 2+2 be?'))

geographyQuestion = prompt('The sun rises in the east?').toLocaleLowerCase()

secondMathQuestion = prompt('How much will 5 / 0 be?').toLocaleLowerCase()

secondGeographyQuestion = prompt('What color is the sky?').toLocaleLowerCase()

mainQuestion = Number(prompt('What is the correct answer to the main question of life, the universe and everything like that?'))

console.log(geographyQuestion)


let count = 0
if(mathQuestion === 4){
    count += 10
}

if(geographyQuestion === 'yes'){
    count += 10
}

if(secondMathQuestion === 'error'){
    count += 10
}

if(secondGeographyQuestion === 'blue'){
    count += 10
}

if(mainQuestion === 42){
    count += 10
}
 console.log(count)

 if(count === 0){
  confirm('No correct answer. Let`s read books')  
 } else if(count < 30){
    confirm(`${count} correct answers! Let's read more books `)
 }else if(count < 5){
    confirm(`${count} correct answers! It could have been better`)
 }else{
    confirm('PERFECT')
 }
// console.log('declareVariable', declareVariable)
// var declareVariable = 'My Var'

// console.log('declarFunction', declarFunction())

// function declarFunction(){
//     console.log ('My func')
//     return 'here'
// }
// let myExpretionVar = 'My Let'
// declarFunction()

// function mutateObj(obj){
//     let firstKey = Object.keys(obj)[0]
//     let secondKey = Object.keys(obj)[1]
//     console.log(obj[secondKey])
//     delete obj[firstKey]
//     return obj
// }

// const person = {
//     name: 'Tetian',
//     age: 26,
//     isMarried: true
// }

// function getName(obj){
//     obj.name = obj.name.toUpperCase()
//     return `Hello ${obj.name}`
// }
// console.log(getName(person))
// function getName(personName){
//     personName = personName.toUpperCase()
//     return `Hello ${personName}`
// }
// console.log(getName(person.name))

// const personB = person
// const personB = JSON.parse(JSON.stringify(person))
// personB.gender = 'femail'
// console.log(personB)

// const person = {
//     name: 'Tetian',
//     age: 26,
//     isMarried: true,
//     cars: {
//         name: 'volvo',
//         count: 2,
//         colors: 
//         ['white']
//     }
// }

// const personB = structuredClone(person)
// personB.gender = 'femail'
// console.log(personB)

// function sumAll(){
//     console.log(arguments)
//     Array.from(arguments).forEach(el => {
//         console.log(el)
//     })
// }
// const sumAll = (...args) => {
//     console.log('args', args)
// }
// sumAll(1, 2, 3, 4, 5, 6)

// function setTitle(title) {
//     document.title = title
// }
// setTitle('My title')

// function multipleTen(num){
//     return num * 10
// }

// let myNum = multipleTen(7)
// console.log('myNum', myNum)

// const person = {
//     name: 'Tetian',
//     age: 26,
//     isMarried: true,
//     cars: {
//         name: 'volvo',
//         count: 2,
//         colors: 
//         ['white']
//     }
// }

// function setName(personName = 'Bob'){
//     function getAge(){
//         return `${personName} is ${person.age}`
//     }
//     const age = getAge()
//     console.log(age)
//     const personB = structuredClone(person)
//     personB.name = personName
//     console.log(personB)
//     return personB
// }

// function getName(){
//     setName('Mark')
// }

// // getName()


// if (5 === 5){
//     var isFive = 'This is 5'
// }
// console.log(isFive)

function multiple(a){
    return function num(b){
        return a * b
    }
}
let word = multiple(10)(5)
console.log(word)
// const multFive = multiple(5)

// console.log(multFive(120))

// const voiceLetter = ['a', 'e', 'i', 'u', 'y', 'o']

// function setName(personName){
//     function setItem(personItem){
//         return `${personName} has ${voiceLetter.includes(personItem[0].toLowerCase()) ? 'an' : 'a'} ${personItem.toLowerCase()}`
//     }
//     return setItem
// }

// const firstPerson = setName(prompt('Enter your name'))

// alert(firstPerson(prompt('What do you have?')))
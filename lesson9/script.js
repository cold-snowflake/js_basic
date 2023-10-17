// const obj = {
//     name: 'Tetiana',
//     sayHi(){
//         return `Hello ${this.name}`
//     }
// }

// console.log(obj.sayHi())

// const otherObj = {
//     name: 'Steven'
// }
// const otherHi = obj.sayHi.bind(otherObj)

// console.log(otherHi())
// console.log(obj.sayHi.call(otherObj, arg1, arg2 ... ))
// console.log(obj.sayHi.apply(otherObj, [arg1, arg2...]))

// const badObj = Object.create({}, {name:{value: 'Jhon'}})
// console.log(badObj)

// const goodObj = {
//     name: 'Steven'
// }


// class Person {
//     constructor(name='Vasyl', age=22, language='C++') {
//         this.name = name,
//         this.age = age,
//         this.language = language
//         this.ArrayName = []
//     }
//     sayHello(){
//         return `Hello my name is ${this.name} and I'm ${this.age}`
//     }
//     pushName = function(name) {
//     this.ArrayName.push(name)
//         }
//     showName = () => this.ArrayName
// }


// const firstPerson  = new Person()
// console.log(firstPerson.sayHello())

// const secondPerson = new Person('Tetiana', 21)
// console.log(secondPerson.sayHello())

// const thirdPerson = new Person('Robert', 25, 'JavaScript')
// thirdPerson.pushName('Mary')
// thirdPerson.pushName('Bob')
// thirdPerson.pushName('Jack')
// console.log(thirdPerson.showName())

// class Person {
//         constructor(name='Vasyl', age=22) {
//             this.name = name,
//             this.age = age
//         }
//         sayHello(){
//             return `Hello my name is ${this.name} and I'm ${this.age}`
//         }
//     }

// class Musician extends Person {
//     constructor(name, age, instrument){
//         super(name, age)
//         this.instrument =instrument
//     }
//     sayHello(){
//         return `${super.sayHello()} and my instrument is ${this.instrument}`
//     }
// }

// class PianoMusician extends Musician {
//     constructor(name, age, instrument, exp){
//         super(name, age, instrument)
//         this.exp = exp
//     }
//     sayHello(){
//         return `${super.sayHello()} and my experience is ${this.exp}`
//     }
// }

// const pianoMan = new PianoMusician('Steven', 38, 'Piano', '4 years')
// console.log(pianoMan.sayHello())
// console.log(pianoMan.exp)
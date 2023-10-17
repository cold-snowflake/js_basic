// "use strict"

// console.log('hi', this)

// const obj = {
//     name: 'Tetiana',
//     age: 27,
//     favoriteColor: 'white',
//     salary: 100000,
//     experience: 17,
//     sayHello() {
//         return `Hello, my name is ${this.name}`
//     },
//     showThis(){
//         return this
//     },
//     showThisArrow: () => this,
//     totalSalary(mult) {
//         return this.salary * this.experience * mult
//     }
// }

// const obj2 = {
//     name: 'Steven',
//     age: 37,
//     favoriteColor: 'white',
//     salary: 100000,
//     sayHello: obj.sayHello
// }

// const person = {
//     name: "Bob",
//     salary: 2000,
//     experience: 34
// }

// console.log(`${person.name}`, obj.totalSalary.call(person, 0.5))
// console.log(`${obj.name}`, obj.totalSalary(1.5))

// console.log(`${person.name}`, obj.totalSalary.apply(person, [0.5]))

// const personTotal = obj.totalSalary.bind(person)
// console.log(personTotal(0.5))

function Person(name, age) {
    const ArrayName = []
        this.name = name
        this.age =  age
        this.greeting = function() {
            return `Hello, I'm ${this.age}`
        }
        this.pushName = function(name) {
            ArrayName.push(name)
        }
        this.showName = () => ArrayName
}
Person.prototype.profession = 'Programmer'
const girl = new Person('Tetiana', 27)
girl.education = 'KPI'
const boy = new Person('Jhon', 36)

boy.pushName("Vasyl")
boy.pushName('Ihor')
boy.pushName('Bob')
console.log(boy.showName())
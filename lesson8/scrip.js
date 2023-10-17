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

// function Person(name, age) {
//     const ArrayName = []
//         this.name = name
//         this.age =  age
//         this.greeting = function() {
//             return `Hello, I'm ${this.age}`
//         }
//         this.pushName = function(name) {
//             ArrayName.push(name)
//         }
//         this.showName = () => ArrayName
// }
// Person.prototype.profession = 'Programmer'
// const girl = new Person('Tetiana', 27)
// girl.education = 'KPI'
// const boy = new Person('Jhon', 36)

// boy.pushName("Vasyl")
// boy.pushName('Ihor')
// boy.pushName('Bob')
// console.log(boy.showName())


let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857",
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857",
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    },
    ]

const phoneNumber = []
users.forEach ((user) => Number(user.balance.replace(/,|[$_]/g, '')) > 2000 ? phoneNumber.push(user.phone) : 0)
console.log(phoneNumber)

const totalBalanceArr = []
users.forEach((user) => totalBalanceArr.push(Number(user.balance.replace(/,|[$_]/g, ''))))


let totalBalance = 0;

totalBalanceArr.forEach( num => {
  totalBalance += num;
})

console.log(totalBalance) 


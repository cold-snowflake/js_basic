const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -2, 4, 6, 8.7, 6, 23, 11 ]
// console.log(arr.every(el => el > 7))
// console.log(arr.fill('hello', 3, 5))
// console.log(arr.fill(200, 4))
// console.log(arr.filter(el => el >= 1))
// console.log(arr.findIndex(el => el === 7))
// console.log(arr.join('___'))
// const multipleSeven = arr.map(el => el*7)
// console.log(multipleSeven)
// console.log(arr.reduce((a, v) => a + v, 0))
// const ar = arr.sort(function letSort(a, b){
//     if (a > b) return 1
//     else return -1
// })
// console.log(ar)
// function getData(){
//     console.log('Data:', Date())
// }

// getData()

// function multFivr(num=1){
//     return num * 5
// }
// const arrFun = (num=1) => num * 5
// const myArrFun = num => {
//     return num * 5 }
// console.log(arrFun(5))
// console.log(multFivr(5))

// function exampleArg(...args){
//     console.log('args ', args)
//     return args.reduce((acc, val)=> acc + val, 0)
// }
// console.log(exampleArg(12, 34, 56, 76, 54, 34))

// let delEl = delete arr[4]
// console.log('delEl', delEl)

function sayHello(age){
    name = prompt('Enter your name:')
    do{
    gender = prompt('Enter your gender: ')
    console.log(`Hello my name is ${name}, I'm ${(age > 30 ? 'nature' : 'young')}
     ${(gender === 'mail' ? 'man': 'girl')}`)
    } while (!myGender)

    return `Hello ${name}, I am ${age}, I am ${age > 25 ? 'mature' : 'young'} ${myGender === 'male' ? 'man' : 'girl'}`
}
sayHello(4)

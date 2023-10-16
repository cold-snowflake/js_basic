// function getSum(num){
//     return num < 2 ? num: getSum(num - 1) + num
// }

// const summ = getSum(5)
// console.log(summ)

// function badSum(num){
//     function lessTwo(num) {
//     return num - 2
//     }
//     function lessOne(num){
//         return num -1 + lessTwo(num)
//     }
//     return num + lessOne(num)
// }

// console.log(badSum(3))

// function fibbanacci(num){
//     return num <= 2 ? 1 : fibbanacci(num - 1) + fibbanacci(num - 2)
// }
// console.log(fibbanacci(7))

// const ArrowSum = num => num * 41

// console.log(ArrowSum(2))

// const setDocumentTitel = (newTitel='') => {
//     if(newTitel.length > 3){
//     order.title = newTitel
//     return true
//     }
//     console.log('Too short length')
//     return false
// }
// const setOwner = (newOwner='') => {
//     if(
//     newOwner.toLocaleLowerCase().includes('bastard') ||
//     newOwner.length < 4 ||
//     newOwner.split() !== 2
//     ){
//         console.log('PLS enter correct name')
//         return false
//     }
//     order.owner = newOwner
//     return true
// }
// const title = 'My order'

// const order = {
//     title,
//     id: "0358746",
//     created: new Date('10/11/2019'),
//     owner: 'Tetiana',
//     setDocumentTitel,
//     setOwner
// }

// const productFive = (num, callback) => {
//     return callback(num * 5)
// }

// myCallBack = num => console.log(num)

// productFive(4, myCallBack)

//IIFE

// (function(args){
//     console.log('args', args)
//     console.log('HELLO I`M IIFE')
// })('Hello I`m args')


// recursion 

function numberToPower(num, degree){
    if (degree === 0) {
        return 1
    } else {
        return num * numberToPower(num, degree - 1)
    } 
    
}

console.log(numberToPower(4, 3))
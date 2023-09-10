let lists = document.querySelectorAll('.list')
console.log('lists', lists)


// Difference between var and let


// if (lists.length) {
//     let smth = 'let'
//     var other = 'var'  // old method
//     console.log(`There are ${lists.length} elements`)
// }

// //console.log('smth', smth)
// console.log('other', other)  

// console.log('other', other)
// var other = 'var'
// console.log('other', other)

// console.log('smth', smth)
// let smth = 'let'


//Primitive values

// let str = 'my string'
// console.log('str', str)

// let otherStr = str
// console.log('otherStr', otherStr)

// otherStr = 'bad string'
// console.log('otherStr', otherStr)

// console.log('str', str)


//Array


// let obj = {
//     name: 'Tetiana',
//     email: 'tet@gmail.com',
//     age: 25,
//     hasDaughter: true,
// }

// let nextObj = obj
// nextObj.age = 27
// console.log('obj', obj)

// const myArr = [1, 4, 5, 7, 8]

// const newArr = myArr

// console.log('myArr', myArr)
// console.log('newArr', newArr)

// newArr[2] = 15

// console.log('myArr', myArr)
// console.log('newArr', newArr)


//


// const fruit = prompt("Write some fruit")

// switch (fruit) {
//     case 'apple':
//         console.log(`This is an ${fruit}`)
//         break
//     case 'orange':
//         console.log(`This is an ${fruit}`)
//         break
//     case 'pear':
//         console.log(`This is a ${fruit}`)
//         break
//     case 'kiwi':
//         console.log(`This is a ${fruit}`)
//         break
//     case 'banana':
//     case 'cherry':
//         console.log(`This is a ${fruit}`)
//     default:
//         console.log('Unknown fruit')
// }


//


// const promptName = prompt("Enter your name")

// let nameCorrect = promptName.length > 3 ? promptName : promptName === 3 ? "Your name is extremally short" : 'Your name is incorect'
// console.log(nameCorrect)


//


// for (let i = 0; i < 10; i++) {
//     console.log('i', i)
// }

// let num = 5
// while(num < 400){
//     num += 20
//     if (num > 50 && num < 300) continue
//     console.log(`This is ${num}`)
// }

// do {
//     num += 20
//     console.log(`This is ${num}`)   
// } while (num < 400);

// const myArr = [{name: 'Tetiana'}, true, 'happy', 23, null]

// for (let i = 0; i < myArr.length; i++) {
//     console.log(i,typeof myArr[i])
// }

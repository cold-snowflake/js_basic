// lesson code
let myName = prompt('Enter your name:')

let greetings = `Hello ${myName}`
// let greetings2 = 'Hello ' + myName

console.log(greetings)

console.log('23 % 3: ', 23 % 3)

console.log('5 == \'5\'',5 == '5')
console.log('5 === \'5\'',5 === '5')

console.log("null == uderfined", null == undefined)

console.log(!!false)
console.log(!!0)
console.log(!!undefined)
console.log(!!null)
console.log(!!'')
console.log(!!NaN)

let num = 10
console.log('++num ', ++num)
console.log('num++', num++)
console.log(num)

if (myName.length >= 5 && myName.length <= 9) {
    console.log('Your name is OK!')
}else if (myName.length > 9) {
    alert('Your name is too long !!!')
}else {
    console.log('Your name is too short!!!')
}

const applePrice = 27
const orangePrice = 25
const kiwiPrice = 127

const needApples = confirm(`Do you wanna buy apples for price ${applePrice}?`)
const needOranges = confirm(`Do you wanna buy oranges for price ${orangePrice}?`)
const needKiwis = confirm(`Do you wanna buy kiwis for price ${kiwiPrice}?`)

let appleCount = 0
let orangeCount = 0
let kiwiCount = 0

if (needApples) {
    appleCount = Number(prompt('How many apples do you want to buy?'))
}

if(needOranges) {
    orangeCount = Number(prompt('How many oranges do you want to buy?'))
}
if (needKiwis) {
    kiwiCount = Number(prompt('How many kiwis do you want to buy?'))
}
const price = appleCount * applePrice + orangeCount * orangePrice + kiwiCount * kiwiPrice
console.log(`${myName} want's to buy fruits for total price: ${price} UAH`)

// homework2
 let firstNumber = Number(prompt('Enter first number'))
 let secondNumber = Number(prompt('Enter second number'))

 console.log(`${firstNumber}+${secondNumber}=${firstNumber+secondNumber}`)
 console.log(`${firstNumber}-${secondNumber}=${firstNumber-secondNumber}`)
 console.log(`${firstNumber}*${secondNumber}=${firstNumber*secondNumber}`)
 console.log(`${firstNumber}/${secondNumber}=${firstNumber/secondNumber}`)
 
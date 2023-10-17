// # 1
let number = [];

for (let i = 10; i < 21; i++) {
  number.push(i);
}

console.log(number.join(', '));


// # 2

let number2 = [];

for (let i = 10; i < 21; i++) {
  str = number2.push(i**2);
}

console.log(number2.join(', '));


// # 3

for (let i = 0; i <= 10; i++) {
    console.log(`7 * ${i} = ${7*i}`)
}


// # 4
let count = 0
for (let i = 1; i <= 15; i++) {
    count += i
}
console.log(count)


// # 5

let product = 1

for (let i = 15; i <= 35; i++){
    product *= i
}
console.log(product)



// # 6

let sum = 0

for (let i = 1; i <= 500; i++){
    sum += i
}

let medium = sum / 2;
console.log(medium)


// # 7

let sumEvenNumbers = 0

for (let i = 30; i <= 80; i ++){
   if (i % 2 == 0) {
    sumEvenNumbers += i
   }
}

console.log(sumEvenNumbers)


// # 8

let numbersMultiplesThree = [];

for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0){
      numbersMultiplesThree.push(i);
    }
}

console.log(numbersMultiplesThree.join(', '));


// # 9


let positivNumber = Number(prompt('Enter any number:')) 

for (let i = 1; i <= positivNumber; i++) {
    if(positivNumber % i == 0){
        console.log(i)
    }
}


// # 10

let arrEvenNumbers= []
for (let i = 1; i <= positivNumber; i++) {
    if(positivNumber % i == 0 && i % 2 == 0){
        arrEvenNumbers.push(i)
    }
}
console.log(arrEvenNumbers.length)

// # 11

let sumEvenNumbers2 = 0
for (let i = 1; i <= positivNumber; i++) {
    if(positivNumber % i == 0 && i % 2 == 0){
        sumEvenNumbers2 += i
    }
}
console.log(sumEvenNumbers2)


// # 12

numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 1; i <= 10; i++){
    numberArr.forEach(element => {
        console.log(`${i} * ${element} = ${i * element}`)
    });
}



// Creation of random arrays.

let lengthArr = prompt('Enter any positiv number')

let arrA = [];
for (let i = 1; i <= lengthArr; i++){
    arrA.push(Math.floor(Math.random()* 100))
}
console.log(arrA)


let arrB = arrA.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(arrB);

console.log(Math.min.apply(Math, arrB))
console.log(Math.max.apply(Math, arrB))
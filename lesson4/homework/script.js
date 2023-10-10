//homework
// to redo
let grade = 0;
// console.log(grade)
function addGrade(){
  
   grade += 10;
   return grade;
}
console.log(grade)
  function showFirstQuestion() {
    document.getElementById("firstQuestion").style.display = "block";
  }
  function showSecondQuestion(){
    document.getElementById("secondQuestion").style.display = "block"
  }
  function correctFirstAnswer(){
    showSecondQuestion();
    grade += 10;
    return grade;
  }
  function showThirdQuestion(){
    document.getElementById("thirdQuestion").style.display = "block"
  }
  function correctSecondAnswer(){
    showThirdQuestion();
    grade += 10;
    return grade;
  }
  function showFourthQuestion(){
    document.getElementById("fourthQuestion").style.display = "block"
  }
  function correctThirdAnswer(){
    showFourthQuestion();
    grade += 10;
    return grade;
  }
  function showFifthQuestion(){
    document.getElementById("fifthQuestion").style.display = "block"
  }
  function correctFourthAnswer(){
    showFifthQuestion();
    grade += 10;
    return grade;
  }
  function showResult(){
    document.getElementById("result").style.display = "block"
  }
  function correctFifthAnswer(){
    showResult();
      grade += 10;
      return grade;
  }
  console.log(grade)
  // let gradeResult = 0
  // for (let i = 0; i < grade.length; i++ ) {
  //   gradeResult += myNums[i];
  // }
  
  // let finish = grade
  // console.log(finish)

  // console.log(gradeResult)

  document.getElementById("result").innerHTML = `<h1>grade <br> ${grade} </h1>`
  

//homework 6
// confirm(`Let's start`)
// mathQuestion = Number(prompt('How much will 2+2 be?'))

// geographyQuestion = prompt('The sun rises in the east?').toLocaleLowerCase()

// secondMathQuestion = prompt('How much will 5 / 0 be?').toLocaleLowerCase()

// secondGeographyQuestion = prompt('What color is the sky?').toLocaleLowerCase()

// mainQuestion = Number(prompt('What is the correct answer to the main question of life, the universe and everything like that?'))

// console.log(geographyQuestion)


// let count = 0
// if(mathQuestion === 4){
//     count += 10
// }

// if(geographyQuestion === 'yes'){
//     count += 10
// }

// if(secondMathQuestion === 'error'){
//     count += 10
// }

// if(secondGeographyQuestion === 'blue'){
//     count += 10
// }

// if(mainQuestion === 42){
//     count += 10
// }
//  console.log(count)

//  if(count === 0){
//   confirm('No correct answer. Let`s read books')  
//  } else if(count < 30){
//     confirm(`${count} correct answers! Let's read more books `)
//  }else if(count < 5){
//     confirm(`${count} correct answers! It could have been better`)
//  }else{
//     confirm('PERFECT')
//  }
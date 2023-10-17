function main (a=2, b=3, c) {
    if(typeof(c) === 'function')
      return c(sum(a, b))
    else 
      return sum(a, b)
  }
  
function sum (a, b) { 
    return a + b; 
  }

let a = main(5, 2, function(b){
    return b * 10
})
console.log(a)


// # 2

const array = [1, 2, 3, 4, 5, 6, 7];


function removeElement(arr, num){
    const index = arr.indexOf(num)
    arr.splice(index, 1)
}
    
removeElement(array, 3);
console.log(array);

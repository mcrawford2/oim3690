function getGrade(score) {
  if (score >= 90) {
    //console.log('A');
    return 'Pass';
  } else {
    //console.log('Not A');
    return 'Some other grade';
  }
}

// let result = getGrade(95)
// console.log(`you get ${result}`)
// // undefined without let before result, because getGrade does not return anything, it only logs to the console.

// function f(x){
//     return x ** 2
// }

const square = x => x ** 2;

let result  = square(5);
console.log(result)

const add = (a, b) => a + b;

let sum = add(3, 4);
console.log(sum)


//create a simple calculator
// using an array of numbers and a function to add them together
// and return the result
// hint: use the reduce method

const numbers = [1, 2, 3, 4, 5];

function addNumbers(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(addNumbers(numbers));


function subtractNumbers(numbers) {
  return numbers.reduce((total, number) => total - number, 0);
}

function multiplyNumbers(numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}

function divideNumbers(numbers) {
    return numbers.reduce((total, number) => total / number, 1);
}



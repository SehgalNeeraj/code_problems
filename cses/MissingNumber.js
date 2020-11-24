// You are given all numbers between 1,2,…,n
// Your task is to find the missing number.
// Input
// The first input line contains an integer n
// n
// The second line contains n−1
// Each number is distinct and between 1
// 1 and n (inclusive).

// Output
// Print the missing number.

// Constraints
// 2≤n≤2⋅105

// Example

// Input:
// 5
// 2 3 1 5

// Output:
// 4
/////////////////////////////////////////////////////////////////
// Algo
// To find missing number -
//      1. Find sum of n numbers
//      2. Find sum of input numbers
//      3. Subtract to find missing number
/////////////////////////////////////////////////////////////////
function calculateSum(input) {
  let num = parseInt(input);
  let sum = (num * (num + 1)) / 2;

  return sum;
}

function parseMultipleArguments(input) {
  // input is a string from console, convert to array
  let numbers = input.split(" ");
  return numbers;
}

function missingNumber(multiInput) {
  let numbers = parseMultipleArguments(multiInput);
  let sum = 0;
  numbers.forEach((element) => {
    sum += parseInt(element);
  });

  return sum;
}

const r1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// MAIN
r1.question("", (input) => {
  r1.question("", (multiInput) => {
    let result = calculateSum(input) - missingNumber(multiInput);
    console.log(result);
    r1.close();
  });
});

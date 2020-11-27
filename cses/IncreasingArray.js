// Increasing Array
// You are given an array of n integers. You want to modify the array so
// that it is increasing, i.e., every element is at least as large as
// the previous element.
// On each turn, you may increase the value of any element by one.
// What is the minimum number of turns required ?
//
// Input
// The first input line contains an integer n: the size of the array.
// Then, the second line contains n integers x1,x2,…,xn: the contents of the array.
//
// Output
// Print the minimum number of turns.
//
// Constraints
// 1≤n≤2⋅105
// 1≤xi≤109
// Example
// Input:
// 5
// 3 2 5 1 7
// Output:
// 5

const { count, assert } = require("console");

//////////////////////////////////////////////////////////////////////
function increasingArray(size, arr) {
  let input = arr.split(" ").map(Number); //convert array contents to int

  let result = 0;
  assert(parseInt(size) === input.length);
  for (let i = 0; i < input.length; ++i) {
    if (input[i + 1] < input[i]) {
      result += input[i] - input[i + 1];
      input[i + 1] = input[i];
    }
  }

  return result;
}

//////////////////////////////////////////////////////////////////////
// MAIN
//////////////////////////////////////////////////////////////////////
const r1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("", (size) => {
  r1.question("", (arr) => {
    let result = increasingArray(size, arr);
    console.log(result);
    r1.close();
  });
});

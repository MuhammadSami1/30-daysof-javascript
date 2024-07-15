/*
Day 2 : Operators 
Task/Activities:

Activity 1 : Arithmetic Operators

Task 1 : Write a program to add two numbers and log the result to the console.
*/
const addNumbers = (x, y) => {
  console.log(x + y);
};
addNumbers(1, 2);

// Task 2 : Write a program to subtract two numbers and log the result to the console.

const subtractNumbers = (x, y) => {
  console.log(x - y);
};
subtractNumbers(1, 2);

// Task 3 : Write a program to multiply two numbers and log the result to the console.

const multiplyNumbers = (x, y) => {
  console.log(x * y);
};
multiplyNumbers(2, 2);

// Task 4 : Write a program to divide two numbers and log the result to the console.

const divideNumbers = (x, y) => {
  console.log(x / y);
};
divideNumbers(5, 2);

// Task 5 : Write a number to find the remainder when one number is divided by another and log the result to console.

const remainder = (num1, num2) => {
  let result = num1 % num2;

  console.log(result);
};

remainder(3, 2);

/*Activity 2 : Assignment Operators

Task 6 : Use the += Operator to add a number to a variable and log the result to the /console. */

let number = 1;

number += 5;
console.log(number);

/*Task 7 : Use the -= Operator to subtract a number to a variable and log the result to the console.*/

let number1 = 7;

number1 -= 3;
console.log(number1);

/*Activity 3 : Comparison Operators

Task 8: Write a program to compare two numbers using > and < and log the result to the console.*/

let fristNumber = 5;
let secondNumber = 7;
console.log(fristNumber < secondNumber); // ture;
console.log(fristNumber > secondNumber); // false;

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let fristNumber1 = 12;
let secondNumber1 = 13;
console.log(fristNumber1 <= secondNumber1); // true;
console.log(fristNumber1 >= secondNumber1); // false;

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let fristNumber2 = 1;
let secondNumber2 = "1";

console.log(fristNumber2 == secondNumber2); // true
console.log(fristNumber2 === secondNumber2); /// false

/*Activity : Logical Operators

Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. */

let fristNumber3 = 7;
let secondNumber3 = 8;
if (fristNumber3 === 7 && secondNumber3 === 7) {
  console.log("Success");
} else {
  console.log("error");
}
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let fristNumber4 = 7;
let secondNumber4 = 8;
if (fristNumber4 === 7 || secondNumber4 === 7) {
  console.log("Success");
} else {
  console.log("error");
}

// Task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console.

let fristNumber5 = 7;
let secondNumber5 = 8;
if (((fristNumber5 === 7) != secondNumber5) === 7) {
  console.log("Success");
} else {
  console.log("error");
}

/*Activity 5 : Ternary operator

Task 14: Write a program that use the ternary operator to check if a number is positive or negative and log the result to the console.*/

let fristNumber6 = -1;
let secondNumber6 = 1;

console.log(fristNumber6 === -1 ? "Success" : "Error");
console.log(secondNumber6 === -1 ? "Success" : "Error");

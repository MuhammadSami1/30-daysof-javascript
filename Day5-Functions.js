/*
Day 5 : Function

Tasks / Activities 

Activity 1: Function Declaration

Task 1 : Write a function to check if a number is even or odd and log the result to the console. */

const checkNumber = (number) => {
  if (number % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }
};
checkNumber(2);

// Task 2: Write a function to calculate the square of a number and return the result to the console.

const square = (num) => {
  const result = num * 2;
  console.log(result);
};
square(8);
// Activity 2 : Function Expression

// Task 3: Write a function Expression to find the maximum of two numbers and log the result to the console.

const expression = function (numberOne, numbertwo) {
  const answer = Math.max(numberOne, numbertwo);
  console.log(answer);
};

expression(10, 14);

// Task 4: Write a function Expression to concatenate two strings and return the result.

const concatenate = function () {
  const string1 = "Muhammad";
  const string2 = "Sami";
  const rightanwser = string1.concat(" ", string2);
  console.log(rightanwser);
};

concatenate();

// Activity 3: Arrow Function

// Task 5: Write a arrrow function to calculate the sum of two numbers and return the result.

const arrow = (num1, num2) => {
  const sum = num1 + num2;
  console.log(sum);
};
arrow(10, 2);
// Task 6: Wrirte a arrow function to check if a string contains specfic character and return a Boolean.

const checkString = (char) => {
  const string = "Hello World";
  if (string.includes(char)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkString("W");

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and return their product. provide a default value for the second parameter.

const product = (number1, number2 = 1) => {
  const result = number1 * number2;
  console.log(result);
};
product(5, 2);
product(2);

// Task 8: Write a function that takes a person name and age and return a greeting message. Provide a value default for the age.

const greeting = (name, age = 23) => {
  if (name && age) {
    console.log("Greeting");
  } else {
    console.log("Error");
  }
};

greeting("sami");

/*Activity 5: Higher Order Functions

Task 9: Write a higher-order function that takes a function and a number , and calls the that many time. */
const higherOrder = () => {
  console.log("hello");
};

const higherOrder1 = (first, second) => {
  for (let i = 0; i < second; i++) {
    first();
  }
};

higherOrder1(higherOrder, 24);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const applyFunctions = (func1, func2, value) => {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
};

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

const result = applyFunctions(addTwo, multiplyByThree, 5);
console.log(result);

// Day 8: ES6 Features

// Task / Activities :

// Activity 1: Template literals

// Task 1 : Use Template literals to create a string that inculdes varible , for a person name and age, and log the string to the console.

const name = "Sami";
const age = 23;
console.log(`Name is ${name} and age is ${age}`);

// Task 2 : Create a multi-line string using template literals and log it to the console.
console.log(
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, est. Minima aperiam cupiditate aspernatur deserunt mollitia exercitationem non similique hic ipsa ut laudantium quisquam iste nostrum rerum, magnam architecto saepe.`
);

// Activity 2: Destructuring
// Task 3: Use array Destructuring to extract the first and second elements from array of numbers and log them to the console.

const array = ["leo", "honey", "book"];

const [first, second] = array;
console.log(first, second);

// Task 4: Use object Destructuring to extract the title and author from a book object and log them to the console.

const obj = {
  title: "atomic habits",
  author: "Muhammad Sami",
};

const { title, author } = obj;
console.log(`${title} ${author}`);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additonal elements, and log the new array to the console.

const oldArray = [1, 2, 4, 5, 6];
const newArray = [...oldArray, 7, 8, 9];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments , sum them , and return the result.

const rest = (...values) => {
  return values.reduce((first, second) => first + second);
};
console.log(rest(2, 5));

// Activity 4: Default parameters
// Task 7: Write a function that takes two parameters and return their products, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

const defaultParameters = (number1, number2 = 1) => {
  return number1 * number2;
};
console.log(defaultParameters(2, 2));
console.log(defaultParameters(5));

// Activity 5: Enhanced object literals
// Task 8: Use Enhaced object literals to create an object with methods and properties, and log the result to the console.

const id = 1;
const call = "Ali";
const object = {
  id,
  call,
  method1: function () {
    console.log(this.id, this.call);
  },
};
object.method1();

// Task 9: Create an object with computed property names based on varibles and log the object to the console.
const propName1 = "firstName";
const propName2 = "lastName";

const object1 = {
  [propName1]: "John",
  [propName2]: "Doe",
};

console.log(object1);

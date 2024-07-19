/*
Day 6 : Arrays

Tasks/ Activities

Activity 1 : Array Creation and Access

Task 1 : Create an Array of numbers from 1 to 5 and log the array to the console. */

const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2 : Access the first and last elements of the arrray and log them to the console.

const arr1 = ["Ali", "Sami", "Ahmed"];
const firstArr = arr1[0];
const lastArr = arr1[arr1.length - 1];
console.log(`${firstArr} + ${lastArr}`);

// Activity 2: Array Methods

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
// Task 4: Use the pop method to remove the last element from the array and log the updated array.
// Task 5: Use the shift method to remove the first element from the array and log the updated array.
// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

const array = ["Hello", "Leo", "World"];
array.push("5");
console.log(array);

array.pop(5);
console.log(array);

array.shift("Hello");
console.log(array);

array.unshift(1);
console.log(array);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
// Task 8: Use the filter method to create a new array with only even numbers and log the log.
// Task 9: Use the reduce method to calculate th sum of all numbers in the array and log the result.

const doubledArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const newarray1 = doubledArray.map((index) => index * 2);
console.log(newarray1);

const newarray2 = doubledArray.filter((num) => num % 2 === 0);
console.log(newarray2);

const newarray3 = doubledArray.reduce((firstValue, value) => {
  return firstValue + value;
});
console.log(newarray3);

// Activit 4: Array iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.

const numbers1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  console.log(`Element at index ${index} is ${num}`);
});


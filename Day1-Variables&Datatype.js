/*Day1 - Variables and Data Tyeps 
Tasks/Activities :

Activity 1: Variable Declaration 

Task 1: Declare a variable using var, assign it a number, and log the value to the console.
*/

var number = 6;
console.log(number);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let string = "Hello World";
console.log(string);

/*Activity 2: Constant Declaration 

Task 3: Declare a variable using const, assign it to boolean value, and log the value to the console.
*/

const boolean = true;
console.log(boolean);

/*Activity 3: Data Types

Task 4: Creates variables of different data types (number, string, boolean, object, array) and log each variables type using the typeof operator.
*/

let num = 7;
let str = "Sami";
let bool = false;
let arr = [1, 2, 4, "MuhammadSami"];
let obj = {
  id: 1,
  name: "object",
};

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);

/*Activity 4: Reassigning Variables

Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and  log both values to the console.
*/

let assign = 20;
console.log(assign);
assign = 30;
console.log(assign);

/*Activity 5: Understanding const 

Task 6: Try reassigning a variable declared with const and observe the error.
*/
const value = 50;
// value = 60;
console.log(value);

/*Feature Request

Variable Type console Log: Write a script that declares Variable of different data types and logs both the value and type of each Variable to the console. 
*/

const func = (data) => {
  if (typeof data == "number") {
    console.log(`Value is ${data} and data type is ${typeof data} `);
  } else if (typeof data == "string") {
    console.log(`Value is ${data} and data type is ${typeof data}`);
  } else if (typeof data == "boolean") {
    console.log(`Value is ${data} and data type is ${typeof data}`);
  } else if (typeof data == "object") {
    console.log(
      `Value is ${JSON.stringify(data)} and data type is ${typeof data}`
    );
  } else if (typeof data == "undefined") {
    console.log(`Value is ${data} and data type is ${typeof data}`);
  } else {
    console.log("Wrong data type");
  }
};

func(2);
func("MuhammadSami");
func(true);
func([1, 2, 2]);
func({ id: 2, class: "12" });
func();

/*
Reassignment Demo: Create a Script that demonstrates the difference in behavior between let and const when it comes to reassignment. 
*/

let fun = 100;
console.log(fun);

fun = 200;
console.log(fun);

const variable = "Constant";
console.log(variable);

try {
  variable = "Const";
} catch (error) {
  console.log(`Error when reassigning const ${error.message}`);
}

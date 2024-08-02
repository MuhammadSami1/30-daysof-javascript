import sortArray, { addNumbers, obj, maxNumber } from "./Day13-Modules.js";
import * as module from "./Day13-Modules.js"

// Task 1
console.log(addNumbers(100, 100));


// Task 2
const object = obj;
object.method1();
console.log(object.name);

// Task 3
const largestNumber = maxNumber(1, 2, 3, 15, 10);
console.log(largestNumber);

// Task 4
const sortFunction = sortArray();
console.log(sortFunction);

// Task 5
const fun1 = module.multiFunctions();

console.log(fun1.multiple(2, 2));
console.log(fun1.tree());
/*Day 4: Loops
Tasks/ Activities:

Activity 1: For Loop

Task 1: Write a program to print numbers from 1 to 10 using a for loop.*/

let num = 1;
for (i = 1; i <= 10; i++) {
  console.log(num++);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

let num1 = 5;
for (i = 1; i <= 10; i++) {
  const result = num1 * i;
  console.log(`${num1} * ${i} = ${result}`);
}

/*Activity 2: While loop

Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop. */
let sum = 0;
let j = 1;
while (j <= 10) {
  sum += j;
  j++;
  console.log(sum);
}

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let k = 10;
while (k >= 1) {
  console.log(k);
  k--;
}

/*Activity 3: Do-while loop 

Task 5: Write a program to print numbers from 1 to 5 using do-while loop.*/

let p = 1;
do {
  console.log(p);
  p++;
} while (p <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do-while loop.
console.log("Factorial");
const factorial = (number) => {
  let f = 1;
  let result1 = 1;
  do {
    result1 = result1 * f;
    f++;
  } while (f <= number);
  console.log(result1);
};
factorial(4);

/*Activity 4: Nested loops

Task 7: Write a program to print a pattern using a nested loop. 
*
* *
* * *
* * * *
* * * * *
*/
let b = 1;
for (a = 1; a <= 5; a++) {
  let line = "";
  for (b = 1; b <= a; b++) {
    line += "* ";
  }
  console.log(line);
}

/*Activity 5: Loop control Statements 
Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using continue statment.*/

for (let s = 1; s <= 10; s++) {
  if (s == 5) continue;
  console.log(s);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let w = 1; w <= 10; w++) {
  if (w == 7) break;
  console.log(w);
}

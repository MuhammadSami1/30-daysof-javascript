/*Day3 : Control Structures
Tasks/Activities:

Activity 1 : if-else Statement 

Task 1: Write a program to check if a number is positive, negative or zero, and log the result to the console.*/

const checkNumber = (data) => {
  if (data > "0") {
    console.log("Number is Positive");
  } else if (data < "0") {
    console.log("Number is Negative");
  } else if (data == "0") {
    console.log("Number is Zero");
  } else {
    console.log("error");
  }
};
checkNumber(10);
checkNumber(-1);
checkNumber(0);

/*Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.*/

const checkNumber1 = (person) => {
  if (person >= 18) {
    console.log("You can vote.");
  } else if (person < 18) {
    console.log("You cannot vote.");
  } else {
    console.log(error);
  }
};
checkNumber1(18);
checkNumber1(11);

/*Activity 2: Nested if-else Statements
Task 3: Write a program to find the largest of three numbers using nested if- else statement.*/

const checkNumber2 = (num1, num2, num3) => {
  if (num1 >= num2) {
    if (num2 >= num3) {
      console.log(`Largest number is ${num3}`);
    } else {
      console.log("Number 3 is less than Number 2");
    }
  } else {
    console.log("Number 1 is less than Number 2");
  }
};
checkNumber2(3, 2, 1);

/*Activity 3: Switch Case 

Task 4: Write a program that uses a switch case to determined the day of the week based on number (1-7) and log the result to the console.*/

const checkNumber3 = (day) => {
  switch (day) {
    case 0:
      day == "0";
      console.log("Day is Sunday");
      break;
    case 1:
      day == "1";
      console.log("Day is Monday");
      break;
    case 2:
      day == "2";
      console.log("Day is Tuesday");
      break;
    case 3:
      day == "3";
      console.log("Day is Wednesday");
      break;
    case 4:
      day == "4";
      console.log("Day is Thursday");
      break;
    case 5:
      day == "5";
      console.log("Day is Friday");
      break;
    default:
      day == "6";
      console.log("Day is Saturday");
      break;
  }
};
checkNumber3(0);
checkNumber3(1);
checkNumber3(2);
checkNumber3(3);
checkNumber3(4);
checkNumber3(5);
checkNumber3(6);

// Task 5: Write a program that uses switch case to assigin a grade ('A','B','C','D','F') based on a score and log the result to the console.

const checkNumber4 = (grade) => {
  switch (grade) {
    case "A":
      console.log("Your Grade is A");
      break;
    case "B":
      console.log("Your Grade is B");
      break;
    case "C":
      console.log("Your Grade is C");
      break;
    case "D":
      console.log("Your Grade is D");
      break;
    default:
      grade == "F";
      console.log("Your Grade is F");
      break;
  }
};
checkNumber4("A");
checkNumber4("B");
checkNumber4("C");
checkNumber4("D");
checkNumber4("F");

/*Activity 4: Conditional (Ternary) Operator

Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.*/

const checkNumber5 = (number1) => {
  const result = number1 % 2 === 0 ? "Number is Even" : "Number is odd";
  console.log(result);
};

checkNumber5(2);
checkNumber5(3);

/*Activity 5: Combining Conditions

Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4 , but not 100 unless also divide by 400) and log the result to the console.*/

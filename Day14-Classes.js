// Day 14: Classes
// Task/Activities :

// Activity 1: Class Definition
// Task 1 : Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    name = "sami";
    age = 23;
    method() {
        return `Hello ${name} your age is ${age}`;
    }
    updataMethod() {
        return this.age = 24;
    }
}
const person1 = new Person;
console.log(person1);



// Task 2: Add a method to the person class that updates the age property and logs the updated age.

console.log(person1.updataMethod());

// Activity 2: Class Inheritance
// Task 3 : Define a class student that extends the person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.




// Task 4 : Override the greeting method in the student class to include the student ID in the message. Log the overridden greeting message.

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.


// Task 6: Add a static method to the person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

// Activity 4: Getters and setters
// Task 7: Add a getter method to the person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.


// Task 8: Add a setter method to the person class to update the name properties(firstName and lastName). Update the name using the setter and log the updated full name.


// Activities 5: Private Fields
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.


// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balacne after each operation. 



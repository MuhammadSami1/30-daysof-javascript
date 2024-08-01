// Day 13: Modules
// Task/Activities:

// Activity 1 : Creating and Exporting Modules
// Task 1 : Create a module that exports a function to add two numbers. Imort and use this module in another script.

export function addNumbers(num1, num2) {
    return num1 + num2;
}

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

export const obj = {
    name: 'Sami',
    age: 23,
    method1() {
        console.log(`Name is ${this.name} and age is ${this.age}`);
    }
}

// Activity 2: Named and Default Exports
// Task 3 : Create a module that exports multiple functions using named exports. Import and use these functions in another script.

export function maxNumber(...values) {
    let max = 0;
    for (let i = 0; i <= values.length; i++) {
        if (max < values[i]) {
            max = values[i];
        }
    }
    return max;
}


// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.




// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module(lodash) using npm. Import and use a function from this module in a script.
import _ from "lodash";

var array = [1, 2, 3];

console.log(_.reverse(array));




// Task 7: Install a third-party module(axios) using npm. Import and use this module to make a network request in a script.



// Activity 5: Module Bundling
// Task 8: Use a module bundler like Webpack or parcel to bundle multiple Javascript files into a single file. Write a script to demonstrate the bundling process.


// npm install --save-dev webpack webpack-cli
/*
const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    mode: 'development' // Change to 'production' for optimized build
};
*/
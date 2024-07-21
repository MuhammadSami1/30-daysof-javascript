// Day 7 : objects

// Task/Activities :

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title , author and year and log the result to the console.

// Task 2 : Access and log the title and author properties of the book object.

const object = {
  title: "Atomic habits",
  author: "Muhammad Sami",
  year: 2024,

  method1: function () {
    return this.title + " " + this.author;
  },
  method2: function (year) {
    this.year = year;
  },
};
console.log(object);

const Title = object.title;
const Author = object.author;
console.log(`Title is ${Title} and Author name is ${Author}`);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book title and author and log the result of calling this method.

console.log(object.method1());

// Task 4: Add a method to the book objects that takes a parameter(year) and updates the book  year property, then log the updated object.

object.method2(2021);
console.log(object);

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "Ali",
  books: [
    {
      book: "Rich Dad Poor Dad",
      year: 2023,
      method3: function () {
        return this.book + " " + this.year;
      },
    },
    {
      book: "Javascript",
      year: 2018,
      method3: function () {
        return this.book + " " + this.year;
      },
    },
    {
      book: "C++",
      year: 2001,
      method3: function () {
        return this.book + " " + this.year;
      },
    },
  ],
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all books in the library.

console.log(library.name);
library.books.map((item) => {
  console.log(item);
});

// Activity 4: The this keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book title and year, and log the result of calling this method.

const booksdetails = library.books.map((item) => {
  return item.method3();
});
console.log(booksdetails);
// console.log(library.books[2].year);

// Activity 5: Object iteration
// Task 8: Use a for in loop to iterate over the properites of the book object and log each property and it value.

library.books.forEach((book, index) => {
  console.log(`Book ${index + 1}:`);
  for (let property in book) {
    if (book.hasOwnProperty(property)) {
      console.log(`${property}: ${book[property]}`);
    }
  }
  console.log("");
});

// Task 9 : Use object Keys and Object values methods to log all the keys and values of the book object.
library.books.forEach((book, index) => {
  console.log(`Book ${index + 1}:`);

  const keys = Object.keys(book);
  console.log("Keys:", keys);

  const values = Object.values(book);
  console.log("Values:", values);

  console.log("");
});

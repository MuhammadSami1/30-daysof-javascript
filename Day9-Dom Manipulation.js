// Day 9: Dom - Manipulation
// Task / Activities:

// Activity 1 : Selection and Manipulation Elememts

// Task 1 : Select an HTML Element by its id and change its text content.

let text = document.getElementById('text').textContent = 'Muhammad Sami';


// Task 2 : Select an HTML Element by its class and change its background color.
let change = document.getElementsByClassName('changeColor');
for (i = 0; i < change.length; i++) {
    change[i].style.background = "red";
}
// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and appended to the body.

const newDiv = document.createElement("div");
newDiv.innerHTML = "created a new div";
const parent = document.querySelector("body");
parent.appendChild(newDiv);
// Task 4: Create a new li element and add it to the existing ul list.
const ul = document.getElementById("ul");
const li = document.createElement("li");
li.textContent = "Monogo";
ul.appendChild(li);

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the Dom.

const remove = document.getElementById("remove");
remove.remove();

// Task 6: Remove the last child of a specfic HTML element.

const mylist = document.getElementById("mylist");
mylist.removeChild(mylist.firstElementChild);

// Activity 4: Modifying Attributes and classes
// Task 7: Select an HTML element and change one of its attributes.(src of an img tag)

const image = document.getElementById("image");
image.setAttribute("src", "https://www.w3schools.com/w3images/lights.jpg");

// Task 8: Add and remove css class to/from an HTML element.

const removeCss = document.getElementById("removeCss");
removeCss.classList.remove("css");

const addCss = document.getElementById("addCss");
addCss.classList.add("css");

// Activity 5: Event Handling

// Task 9 : Add a click listener to a button that changes the text content of a paragraph.
const clickListener = document.getElementById("clickListener");
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener('click', function () {
    clickListener.textContent = "text Content of paragraph changed"
})


// Task 10: Add a mouseover event listener to an element that changes its border color.

const mouseOver = document.getElementById("mouseOver");


mouseOver.addEventListener("mouseover", function () {
    mouseOver.style.borderColor = "black";
})
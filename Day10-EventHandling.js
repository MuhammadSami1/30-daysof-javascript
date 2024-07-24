// Day 10 : Event Handling
// Task / Activities

// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const paragraph = document.getElementById("paragraph");
const btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    paragraph.textContent = "Text has been changed";
})

// Task 2: Add a Double click Event listener to an image that toggles its visibility.
const image = document.getElementById("image");
image.addEventListener("dblclick", function () {

    if (image.style.display == "block") {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
})


// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that change its background color.

const changedColor = document.getElementById("changedColor");
changedColor.addEventListener('mouseover', function () {
    changedColor.style.backgroundColor = 'red';

})

// Task 4: Add a mouseover event listener to an element that resets its background color.

const removeBackGround = document.getElementById("removeBackGround");
removeBackGround.style.backgroundColor = "yellow";
removeBackGround.addEventListener('mouseover', function () {
    removeBackGround.style.backgroundColor = "";
})

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const text = document.getElementById("text");
text.addEventListener('keydown', function (e) {
    console.log(e.key);
})

// Task 6: Add a keyup Event listener to an input field that displays the current value in a paragraph.

const addText = document.getElementById("addText");
const text1 = document.getElementById('text1');
text1.addEventListener('keyup', function () {
    addText.textContent = text1.value;
})

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that pervents the default submission and logs the form data to the console.
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const form = document.getElementById("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(input1.value);
    console.log(input2.value);
})


// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const select = document.getElementById('select');
const dropDownValue = document.getElementById('dropDownValue');
select.addEventListener('change', function () {
    dropDownValue.textContent = select.value;
})


// Activity 5: Event Delegation
// Task 9: Add a click Event listener to a list that logs the text content of a clicked list item using event Delegation.
const ul = document.getElementById('ul');
for (i = 0; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = `item ${i}`;
    ul.appendChild(li);

}
ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements. 
const parent = document.getElementById('parent');
const addChild = document.getElementById('addChild');
let childCounter = 0;


function addChildElement() {
    const newChild = document.createElement('div');
    newChild.textContent = 'Child ' + (++childCounter);
    newChild.className = 'child';
    parent.appendChild(newChild);
}


addChild.addEventListener('click', addChildElement);


parent.addEventListener('click', function (event) {

    if (event.target && event.target.classList.contains('child')) {
        console.log('Clicked:', event.target.textContent);
    }
});
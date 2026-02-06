# JavaScript Notes


## JS-Day-1

- Java script is synchronous and almost everything in it is an object. It's an object-oriented language

- Callback function - In callback function, we can pass a function as an argument in another function and call it simultaneously

```js
function sample(callback){
    console.log("sample")
    callback()
}
```

- In script.js, sample(demo) is an example of callback function

## JS-Day-2

- Async Func: we can move to another task before the previous one finishes its execution

- Sync Func: Code is read and executed line by line

- For loop: To repeat a function till the condition is satisfied

```js
for (init; condition; reintialize) {
    <code> 
}
```

- Nested For Loop: To use loop inside another loop

```js
for (init; condition; reintialize) {
    for (init; condition; reintialize) {
        <code> 
    }
    <code>
}
```

- Array Map: Map the array and make it accessible

```js
let arr = [values]

let result = arr.map(x => x)

console.log(result)
```


- Array Filter: Filter an array acording to a condition

```js
let scores = [values]
let highScores = 
scores.filter(score => score >= condition)
console.log(highScores)
```

- Reduce Array: Remove something from array

```js
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce((acc, current) => console.log(current))
```

## JS-Day-3

- Array Push: Add something into the array

```js
let arr = ['data']
let newLength = arr.push('new entry')

console.log(newLength)
console.log(arr)
```

- Pop Array: Rmeove an element from an array

```js
let arr = ['data']
let newLength = arr.pop('entry')

console.log(newLength)
console.log(arr)
```

- Shift Array: Removes the first element from the array and returns that element

```js
let arr = ['data']
let newLength = arr.shift('entry')

console.log(newLength)
console.log(arr)
```

- Unshift Array: Adds one or more elements to the beginning of the array and returns the new length

```js
let arr = ['data']
let newLength = arr.unshift('new entry')

console.log(newLength)
console.log(arr)
```

## JS-Day-4

- Slice Array: Returns a new array containing elements from the original array within the specified range (from start to end, not inclusive)

```js
 let arr = [data]
 let sliced = arr.slice(start, end)

 console.log(sliced)
```

- Some Array Method: Checks if at least one element in the array satisfies the condition specified in the callback function. Returns true if any element meets the condition. otherwise, false

```js
let arr = [data]
let meetsCondition = arr.some(conditon) // x => x % 2 === 0

console.log(meetsCondition)
```

- Every Array Method: Checks if all elements in the array satisfy the condition specified in the callback function. Returns true if all elements meet the condition. otherwise, false

```js
let arr = [data];
let meetsCondition = arr.every(condition); // x => x % 2 === 0

console.log(meetsCondition)
```

- Concat Array Method: Combines the current array with another array(s) and returns a new concatenated array

```js
let arr1 = [data];
let arr2 = [data];

let combined = arr1.concat(arr2);

console.log(combined)
```

- Splice Array Method: Changes the contents of an array by removing or replacing existing elements and/or adding new elements

```js
let arr = [data];
arr.splice(start, delete count, item1, item2, ...);

console.log(arr)
```

- Reverse Array: Reverses the order of elements in the array

```js
let arr = [data];
arr.reverse()

console.log(arr)
```

- Includes Array Method: Determines whether an array includes a certain value among its entries, returning true or false as appropriate

```js
let arr = [data]

console.log(arr.includes(element))
```

## JS-Day-5rft67


- Slice String Method: The slice() method extracts a section of a string and returns it as a new string. It takes two arguments: start (inclusive) and end (exclusive) positions

```js
let str = 'string'

let sliced = str.slice(start, end)
```

- substring() String Method: The substring() method is similar to slice() but does not accept negative indices. It also extracts a section of a string based on start (inclusive) and end (exclusive)

```js
let str = 'string'

let sub = str.substring(start, end)
```

- indexOf() String Method: The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring

```js
const paragraph = 'paragraph'
const indexOfFirst = paragraph.indexOf("word")

console.log(indexOfFirst)
```

- substr() String Method: The substr() method extracts a specified number of characters from a string. It takes start (inclusive) and the length of the substring

```js
let str = 'string'

let sub = str.substr(start, end)
```

- Replace String Method: The replace() method replaces the first occurrence of a specified substring with another substring. It takes search string and the replacement string as arguments

```js
let sentence = 'sentence'

let newSentence = sentence.replace("old word", "new word")
```

- replaceAll() String Method: The replaceAll() method replaces all occurrences of a specified substring with another substring. It takes search string and the replacement string as arguments

```js
let sentence = 'sentence'

let newSentence = sentence.replace("old word", "new word")
```

- Case String Methods: toUpperCase() and toLowerCase() are used to convert a string to all uppercase or all lowercase characters, respectively

```js
let stri = "string"
let upperCase = str.toUpperCase()
let lowerCase = str.toLowerCase()
```

- concat() String Method: The concat() method is used to join two or more strings. It combines the original string with other strings and returns a new string

```js
let str1 = 'string'
let str2 = 'string'

let str = str1.concat('', str2)
```

- Trim String Method: The trim() method removes whitespace (spaces, tabs, line breaks) from both ends of a string

```js
let sentence = "   sentence   "
let trimmed = sentence.trim()
```

- charAt() and charCodeAt() String Method: charAt(index) returns the character at the specified index in a string. charCodeAt(index) returns the Unicode value of the character at the specified index

```js
let word = "word"
let char = word.charAt(1)
let charCode = word.charCodeAt(1)
```

- Split String Method: The split() method splits a string into an array of substrings based on a specified separator.
It’s useful for breaking a string into parts

```js
let sentence = "sentence"
let words = sentence.split(character to split)
```

- Spread Operator - It helps to destructure the array and string and gives access to each element

```js

let arr = [data]
let arr2 = [data]

let newArr = [...arr, ...arr2]
```

## JS-Day-6

- Return - It will return only one time. By default it acts like break statement and once the code hits the retrun statement, it will terminate the loop or move out of the block

**TYPES OF FUNCTION**

- Regular Function - Regular functions are the most common type of functions in JavaScript. They are defined using the function keyword

Syntax:

```js
function functionName(parameters) {
    // function body
}
```

Example:

```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
```

- Arrow Function -  Arrow functions provide a shorter syntax for writing functions. They do not have their own this context; instead, they inherit this from the parent scope

Syntax:

```js
const functionName = (parameters) => {
    // function body
};
```

Example:

```js
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Bob")); // Hello, Bob!
```

Difference between Regular Function and Arrow Function:

i. Syntax: Arrow functions have a more concise syntax

ii. this Binding: Arrow functions do not have their own this; they inherit this from the parent scope, whereas regular functions have their own this

- Anonymous Function - Anonymous functions are functions without a name. They are often used as arguments to other functions or assigned to variables

Syntax:

```js
function(parameter) {
    // function body
}
```

Example:

```js
setTimeout(function() {
    console.log("Hello, world!");
}, 1000);
```

- Function Expression - Function expressions involve defining a function and assigning it to a variable. They can be named or anonymous

Syntax:

```js
const functionName = function(parameters) {
    // function body
};
```

Example:

```js
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Charlie")); // Hello, Charlie!
```

- Callback Function - A callback function is a function passed as an argument to another function and is executed after some operation has been completed

Syntax:

```js
function callback() {
    // function body
}

function mainFunction(callback) {
    // execute callback
    callback();
}
```

Example:

```js
function logMessage() {
    console.log("This is a callback function.");
}

function executeCallback(callback) {
    callback();
}

executeCallback(logMessage);
```

- First-class Function - JavaScript treats functions as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions

Syntax:

```js
function firstClassFunction(variable) {
    // function body
}

const newFunctionName = firstClassFunction;
console.log(newFunctionName('text'))
```

Example:

```js
function greet(name) {
    return `Hello, ${name}!`;
}

const sayHello = greet;
console.log(sayHello("Dave")); // Hello, Dave!
```

- Higher-order Function - A higher-order function is a function that accepts other functions as arguments or returns a function

Syntax:

```js
function higherOrderFunction(callback) {
    // function body
}
```

Example:

```js
function higherOrderFunction(callback) {
    callback();
}

function logMessage() {
    console.log("This is a higher-order function.");
}

higherOrderFunction(logMessage);
```

- Self invoking Function (IIFE) - A self-invoking function, also known as an Immediately Invoked Function Expression (IIFE), is a function that is executed immediately after it is defined. We use this to obtain data privacy and to not give access to call anywhere


Syntax:

```js
(function() {
    // function body
})();
```

Example:

```js
(function() {
    console.log("This is an IIFE.");
})();
```
## JS-Day-7

**Object Methods:**

- Object Keys - Returns an array containing the object's own keys

```js
const var = {
    obj1: 'obj1',
    obj2: 'obj2',
    obj3: 'obj3'
};

const keys = Object.keys(vars);

console.log(keys)
```

- Object Values - Returns an array containing the object’s own enumerable property values

```js
const var = {
    obj1: 'obj1',
    obj2: 'obj2',
    obj3: 'obj3'
};
valuess = Object.values(vars);

console.log(values)
```

- Object Entries - Returns an array of the object’s own enumerable property key-value pairs as arrays

```js
const var = {
    obj1: 'obj1',
    obj2: 'obj2',
    obj3: 'obj3'
};

const entries = Object.entries(vars);

console.log(entries)
```

## JS-Day-8

**DOM Traversal Methods**

- getElementById(id) - Retrieves an element with the specified id attribute

```js
const element = document.getElementById("element name");
```

1. Change the Text and Style of a Heading Element:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="myHeading">Hello, World!</h1>
  </body>
</html>
```

```js
// Access the heading element by its ID
const headingElement = document.getElementById('myHeading');

// Change the text and style
headingElement.textContent = "New Heading Text";
headingElement.style.color = "blue";
headingElement.style.backgroundColor = "yellow";
```

2. Change the Color and Style of a Button Element:

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="myButton">Click me</button>
  </body>
</html>
```

```js
// Access the button element by its ID
const buttonElement = document.getElementById('myButton');

// Change the button text color and background color
buttonElement.style.color = "white";
buttonElement.style.backgroundColor = "green";
buttonElement.textContent = "Updated Button Text";
```

3. Change the Style of a Div Element:

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="myDiv" style="width: 100px; height: 100px; background-color: lightgray;"></div>
  </body>
</html>
```

```js
/ Access the div element by its ID
const divElement = document.getElementById('myDiv');

// Change the background color and size
divElement.style.backgroundColor = "blue";
divElement.style.width = "150px";
divElement.style.height = "150px";
```

- getElementsByClassName(className) - Retrieves an HTMLCollection of elements with the specified class attribute

```js
const elements = document.getElementsByClassName("class name");
```

- getElementsByTagName(tagName) - Retrieves an HTMLCollection of elements with the specified tag name

```js
const elements = document.getElementsByTagName("tag name");
```

- querySelector(selector) - Retrieves the first element that matches the specified CSS selector

```js
const element = document.querySelector("#elementName .className");
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>querySelector Example</title>
</head>
<body>
    <div id="content">
        <h1>Hello, World!</h1>
        <p>This is a simple example using querySelector.</p>
    </div>
</body>
</html>
```

```js
// Select the first <p> element inside the #content div using querySelector
const paragraph = document.querySelector("#content p");

// Change the text content of the selected paragraph
paragraph.textContent = "This paragraph has been updated using querySelector.";

// Change the style of the selected paragraph
paragraph.style.color = "blue";

// Select and modify the <h1> element inside the #content div
const heading = document.querySelector("#content h1");
heading.textContent = "Hello, DOM!";

// You can also select elements by tag name
const title = document.querySelector("title");
title.textContent = "Updated Title";
```

- querySelectorAll(selector) - Retrieves all elements that match the specified CSS selector, returning a NodeList

```js
const elements = document.querySelectorAll("elementTag.className");
```

```html
<!DOCTYPE html>
<html>
  <body>
    <div class="container">
      <p class="selected">Paragraph 1</p>
      <p>Paragraph 2</p>
      <p class="selected">Paragraph 3</p>
      <p>Paragraph 4</p>
    </div>
  </body>
</html>
```

```js
// Select all <p> elements with the class "selected"
const selectedParagraphs = document.querySelectorAll('.selected');

// Loop through the selected elements and do something with them
selectedParagraphs.forEach(paragraph => {
  console.log(paragraph.textContent);
});

// Output:
// "Paragraph 1"
// "Paragraph 3"
```

## JS-Day-10

**Change / Update Text / Styles / Properties of an Element**

- innerText -  It gets or sets the visible text content within an element, excluding any hidden or styled elements

```html
<div id="myElement">
    This is some <span style="display: none;">hidden</span> text.
</div>
```

```js
const element = document.getElementById("myElement");
const text = element.innerText;
console.log(text);
// Output: "This is some text."
```

- innerHTML - It gets or sets the HTML content of an element, including any HTML tags and their content

```html
<div id="myElement">
    This is some <b>bold</b> text.
</div>
```

```js
const element = document.getElementById("myElement");
const html = element.innerHTML;
console.log(html);
// Output: "This is some <b>bold</b> text."
```

- textCotent - It gets or sets the text content of an element, including all text, regardless of whether it’s styled or hidden

```html
<div id="myElement">
    This is some <span style="display: none;">hidden</span> text.
</div>
```

```js
const element = document.getElementById("myElement");
const text = element.textContent;
console.log(text);
// Output: "This is some hidden text."
```

**Create / Remove / Append Elements**

- Create Elements - Involves creating new HTML elements in the DOM using JavaScript. These elements can be any valid HTML element, and they can be added to the document

```js
const newElement = document.createElement("tagName");
```

Example:

```html
<div id="container">
    <p>This is a container.</p>
</div>
```

```js
// Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";

// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);
```

- Remove Elements - Involves removing existing elements from the DOM. This is useful for cleaning up or dynamically updating the page

```js
const elementToRemove = document.getElementById("elementId");
elementToRemove.remove();
```

Example:

```html
<div id="container">
    <p>This is a container.</p>
</div>
```

```js
// Remove the <p> element from the container
const elementToRemove = document.querySelector("p");
elementToRemove.remove();
```

- Append Elements - Involves adding elements as children to other elements in the DOM, allowing you to build and modify the document structure dynamically

```js
const parentElement = document.getElementById("parentElementId");
parentElement.appendChild(newElement);
```

Example:

```html
<div id="container">
    <p>This is a container.</p>
</div>
```

```js
// Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";

// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);
```

**Date/Time Methods**

- setTimeout - setTimeout is used to execute a function or code block once, with a specified delay (in milliseconds), after which the function is called

```js
setTimeout(function, delay)
```

Example:

```js
function greet() {
    console.log("Hello, world!");
}

// Execute the greet function after 2000 milliseconds (2 seconds)
setTimeout(greet, 2000);
```

- setInterval - setInterval is used to repeatedly execute a function or code block at specified intervals (in milliseconds) until it is cleared

```js
setInterval(function, interval)
```

Example:

```js
let count = 0;

function incrementAndLog() {
    count++;
    console.log(`Count: ${count}`);
}

// Execute the incrementAndLog function every 1000 milliseconds (1 second)
const intervalID = setInterval(incrementAndLog, 1000);

// Clear the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalID);
    console.log("Interval cleared.");
}, 5000);
```

## JS-Day-11

**Event Handlers**

- onChange - The onchange event is triggered when the value of an input element changes. It is commonly used with form elements like text inputs and select boxes

```html
   <input type="text" id="myInput" onchange="handleChange()">
   <p id="output">Change detected!</p>

   <script>
       function handleChange() {
           document.getElementById("output").textContent = "Change detected!";
       }
   </script>
```

- onClick - The onclick event is triggered when an element is clicked

```html
   <button id="myButton" onclick="handleClick()">Click Me</button>
   <p id="output">Button not clicked yet.</p>

   <script>
       function handleClick() {
           document.getElementById("output").textContent = "Button clicked!";
       }
   </script>
```

- onMouseHover - The onmouseover event is triggered when the mouse pointer is moved over an element

```html
   <div id="myDiv" onmouseover="handleMouseOver()">Hover over me</div>
   <p id="output">Mouse not over the div.</p>

   <script>
       function handleMouseOver() {
           document.getElementById("output").textContent = "Mouse over the div!";
       }
   </script>
```

- onMouseOut - The onmouseout event is triggered when the mouse pointer is moved out of an element

```html
   <div id="myDiv" onmouseout="handleMouseOut()">Move the mouse away</div>
   <p id="output">Mouse not out of the div yet.</p>

   <script>
       function handleMouseOut() {
           document.getElementById("output").textContent = "Mouse out of the div!";
       }
   </script>
```

- onKeyDown - The onkeydown event is triggered when a keyboard key is pressed down

```html
   <input type="text" id="myInput" onkeydown="handleKeyDown()">
   <p id="output">Key not pressed yet.</p>

   <script>
       function handleKeyDown() {
           document.getElementById("output").textContent = "Key pressed!";
       }
   </script>
```

- onLoad - The onload event is triggered when a page or an image has finished loading

```html
   <img src="example.jpg" id="myImage" onload="handleLoad()">
   <p id="output">Image not loaded yet.</p>

   <script>
       function handleLoad() {
           document.getElementById("output").textContent = "Image loaded!";
       }
   </script>
```

**Event Handlers with Event Listeners**

```js
elementName.addEventListener(event, function)
```

- onChange - The change event is triggered when the value of an input element changes

```html
   <input type="text" id="myInput">
   <p id="output">Change detected!</p>

   <script>
       const inputElement = document.getElementById("myInput");
       inputElement.addEventListener("change", function() {
           document.getElementById("output").textContent = "Change detected!";
       });
   </script>
```

- onClick - The click event is triggered when an element is clicked

```html
   <button id="myButton">Click Me</button>
   <p id="output">Button not clicked yet.</p>

   <script>
       const buttonElement = document.getElementById("myButton");
       buttonElement.addEventListener("click", function() {
           document.getElementById("output").textContent = "Button clicked!";
       });
   </script>
```

- onMouseHover - The mouseover event is triggered when the mouse pointer is moved over an element

```html
   <div id="myDiv">Hover over me</div>
   <p id="output">Mouse not over the div.</p>

   <script>
       const divElement = document.getElementById("myDiv");
       divElement.addEventListener("mouseover", function() {
           document.getElementById("output").textContent = "Mouse over the div!";
       });
   </script>
```

- onMouseOut - The mouseout event is triggered when the mouse pointer is moved out of an element

```html
   <div id="myDiv">Move the mouse away</div>
   <p id= "output">Mouse not out of the div yet.</p>

   <script>
       const divElement = document.getElementById("myDiv");
       divElement.addEventListener("mouseout", function() {
           document.getElementById("output").textContent = "Mouse out of the div!";
       });
   </script>
```

- onKeyDown - The keydown event is triggered when a keyboard key is pressed down

```html
   <input type="text" id="myInput">
   <p id="output">Key not pressed yet.</p>

   <script>
       const inputElement = document.getElementById("myInput");
       inputElement.addEventListener("keydown", function() {
           document.getElementById("output").textContent = "Key pressed!";
       });
   </script>
```

- onLoad - The load event is triggered when a page or an image has finished loading

```html
   <img src="example.jpg" id="myImage">
   <p id="output">Image not loaded yet.</p>

   <script>
       const imageElement = document.getElementById("myImage");
       imageElement.addEventListener("load", function() {
           document.getElementById("output").textContent = "Image loaded!";
       });
   </script>
```
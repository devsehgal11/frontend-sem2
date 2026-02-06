// italicize the new heading

/*
const head = document.getElementById("heading")
head.innerHTML = "<i>italics heading.</i>" 
console.log(head)
*/

// show hidden text in console

/*
const head = document.getElementById("heading")

console.log(head.innerText) // it will only show the visible text
console.log(head.textContent) // it will show all the text including the inner text
console.log(head.innerHTML) // it will show all the text with its tag/element
*/

// create an element and set its content

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";
console.log(newParagraph.textContent)

// Append the new element to the container

const container = document.getElementById("container");
container.appendChild(newParagraph);

// Remove the <p> element from the container
const elementToRemove = document.querySelector("p");
elementToRemove.remove();

// Event handling for button

function handleClick() {
    document.getElementById("output").textContent = 'Good boy'
}
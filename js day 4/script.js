// slice arrays

/*
 let numbers = [1, 2, 3, 4, 5]
 let sliced = numbers.slice(1, 4)

 console.log(sliced)
*/

// Check if an element meets the condition using 'some' array method

/*
let numbers = [1, 3, 5, 7, 9]
let hasEven = numbers.some(x => x % 2 === 0)

console.log(hasEven)
*/

// Check if all element meets the condition using every()

/*
let numbers = [2, 4, 6, 8, 10]
let allEven = numbers.every(x => x % 2 === 0)

console.log(allEven)
*/

// Combine two arrays together using concat()

/*
let fruits1 = ["apple", "banana"]
let fruits2 = ["cherry", "orange"]

let combined = fruits1.concat(fruits2)

console.log(combined)
*/

// Splice arrays using splice array method

/*
let fruits = ["apple", "banana", "cherry"]
fruits.splice(0, 2, "orange", "grape")

console.log(fruits)
*/

// Reverse an array using reverse()

/*
let numbers = [1, 2, 3, 4, 5]
numbers.reverse() // [5, 4, 3, 2, 1]

console.log(numbers)
*/

// Check if an array has an element using include()

/*
const array1 = [1, 2, 3]
console.log(array1.includes(2))
*/

// Slice string

/*
let str = "JavaScript is fun!"
let sliced = str.slice(0, 10)
*/

// substring()

/*
let str = "JavaScript is amazing!"
let sub = str.substring(11, 17)
*/

// indexOf()

/*
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
const indexOfFirst = paragraph.indexOf("dog")
console.log(indexOfFirst)
/*

// substr()

/*
let str = "OpenAI is innovative!"
let sub = str.substr(8, 2)
*/

// Replace string

/*
let sentence = "I love JavaScript. JavaScript is powerful."
let newSentence = sentence.replace("JavaScript", "Node.js")
*/

// ReplaceAll String

/*
let sentence = "I love JavaScript. JavaScript is powerful."
let newSentence = sentence.replaceAll("JavaScript", "Node.js")
*/

// Case String Method

/*
let name = "John Doe"
let upperCaseName = name.toUpperCase() // "JOHN DOE"
let lowerCaseName = name.toLowerCase()
*/

// Concat String

/*
let firstName = "John"
let lastName = "Doe"
let fullName = firstName.concat(" ", lastName) 
*/

// Trim String

/*
let sentence = "   This is a sentence with spaces.   "
let trimmed = sentence.trim()
*/

// charAt() and carCodeAt()

/*
let word = "Hello"
let char = word.charAt(1)
let charCode = word.charCodeAt(1)
*/

// Split String

/*
let sentence = "I,am,a,comma,separated,sentence"
let words = sentence.split(",")
*/
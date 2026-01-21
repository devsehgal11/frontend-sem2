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
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
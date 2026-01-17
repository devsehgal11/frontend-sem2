// for loop

/*
for(let i=0; i<=5; i++){
    console.log(i)
}
*/

// nested for loop

/*
for(let i=0; i<=5; i++){
    console.log(i)
    for(let j=0; j<=5; j++){
        console.log(j)
    }
}
*/

// array mapping

/*
let arr = [1, 2, 3, 4, 5]

let result = arr.map(x => x)

console.log(result)
*/

// array filter

/*
let scores = [12, 55, 90, 69, 92, 100]
let highScores = 
scores.filter(score => score >= 90)
console.log(highScores)
*/

// array reduce

/*
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce((acc, current) => console.log(current))
*/

// sum of array using reduce

/*
let arr = [1, 2, 3, 4, 5]

let sum = arr.reduce((acc, current) => acc + current, 0)

console.log(sum)
*/

// sum of array using for loop

/*
let arr = [1, 2, 3, 4, 5]

let sum = 0

for(let i=0; i<arr.length; i++){
    sum += arr[i]
}

console.log(sum)
*/

// iterate all the elements and print them

/*
let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
*/

// add 5 to each number inside the array. take array length to be 5

/*
let arr = [1, 2, 3, 4, 5]
let newsum = []

for (let i = 0; i <= 5; i++) {
    newsum.push(arr[i]+5)
}

console.log(newsum)
*/

// reverse the array. the elements should be numeric

/*
let arr = [1, 2, 3, 4, 5]
let reversed = []

while (arr.length > 0) {
    reversed.push(arr.pop())
}

console.log(reversed)
*/

// sort the array in descending order

/*
let arr = [5, 3, 1, 6, 2, 4]
let sorted = []

while (arr.length > 0) {
    let max = arr[0]
    let maxpos = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            maxpos = i
        }
    }
    sorted.push(max)
    arr.splice(maxpos, 1)
}

console.log(sorted)
*/

// find the duplicate element and return the unique elements

/*
let arr = [1, 2, 3, 4, 5, 3]
let unique = []

while (arr.length > 0) {
    let num = arr.shift()
    if (!unique.includes(num)) {
        unique.push(num)
    }
}

console.log(unique)
*/
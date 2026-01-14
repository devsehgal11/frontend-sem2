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
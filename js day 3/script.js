// array push

/*
let fruits = ['apple', 'banana']
let newLength = fruits.push('cherry')

console.log(newLength)
console.log(fruits)
*/

// array pop

/*
let fruits = ['apple', 'banana']
let newLength = fruits.pop('banana')

console.log(newLength)
console.log(fruits)
*/

// array shift

/*
let fruits = ['apple', 'banana']
let newLength = fruits.shift('cherry')

console.log(newLength)
console.log(fruits)
*/

// array unshifted

/*
let fruits = ['apple', 'banana']
let newLength = fruits.unshift('cherry')

console.log(newLength)
console.log(fruits)
*/

// reverse the array by using push and pop

/*
let arr = [1, 2, 3, 4, 5]
let reversed = []

while (arr.length > 0) {
    reversed.push(arr.pop())
}

console.log(reversed)
*/

// remove all negative numbers from an array

/*
let arr = [1, -2, 3, -4, 5]
let pos = []

while (arr.length > 0) {
    let num = arr.shift()
    if (num >= 0) {
        pos.unshift(num)
    }
}

console.log(pos)
*/

// find if an array is pallindrome

/*
let arr = [1, 2, 3, 2, 1]
let og = []
let reversed = []

for (let i = 0; i < arr.length; i++) {
    og.push(arr[i])
}

while (arr.length > 0) {
    reversed.push(arr.pop())
}

for(let i = 0; i < og.length; i++) {
    if (og[i] !== reversed[i]) {
        console.log('it\'s not a pallindrome')
    }
    else {
        console.log('it\'s a pallindrome')
    }
    return
}
*/

// split odd and even numbers from an array

/*

let arr = [1, 2, 3, 4, 5, 6]
let even = []
let odd = []

while (arr.length > 0) {
    let num = arr.shift()
    if ( num % 2 === 0 ) {
        even.push(num)
    }
    else {
        odd.push(num)
    }
}

console.log(`Even; ${even}, Odd = ${odd}`)
*/

// move all zeroes to the end of the array

/*
let arr = [1, 0, 3, 0, 5]
let newzero = []

while (arr.length > 0) {
    let num = arr.shift()
    if ( num === 0 ) {
        newzero.push(num)
    }
    else {
        newzero.unshift(num)
    }
}

console.log(newzero)
*/
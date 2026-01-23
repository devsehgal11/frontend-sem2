// Count the occurence of "r" in the given string

/*
let str = 'Tu meri main tera main tera tu meri'
let words = str.split("r")

console.log(words);
*/

// First-Class Function

/*
function test() {
    return function test2() {
        console.log('Test 2')
        return function test3() {
            console.log('Test 3')
        }
    }
}

let value = test()
let value2 = value()
value2() // test()()()
*/

// Self-Inducing function

(function() {
    console.log('ts so tuff')
})()

function demo() {
    console.log('demo')
}

let a = 10

console.log(a)

function sample() {
    demo()
}

sample()
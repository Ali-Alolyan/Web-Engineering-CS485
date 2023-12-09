

// Read Evaluate Print Loop (REPL) in node.js => to use the JavaScript like in websit console
    // * to run REPL in node go to  terminal and write (node) to start REPL
    // * to save the REPL session in file (.save ./fileName.js)
    // * to exports module use { module.exports = functionName; }
    // * to get exports module {const square = require('./fileName');}


// Example of node.js
    // exports module
const source = require('./src')

console.log(process.argv) // to add arg => node fileName.js arg1 arg2 ...
console.log(process.argv[2]) // output: arg1,  to add arg => node fileName.js arg1 arg2 ... 



let op = process.argv[2];
let num1 = process.argv[3]*1;
let num2 = process.argv[4]*1;

switch (op) {
    case 'sum': console.log(source.sum(num1, num2));
    break;
    case 'sub': console.log(source.sub(num1, num2));
    break;
    default: console.log(Error);
    break;

}





// JavaScript is Asynchronous
console.log(1)
console.log(2)
setTimeout(() => {console.log(3)}, 5000)
console.log(4)
console.log(5)

// * Synchronous
    // 1. Callback worklessness
    console.log('Start')
    function userInfo(name, callback){
        setTimeout(() => {
            console.log('** User info received **')
            callback(name)
        }, 3000)
    }
    let userName = userInfo('Ali', name => {
        console.log(`Your naem is ${name}`)
    })

    console.log('End')

    // 2. Promises 
    console.log('Start')
    const newUser = new Promise((resolve, reject) => {
        setTimeout(() => {
            const userInfo  = {
                name: 'Ali',
                age: 30
            }
            resolve(userInfo)
        }, 3000)
    })
    
    newUser.then(res => {
        console.log('** User info received **')
        console.log(res)
    })

    console.log('End')

// Promises Example
console.log('Start')
const newUserP = new Promise((resolve, reject) => {
    setTimeout(() => {
        const userInfo  = {
            name: 'Ali',
            age: 2
        }
        resolve(userInfo)
    }, 3000)
})

const addNewUserP = userInfo => {
    let userAge = userInfo.age
    let adultAge;

    if (userAge >= 18){
        adultAge = `${userInfo.name} is an Adult`
        return Promise.resolve(adultAge)
    } else{
        adultAge = `${userInfo.name} is NOT an Adult`
        return Promise.reject(new Error(adultAge))
    }

}

newUserP
    .then(addNewUserP)
    .then(res => {
        console.log('** User info received **')
        console.log(res)
    })
    .catch(err => {
        console.log(err.message)
    })

console.log('End')

// Destructuring in Array
let ages = [26, 23, 11]

    // Definde Destructuring
    let [firstAge, secondAge, thirdAge] = ages
    console.log(firstAge, secondAge, thirdAge)

    // Undefinde Destructuring & Defult value
    let [firstAgeUn, secondAgeUn, thirdAgeUn, forthAgeUn = 33] = ages
    let [,,skip] = ages
    console.log(firstAge, secondAge, thirdAge)
    console.log(skip)

    // Destructuring Nested Arrays
    let numbers = [1,2,[3,4]]
    let [first, second, [third, forth]] = numbers
    console.log(first, second, third, forth)

    // Reblace value
    let firstV = 5, secondV = 7;
    [firstV, secondV] = [secondV, firstV]
    console.log(firstV, secondV)

// L Value & R Value
let colors = ['red', 'green'];
[colors[0], colors[1], ...others] = ['blut', 'black', 'whit', 'hi']
console.log(...colors, ...others)

// Destructuring in Object
let student = {
    name: {
        firstName: 'Ali',
        lastName: 'Alolyan'
    },
    age: 24,
    '@my hope': "To be cypersecurty"
}
let {name:{firstName: yourFirstName, lastName: yourLastName}, age: yourAge, '@my hope': yourHope} = student
let {name:{firstName, lastName}, age} = student

console.log(yourFirstName, yourLastName ,yourAge, yourHope)
console.log(firstName,lastName, age)
console.log(student['@my hope'])



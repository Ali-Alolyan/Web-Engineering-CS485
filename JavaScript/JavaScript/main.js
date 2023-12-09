let name = `ali al`

let age = 30 

let count = 3.30

let message = 
` Welcome 
                     Ali   
    to our project!!
    your age is ${age}
    your count is ${count}` // Template Literals 

 const colors = ['red', 'green', 'blue']
 

 //For of
 for(let color of colors){  
    console.log(color)
 }

 for (let char of name){
    console.log(char)
 }

console.log(typeof age +' '+ typeof count)

console.log(message)

printNumber(6, 7)

// Callback Function
console.log(operation(5, 3, sum))
console.log(operation(55, 5, sub))
console.log(operation(5,5, function(firstNum, secondNum){return firstNum * secondNum}))
console.log(operation(5,2, (firstNum, secondNum) => firstNum % secondNum))
const div = (firstNum, secondNum) => firstNum / secondNum
console.log(operation(55, 5, div))
console.log(operation(5, 1, div))

console.log(format('Welcom to JavaScript', htmlFormat))
console.log(format('Welcom to JavaScript', jsonFormat))

// Advanced Array
colors.forEach(function(currentVal, index, array){
   console.log(index, currentVal, array)
})

console.log(colors.includes('red'))





function printNumber(from, to){
    for(from; from <= to; from++){
        console.log(from)
    }
}

function sum(firstNum, secondNum){
   return firstNum + secondNum
}

function sub(firstNum, secondNum){
   return firstNum - secondNum
}

function operation(firstNum, secondNum, opCallback){
   return `[${opCallback(firstNum, secondNum)}]`
}

function format(message, formatCallback){
   return formatCallback(message)
}

function htmlFormat(message){
   return `<div> ${message} </div>`
}

function jsonFormat(message){
   return `{ "message": "${message}" }`
}

console.log(" ")
console.log(" ")
console.log(" ")

// Object
const car = {
   name: 'camry',
   color: 'white',
   currentSpeed: 0,
   
   move: function(speed = null){
      this.currentSpeed == speed
      return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
   },

   stop: function(){
      this.currentSpeed = 0
      return `The ${this.name} stopped speed: ${this.currentSpeed}`
   }
}

console.log(car.move(103))
console.log(car.stop)


// Class
class Car {
   static numberOfCars = 0
   #currentSpeed
   constructor(name, color, currentSpeed){
      this.name = name
      this.color = color
      this.#currentSpeed = currentSpeed // #private 
      Car.incrementNumberOfCars
   }

   move(speed){
      this.#currentSpeed == speed
      return `The ${this.name} is moving at speed of ${this.#currentSpeed}km per hour`
   }

   stop(){
      this.#currentSpeed = 0
      return `The ${this.name} stopped speed: ${this.#currentSpeed}`
   }

   static incrementNumberOfCars(){
      Car.numberOfCars++
   }
}

const car1 = new Car('Camry', 'White', 0)
const car2 = new Car('Corella', 'Black', 0)

car1.move(30)
car2.move(70)

car1.stop()
car2.stop()

console.log(Car.numberOfCars)

console.log(" ")
console.log(" ")
console.log(" ")

// Call method. Just use in Object
let user1 = {
   firstName : "ali",
   lastName : "olyan"
}

let printFullName = function(age){
   console.log(`Hello, ${this.firstName} ${this.lastName}. Your age is: ${age}`)
}

printFullName.call(user1, 30)

// Apply method. Just use in Object
printFullName.apply(user1, [30])

// Bind method. Just use in Object
let newFunction = printFullName.bind(user1)
console.log(newFunction)
newFunction("25")

console.log(" ")
console.log(" ")
console.log(" ")

// IIFEs in this exmaple not work for me
// (function(name){
//    console.log(name);
// })("ALI");

console.log(" ")
console.log(" ")
console.log(" ")

// Type of method in Object
let obj = {
   title: "How to write a function in an object",

   function1 : function(){
      return console.log(this.title + "1")
   },

   function2 : () => {
      return console.log("can't use this 2")
   },

   function3() {
      return console.log(this.title + "3")
   }
}

obj.function1()
obj.function2()
obj.function3()

console.log(" ")
console.log(" ")
console.log(" ")

// Rest Parameter
let studentsNames1 = function(name1, name2, ...names){
   console.log(name1, name2, ...names)
}

studentsNames1("ali", "Ema", "Eva", "Nora")


console.log(" ")
console.log(" ")
console.log(" ")


// Spread Operator
let studentsNames = function(name1, name2, name3, name4){
   console.log(name1, name2, name3, name4)
}

names = ["ali", "Ema", "Eva", "Nora"]
studentsNames(...names)
// Primitive dataTypes  (Call by Value)

//7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt
//examples:
const a = 123;
const b = 123.5;
const c = "Sam";
const isLoggedIn = true;
let temp = null;
let userEmail;
const bigNumber = 12345678987654n;

/* Even though id and anotherId are both Symbol type having SAME value yet they are different. */
const id = Symbol("123");
const anotherId = Symbol("123");  
console.log(id===anotherId);


// Non-Primitive dataTypes  (Call by Reference)

// Array, Object, Functions
//example

const myArray = ["IronMan", "CaptaainAmerica", "Hulk"];

let myObj = {
    name: "shashank",
    age: 35
}

let myFunction = function(){
    console.log("Hello My World");
}


console.log(typeof bigNumber);
console.log(typeof a);
console.log(typeof b);
console.log(typeof temp);
console.log(typeof myArray);
console.log(typeof myObj);
console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory ----- Stack(Primitive)     Heap(Non-Primitive)

/*So when ever a variable uses stack momory to store data then its copy is used instead of original variable.
WhereAs when a Heap is used by any variable (objects, Arrays etc) then it refers to the original value since it is Non-Primitive.
*/
//example
let myName = "Shashank";
let anotherName = myName ;
anotherName = "Sam";

console.log(myName);
console.log(anotherName);

let userOne = {
    name: "shashank@amazon.us",
    upi: "sam@ybl"
}

let userTwo = userOne
userTwo.name = "abc@gmail.com";
console.log(userOne.name);
console.log(userTwo.name);
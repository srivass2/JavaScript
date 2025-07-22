console.log("Shashank")

let name1 = "shashank";
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

console.log(`my name is ${name1} but in official document it is ${name1.toUpperCase()}`)

const arr = ["array 1", "array 2", "array 3"];
const superHero = ["ironMan","Loki","Thor"];
console.log(arr[1]);

const array1 = new Array(1,2,3,4,5,6);
console.log(array1);
console.log(...arr, ...superHero);
console.log(arr.concat(superHero));


let obj1 = {
    name : "sha",
    id : 11,
    fun : function(){
        console.log("Inside oject function");
        console.log(`and the name is ${this.name}`);
        
        },
    email : "sha@gmail.com"    
}

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(obj1.fun());
console.log(obj1.fun);

function newFun(param) {
    prod = param * 10;
    return prod;    
}

const res = newFun(2);
console.log(` the output from the function is ${res}`);

function userInput(...input) {
    return input;
    }
const cart = userInput(100,200,300,400);
console.log(cart);
console.log(cart[2]);

function objFun(dataObject) {
    console.log(`the name of the person is ${dataObject.name} and the id is ${dataObject.id}`);
    }
objFun(obj1);

const tea = (data1, data2) => {
    return data1 + data2;
}
console.log(tea(1,2));

((a) => {
    console.log(`value of a inside IIFE is ${a}`);    
}) (3);

(chaiii = (b) => {
    console.log(`value of b inside named IIFE is ${b}`);    
}) (11);









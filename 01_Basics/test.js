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
        },
    email : "sha@gmail.com"    
}

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(obj1.fun());
console.log(obj1.fun);








// for-in loop statements works well in case of OBJECTS

const obj = {
    js: "Java Script",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

for (const keys in obj) {
    console.log(`${keys} stands for ${obj[keys]}`); //To access keys and value of Object. 
}

//can we use Arrays in for-in loop ?
const array = ["sam", "tomas", "Ellen"];
for (const key in array) {
    console.log(key);    
    
} // Here we see that instead of printing the values in the array like for-of it gave 0, 1, 2 as keys.

//but still if we want the values of the array it can be fetched as below:
const arr = ["sam", "tomas", "Ellen"];
for (const key in arr) {
    console.log(`${key} and the values are ${arr[key]}`);    
    
} // So it is recommended to use for-of in cae of arrays.

//Incase of Map(), for-in will not work because Map() is not iterable so no output it will give.

const map = new Map();
map.set('IN', "INDIA");
map.set('IDX', "DUBAI");
for (const key in map) {
    console.log(key);
    
} // We saw that no output was generated in the terminal
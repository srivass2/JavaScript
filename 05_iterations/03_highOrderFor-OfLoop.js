// for-of loop can be best used for string, arrays, maps but not for OBJECTS.

// The best part of this is that we donot need to worry about end condtion of the loop. it automatically takes care of it.

let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(`number : ${num}`);   
    
}

let greeting = "Hello World!";
for (const greet of greeting) {
    console.log(`each charracter is ${greet}`);    
    
}

//+++++++++++++++++++++++++++++++ MAP +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 
Maps hold Key value pair.
It remembers the original insertion order of the keys.
It doesnot have duplicate values. only uniques allowed.
*/

const map = new Map();
map.set('IN', "INDIA")
map.set('Fr', "France")
map.set('IN', "INDIA") // since map so duplicate values are not allowed.It will display only unique
console.log(map);

for (const key of map) {
    console.log(key);
    
}// Here we see that it is displayed in a form of multiple arrays ['IN', 'INDIA] [ 'Fr', 'France' ]
// To avoid this we can destructure it by simple adding key and value. e.g:


for (const [keys, values] of map) {
    console.log(keys, values);
}

// for-of loop in case of OBJECTS to see that it cannot be used.

const obj = {
    game1: "NFS",
    game2: "Counter Strike"
}
for (const [key1, value1] of obj) {
    console.log(key1 , value1);
    
}
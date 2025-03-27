//In arrays we also get prototype features.

const myArr = [1, 2, 3, 4, 5];
console.log(myArr[0]);

let myHeroes = ["IronMan", "AntMan"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6)
console.log(myArr2);

// ++++++++++++++++++++++++++++++Array Methods+++++++++++++++++++++++++++++++++++++

myArr.push(7);
console.log(myArr);
myArr.pop(); // just removes the last value from the array
console.log(myArr);

myArr.unshift(9) // This adds the value 9 in the beginning of the array and shifts the position of entire array element. Hence in case in real life if there are huge data then it may not be an OPTIMIZED way.
console.log(myArr);

myArr.shift(); // This removes the first element in the array. And if array is empty then returns UNDEFINED.
console.log(myArr);

const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr);

//++++++++++++++ slice and splice +++++++++++++++++++++++++++++++

console.log(`array A is ${myArr}`);
const myn1 = myArr.slice(1,3); // Returns a copy of a section of an array. The last range is not INCLUDED. The ORIGINAL ARRAY remains UNCHANGED.
console.log(`After slice the output is ${myn1}`);
console.log(`After slice the original array A is ${myArr}`);

console.log(`array B is ${myArr}`);
const myn2 = myArr.splice(1,3); // Removes elements from an array, THe last range is INCLUDED and, returning the deleted elements. BUT in this case the ORIGINAL ARRAY is UPDATED and now has only left over values.
console.log(`After splice the output is ${myn2}`);
console.log(`After splice the original array B is ${myArr}`);

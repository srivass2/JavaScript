const marvelHeroes = ["Ironman", "SpiderMAn", "Hulk"];

const dcHeroes = ["superMan", "Flash", "batMan"];
marvelHeroes.push(dcHeroes) // This just pushes the 2nd array as a whole in to the 1st array
console.log(marvelHeroes);

//In order to merge 2 arrays into 1 we can use concat or ...(i.e Spread operator)
const marvelHeroes1 = ["Ironman", "SpiderMAn", "Hulk"];
const dcHeroes1 = ["superMan", "Flash", "batMan"];

const mergedHeroes = marvelHeroes1.concat(dcHeroes1) // using concat()
console.log(mergedHeroes);

const allHeroes = [...marvelHeroes1, ...dcHeroes1]; // using spread operator
console.log(allHeroes);

// How to handle nested array or array with array within array etc.. having multiple depth.
const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [6, 5, 4, [3, 2, 1]]];
console.log(anotherArray.flat(Infinity)); // .flat() method Returns a new array with all sub-array elements concatenated in one array.



// While scraping data from website or any object if we need to convert that data into array
console.log(Array.from("shashank"));

console.log(Array.isArray("shashank"));// also check if the data is array or not

console.log(Array.from({name: "shashank"}));// INTERESTING that in case of object the behavior is different. instead of array it gave [] because we need to mention weather the array hould be based on keys or values.

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3)); // Array.of converts values in to set of array.i.e Returns a new array from a set of elements.

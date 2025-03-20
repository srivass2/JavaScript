const name = "Shashank";
const repoCount = 40;

console.log(name + repoCount + "value"); // old way 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // new way by using backtic or String extrapolation

let gameName = new String("Shashank-js-copy");
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.indexOf('n'));

const newString = "      Shashank   ";
console.log(newString);
console.log(newString.trim());

console.log(gameName.split('-')); // splits the string into array based on some common characters.
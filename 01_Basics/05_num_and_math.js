const score = 400;
console.log(score);  
console.log(typeof(score));  // automatically it considers value as Number

const balance = new Number(200); 
console.log(balance);   // explicitly defined it as Number

console.log(balance.toString().length);

console.log(balance.toFixed(2));  // returns the value with 2 places of decimal.

const otherValue = 23.8966;
console.log(otherValue.toPrecision(2));
console.log(otherValue.toPrecision(3));
console.log(otherValue.toPrecision(4));
console.log(otherValue.toPrecision(5));

//+++++++++++++++++++++++++++++ MAth +++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.round(4.9));
console.log(Math.ceil(4.4)); //.ceil returns the Highest value irrespective of number after decimal point is <5 or >5
console.log(Math.floor(4.9)); // .floor returns the lowest value irrespective of number after decimal point is <5 or >5 
console.log(Math.min(4, 3, 5, 1));

console.log(Math.random()); // it assigns value between 0 and 1.

//suppose i need to make a game where i want value between 1 and 10 i.e smallest be 1 and biggest be 10

console.log(Math.floor(Math.random() * 10) + 1);

// suppose  I want value between 10 and 20

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
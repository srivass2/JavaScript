let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let myTimestamp = new Date();
console.log(myTimestamp.getTime()); //the value returned is in Milliseconds
console.log(myTimestamp.getTime()/1000); //this will give timestamp in seconds
console.log(Math.floor(myTimestamp.getTime()/1000)); // to avoid the value in decimal we have used Math.floor() method.



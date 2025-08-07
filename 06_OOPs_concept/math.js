console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // as we can see we cannot change the value of PI since its always remains same. So what is the reason that we are not able to update or change its value? The answer is as below.


console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
/* we get below output and it clearly shows that writable = false.
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
  */

/* in JS we can change the property descriptor which we have created. lets see an example below
*/

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function() {
      console.log(`Chai nahi bani`);      
      
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // here we see the discriptor has given few properties as below.
/* {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// now lets try to modify these descriptor properties.

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/* You can see the descriptor properties are modified
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
  */

for (const key in chai) {
  if (typeof chai[key] != "function") {
    console.log(`${key} : ${chai[key]}`);
    }  
  
}
//                          IMPORTANT

// here we saw two things: 1) we wanted it to print key values only and not the function part, hence we kept an If() condition. 2) we saw that since for name the enumerable was false hence that is also not displayed in the output.

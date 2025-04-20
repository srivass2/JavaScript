const user = {
    username: "shashank",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`)// this keyword is used to donote that the username variable's scope is of this block i.e it refers to current context.
        console.log(this); // this output prooves that this keyword refers to corrent context
    }
}
// this keyword is used in case of objects with function inside.


user.welcomeMessage();
user.username = "sam";
user.welcomeMessage(); // the value of username got updated because this keyword only refers to that value which the variable hold in that block scope.

console.log(this); // this gave empty context {} because in this node the global context is empty. where as if we see the same thing in browser console it displayes window properties
// (INTERESTING because Windows is the global object in console whereas in node the global object is empty {})

// function chai() {
//     console.log(this);
// }
// chai();

// function chai() {
//     const username = "shashank";
//     console.log(this.username);
// }
// chai(); // gives undifined, means this keyword do not works with standalone functions


// const chai = function() {
//     const username = "shashank";
//     console.log(this.username);
// }
// chai(); // gives undifined, means this keyword do not works with standalone functions


//+++++++++++++++++++++++++++ ARROW function ++++++++++++++++++++++++++++++++++

const chai = () => {          
    const username = "shashank";
    console.log(this.username);
}
chai(); // Also gives undifined, means this keyword do not works with ARROW functions


// Inshort this keyword cannot be used in normal functions as well as in ARROW functions.

() => {}    // basic SYNTAX of EXPLICIT arrow function (i.e explicitly mentioning return keyword)

const sum = (num1, num2) => {
    return num1 + num2
}
console.log(sum(3,4));

// EXAMPLE of IMPLICIT return with ARROW function.( used when function is of just one line)
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(2,2));

//Another way of IMPLICIT return with ARROW function.
const add = (num1, num2) => ( num1 + num2 );
console.log(add(3,3));

// IMPORTANT takeaway from above 3 example is that if we are using {} eith arrow function the RETURN keyword is must but if using () or NO brackets then RETURN keyword is not required.

const task = (num1, num2) => {username: "shashank"} 
console.log(task(1,1));  // gives undefined because in IMPLICIT we cannot use {} brackets. we need to wrap it with () like in next example

const task1 = (num1, num2) => ( {username: "shashank"} )
console.log(task1(1,1)); 

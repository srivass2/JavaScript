// function myName() {        // function definition
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("N");
//     console.log("K");

// }
//myName;   // if we type myName then this is just the function reference but to execute it we add () like myName();

function addNumber(number1, number2){    // number1 and number2 are called PARAMETERS
    console.log(number1 + number2);
}
addNumber(3, 4);    // 3, 4 are called ARGUMENTS
addNumber(3, "4");
addNumber(3, "a");

const result = addNumber(4, 5);
console.log(`value of result is ${result}`);   // here value of result WILL NOT be 9 since we are not returning the output from the function 

//+++++++++++++++++++++++++++ how to implement RETURN statement in function ++++++++++++++++++++++

function addNum(num1 , num2) {
    
    let resultNum = num1 + num2 ;
    return resultNum;             
}
const resultFun = addNum(4, 5); // output of the function can ONLY be stored in another variable  when we return it.
console.log(`value of result is ${resultFun}`); 

//Alternative way

function addNum(num1 , num2) {
    return num1 + num2 ;
}
const sum = addNum(3, 7);
console.log(`value of result is ${sum}`); 

//++++++++++++++++++++++ More ways to use RETURN ++++++++++++++++++++++++++++++

function userLogIn(userName){
    return `${userName} has logged In`;   // INTERESTING way to use return
}

console.log(userLogIn("Shashank"));
console.log(userLogIn()); // the output will be "undefined" since no argument or value is passed.


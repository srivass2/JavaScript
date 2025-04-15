let a = 10; // global scope
const b = 20;  // global scope

if(true) {
    let c = 100;   // Local scope
    const d = 200;  // local scope
    let a = 300;
    console.log(`Inner Scope a: ${a}`)
}

console.log(a);
console.log(b);
//console.log(c); // throws error at this which is correct since (c) has local scope within if block
//console.log(d); // throws error at this which is correct since (d) has local scope within if block

//+++ INTERESTING FACT  global scope in browser console is different from global scope used in node(code)


// Scope in functions

function one() {
    const username = "Shashank";
    function two() {
        const website = "Youtube";
        console.log(username); // this got printed because it acted as global variable for function two().
    }
    //console.log(website); // throw error here since website is local for function two hence cannot be accessed outside it.
    two();
}
one();
//console.log(username); // where as when we access it outside function one() it gives error coz the variable had scope till inside the Function.

// scope inside if condition

if(true) {
    const username = "shashank";
    if (username === "shashank") {
        const website = "youtube";
        console.log(`${username} ${website}`)
    }
    //console.log(website); // error expected since the variable is used outside the scope.
}
//console.log(username); // error expected since the variable is used outside the scope.


//+++++++++++++++++++++++++ INTERESTING FACT ++++++++++++++++++++++++++++++++++++++

addOne(5);
function addOne(num) {
    return num + 1;
}

//addTwo(6);
const addTwo = function(num){
    return num + 2;
}
addTwo(6);

// Above code runs fine even although addOne function is called before function definition but if we call addTwo function before the addTwo function definition it will throw error BECAUSE addTwo function is initialised differently, if it was the same way as addOne function then no error e.g below code for addThree.

addThree(6);
function addThree(num){
    return num + 3;
}

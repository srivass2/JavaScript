/*                                 LEXICAL SCOOPING                      */

function outer(){
        let username = "hitesh"
        //console.log("OUTER", secret);
        function inner(){
            let secret = "my123"
            console.log("inner", username);  // variable of parent function can be access by inner function
        }
        function innerTwo(){
            console.log("innerTwo", username); // variable username can be access by inner function
            //console.log(secret);  // inner function varibale do not have score outide the function
        }
        inner()
        innerTwo()

    }
    outer()
    //console.log("TOO OUTER", username); // scope of the vairable is only inside the function


/*                            CLOSURE                             
A closure is a function bundled together with its surrounding (enclosing) variables, even after the outer scope has closed.
OR 
A closure is when a function remembers the variables around it — even after those variables are supposed to be gone.

*/

function makeFunc() {
        const name = "Mozilla";

        return function displayName() {   // another way to return function value
            console.log(name);
        }
        //return displayName;    // one way of returning the function value
    }

    const myFunc = makeFunc();
    myFunc();

// In above example the function displayName() remembers the variable name even though the outer function makeFun() is finished.    





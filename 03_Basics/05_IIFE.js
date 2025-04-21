// variable scope in IIFE function
(() => {
    let message = "hello";
    console.log(message);
}) ();
//console.log(message);

// variable scope in Normal function
function fun() {
let message1 = "shashank";
console.log(message1);
}
//console.log(message1);

/* In both the above functions, scope of variable is same i.e both variable cannot be accessed out the function but the difference lies below:

1) IIFE(Immediately Invoked Function Expression) is a function that get executed immediately without calling it later. e.g You define a function, and instead of saving it for later, you run it right away—like cooking and eating instantly instead of storing it.

2) IIFE function doesnot have a name so also one of the reason why executed immeditely.

3) It also prevents from global scope variable  pollution.

Summary of Difference

Feature	                          Regular Function	              IIFE
Needs a name?	                    Yes (usually)	               No
Needs to be called?	                Yes	                           No — calls itself automatically
Scope isolation?	                Yes	                           Yes
When does it run?	                When you call it	           Right away after it's defined


Ques. So if the variable scope wise both IIFE and normal functions are same then how IIFE is helping in prevention from  global space pollution ?

Ans. IIFE is used when you:Don’t need to reuse the function. Just want to do something quickly, once. Want to keep your code clean, by avoiding:Declaring extra function names or Forgetting to call the function.
IIFE has No global function name. One-time setup done instantly. Nothing leaks out into global space — even the function name is gone!

Inshort, IIFE: perfect for one-time tasks that you want to run immediately and keep everything inside private — no names, no clutter, no pollution.

for example: DB connection.
*/


// How to pass value in IIFE.

((name) => {
    console.log(`DB connection of ${name}`);
}) ("sam");

// IMPORTANT -- To run multiple IIFEs in one file then each IIFE should have ; at the end

// INTERESTING FACT---- IIFEs can also have name. This basically help in debugging instead being annonymous.. example:

(function chai() {          // Normal named IIFE function
    console.log(`named IIFE connection..`);
}) ();

(code = () => {             // Arrow named IIFE function
    console.log("named IIFE with ARROW function");
}) ();

/* Key Point:
✅ The name of a named IIFE is only available inside the IIFE itself.
❌ It does not go into the global scope.
Sometimes, for debugging or stack traces, a name helps.
example:

So you get:
ReferenceError: loadData is not defined
    at <anonymous>:1:1

Rather than:
ReferenceError: <anonymous> is not defined

Hence it still doesn’t pollute the global space — which is the main goal of IIFE!
*/

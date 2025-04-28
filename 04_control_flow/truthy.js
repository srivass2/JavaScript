const email = "s@hotmail.com";
if (email) {
    console.log("got the email");
}
else {
    console.log("Not in email");    
}
// In the above example we can see that without checking any condition in the if statement it still assumed that the condtion is true because email variable had some value. 
const email1 = "";
if (email1) {
    console.log("got the email");
}
else {
    console.log("Not in email");    
}
// And in the above code when we made email1 = "" then the output was "Not in email" because the code assumed it to be false in the if condition.

const email2 = [];
if (email2) {
    console.log("got the email");
}
else {
    console.log("Not in email");    
}
// Similarly when in the above code when we made email2 = [] then the output was "got the email" because the code assumed it to be true in the if condition.

/* In the above 3 cases we saw different behaviour i.e in some case it assumes as condition is TRUE and in some case it is assuming it as FALSE. Hence, what decides when if statement should be considered TRUE or FLASE ?

ANSWER: Yes, there is a rule where based on the Truthy values and Falsy values it gets decided to assume when if condtion is TRUE or FALSE.

Falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy Values: true, "0", 'false', " ", [], {}, function() {}

We see that truthy values has some similar values from falsy but the difference is if anything inside "" it converts to truthy value.
*/

//if statement to check object.

const objectNew = {
    mail : "a@yahoo.com",
    name : "sam"
}
if (objectNew.mail.length === 0) {
    console.log("Object is empty");
    
} else {
    console.log(`Object has email ${objectNew.mail.length}`);
    
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*               Nullish Coalescing Operator (??) : null undefined

This operator basically checks for null and undefined.
The ?? operator gives you a default value only when the first value is null or undefined.
If the left side is null or undefined, it uses the right side.
Otherwise, it keeps the left side.
   
                                   Example 1
let name;
let userName = name ?? "Guest";
console.log(userName); 
    Output: Guest

Explanation:
name is undefined, so Guest is used. 

                                  Example 2
let name = "Alice";
let userName = name ?? "Guest";
console.log(userName);
    Output: Alice

Explanation:
name has a value ("Alice"), so it keeps it. It does not use "Guest".

                             Real-world Coding Scenarios

1️⃣ Sometimes users don’t enter data. You want to show something reasonable instead of showing "undefined".
Example:

function greetUser(name) {
  let finalName = name ?? "Guest";
  console.log(`Hello, ${finalName}!`);
}

greetUser("Alice");  // Hello, Alice!
greetUser();         // Hello, Guest!

✅ If the user didn’t provide a name, we greet them as "Guest" instead of crashing or showing "undefined".
----------------------------------------------------------------------------------------------

2️⃣ Dealing with API data (backend/frontend)
When you fetch data from a server, sometimes fields are missing or null.
Example:

let userProfile = {
  age: 25,
  city: null
};

let city = userProfile.city ?? "Unknown City";
console.log(city); 
// Output: Unknown City

✅ Instead of showing null to users, you display "Unknown City".
------------------------------------------------------------------------------------------------

3️⃣ Optional configuration settings
When building apps, sometimes users can customize settings. If they don't, you use defaults.
Example:

function setupApp(options) {
  let theme = options.theme ?? "light";
  console.log(`Theme set to: ${theme}`);
}

setupApp({ theme: "dark" });  // Theme set to: dark
setupApp({ });                // Theme set to: light

✅ Even if users don’t provide a theme, the app still works.


We could have used (||) i.e OR operator to do the same task. So what is the difference>
🧠 If you used || instead of ??, JavaScript would treat 0, false, or empty strings ("") as "missing" or null, which could be wrong.

?? is stricter — it only cares about null or undefined, not values like 0, false, or "".

Example using ??    */
function greetUser(name) {
  let finalName = name ?? "Guest";
  console.log(`Hello, ${finalName}! using ??`);
}

greetUser("");  //Output  Hello, ""!

//Example using ||
function greetUser1(name1) {
  let finalName1 = name1 || "Guest";
  console.log(`Hello, ${finalName1}! using ||`);
}

greetUser1("");  //Output Hello, Guest!

/*The difference we can see that || treated it as missing value hence gave output as guest, but ?? treated it as not null and gave "". Because || goes into checking if the value is truthy or falsy that is why the behavior changed in the output.
*/



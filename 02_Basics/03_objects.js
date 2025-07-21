// singleton (if an "object" is created using "constructor" then we call it "Singleton")

const mySym = Symbol();


// object Literals 

const jsUser = {
    name : "Shashank",
    "full name" : "Shashank Srivastava",
    age : 18,
    [mySym] : "myKey1",
    location : "Heuston",
    email : "shashank@google.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Wednessday"],
    greeting : function () {
        console.log("Hello JS");
    },
    greetingTwo : function() {
        console.log(`Hello JS user ${this.name}`);
    }

}

console.log(jsUser.email);  // generally we access object by this way.

console.log(jsUser["email"]); // INTERSTING... This is Another way to access the object. Here we have used [""] because we are accessing it as a string. Since in the background the keys of object are stored as String with ""
console.log(jsUser["full name"]); // this expalin the above reasoning.

console.log(jsUser[mySym]); // access the symbol type.

jsUser.email = "shashank@chatgpt.com";
console.log(jsUser.email); // overreide value of a key in Object.


//Object.freeze(jsUser); // we can freeze the object and values cannot be changed.
jsUser.email = "shashank@microsoft.com";
console.log(jsUser.email);

console.log(jsUser);

// We can also define functions inside the object and it is treated as normal any other elements in the object.
console.log(jsUser);

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// IMPORTANT.... mostly we access object using (.) but ONLY in some cases we use [""] or [](incase of Symbols)
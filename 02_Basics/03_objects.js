// singleton (if an "object" is created using "constructor" then we call it "Singleton")






// object Literals 
const jsUser = {
    name : "Shashank",
    "full name" : "Shashank Srivastava",
    age : 18,
    location : "Heuston",
    email : "shashank@google.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Wednessday"]

}

console.log(jsUser.email);  // generally we access object by this way.

console.log(jsUser["email"]); // INTERSTING... This is Another way to access the object. Here we have used [""] because we are accessing it as a string. Since in the background the keys of object are stored as String with ""
console.log(jsUser["full name"]); // this expalin the above reasoning.
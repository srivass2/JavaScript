//                  Object literal 


const user = {
    username: "shashank",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Got user details from DB`);
        console.log(`username: ${user.username}`);
        console.log(`username: ${this.username}`);
        console.log(user);
        console.log(this);       
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());

/* in the above code, i used two different ways to access the username in the object in line no. 8(by object name) and 9(using this).
Both giving same output.
But the right way is to use this keyword because in future if the object variable changes or if the object is passed on to another then the hardcoded object name will give error.
*/


//                Constructor function
// constructor function always gives new instance rather than working on same instance inorder to avoid overwrite on original values. Let see with example of both.
/* Things to know
    Step 1) When we use new keyword, an empty object is created called instance.
    Step 2) A constructor function is called due to the new keyword. It packs all the arguments and give us.
    Step 3) this keyword injects all the arguments.
    Step 4) Now we can access al those arguments.
 */   



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = () => {
        console.log(` welcome ${this.username}`); // we can have normal functions inside a constructor as well
        
    }
    //return this;   // this step was only required when we did not use new keyword. When using new keyword it implicitly returns. explicit return statement is not required.

}
const userOne = User("sam", 12, true);
const userTwo = User("shash", 12, false);// here saw that the original values got override.
console.log(userOne);

// now using the constructer with new keyword solves this problem.

const userOne1 = new User("sam", 12, true);
const userTwo2 = new User("shash", 12, false);
console.log(userOne1);
console.log(userTwo2);
console.log(userOne1.greetings());

console.log( userOne1 instanceof User); // this is true coz userOne1 object was constructed with constructor User.
// i.e  instanceof operator tests the presence of constructor.prototype in object's prototype chain. This usually means object was constructed with constructor.





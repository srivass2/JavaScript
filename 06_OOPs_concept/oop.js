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


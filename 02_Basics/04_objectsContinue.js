//const tinder = new Object();   // This is a singleton Object
//console.log(tinder);

const newTinder = {}   // This is non-singleton Object or the object literal

newTinder.id = "123abc"
newTinder.name = "sammy"
newTinder.isLoggedIn = false

console.log(newTinder);

// ++++++++++++++++++++++++++++++++++++++++++ Nested Object +++++++++++++++++++++++++++++++++++++
const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Shashank",
            lastName : "srivastava"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName);

//++++++++++++++++++++++++++++++++ Merging of Objects +++++++++++++++++++++++++++++++++++++++++++++

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {4: "a", 5: "b"}

const obj4 = {obj1 , obj2, obj3 } // not an ideal way to merge
console.log(obj4)

const obj6 = Object.assign({}, obj1, obj2, obj3) // INTERESTING.. Another way of merging multiple Objects.
console.log(obj6)

const obj5 = {...obj1, ...obj2, ...obj3}  // merging multiple object using spread operator (MOSTLY used)
console.log(obj5)

// +++++++++++++++++++++++++++++Some more methods in object mostly used.++++++++++++++++++++++++++++

console.log(Object.keys(newTinder)); // if we notice the output is stored in an array bydefault. So we can iterate it easily using the same way we do it in Arrays.
console.log(Object.values(newTinder));

console.log(Object.entries(newTinder));

console.log(newTinder.hasOwnProperty("isLoggedIn")); // hasOwnProperty method can be seen easily on browser console when we see prototypes.

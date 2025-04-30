// forEach() is a powerful function that works best for Arrays. It automatically understands the values in strings and Performs the specified action for each element in an array.


//using normal callbackFn.
const arr = ["js", "ruby", "c++", "python"];
arr.forEach( function (val) {
    console.log(val);    
})

//using ARROW callbackFn
const arr2 = ["js", "ruby", "c++", "python"];
arr2.forEach( (item) => {
    console.log(item);  

})

console.log("                                                ");


// we can also use predefined functions also in forEach.
function printMe(item) {
    console.log(item);   
}
arr.forEach(printMe);


//.forEach not only just hold values from the array but it also access the index of the array and the entire array itself also.
arr.forEach((item, index, array) => {
    console.log(item,index, array);    
})// we can clearly see in the output how it displays all three.


//Case of multiple objects in an array. generally this case is when we get data from DB it comes in the form of ARRAY and each value in the data is an object.
const myCoding = [
    {
        LanguageName: "JAvaScript",
        LanguageFileName: "js"
    },
    {
        LanguageName: "Java",
        LanguageFileName: "java"
    },
    {
        LanguageName: "Python",
        LanguageFileName: "py"
    }
]
myCoding.forEach((item) =>{
    console.log(item.LanguageFileName);
    //console.log(item.LanguageName);
}) // here we can see that very conveniently we can access the key and values of the object in an array using forEach().
    

/* As we saw that we used Arrays with both for-Of and .forEAch(). then when to use which :

Summary Table

Feature	                                    for...of	         .forEach()
Supports break/continue                   	✅ Yes	               ❌ No
Works with async/await	                    ✅ Yes	               ❌ Not reliably
Functional style	                        ❌ No                   ✅ Yes
Readability	                                ✅ Yes	               ✅ Yes


✅ Recommendation:
Use for...of if you need control over the loop (early exit, await, etc.).

Use .forEach() for simple operations where you don't need to break or await.

*/
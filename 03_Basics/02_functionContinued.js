//+++++++++++++++++++++ Use of Rest(...) and spread(...) operator in function ++++++++++++++++++++++
// both looks same but the difference is in their usage.

function calculateCartItem(num1) {

    return num1;
}
console.log(calculateCartItem(200));

// In real case scenario we add multiple items in cart so how to pass that in the funtion as argument since we cannot know how many variable we need on run time.

function calculateCartItemRestOperator(...num1) { // by using rest(...) operator we can achieve it.

    return num1; // we saw that all the values returned in a single array without storing in multiple variable
}
console.log(calculateCartItemRestOperator(200, 400, 500, 20000));

// how to access object inside a function

const user = {
    username : "Shashank",
    price : 200
}
function handleObject(anyobject) {
    console.log(`The user's name is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleObject(user);

// how to access arrray inside a function

const newArray = [100, 200, 300, 400];
function getSecondArray(getArray) {
    return getArray[1];
}
console.log(`Second element in the array is ${getSecondArray(newArray)}`)
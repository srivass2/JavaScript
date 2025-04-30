//In real world every time we use forEach its not necessary that we only print the values some times we may need the values to store in some other variable and perform some action. So in case where we need to return the value we use .filter() instead of .forEach().

const num = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];
const data = num.filter( (item) => {
    return item > 4;
})
console.log(data);
// here we saw that we were able to use callbackFn and return the value.

//The above task can be done using .forEAch() also but will have a different approach:
const num1 = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];
const newNum = []
num1.forEach( (item) => {
    if (item > 4) {
        newNum.push(item);        
    }
})
console.log(newNum);

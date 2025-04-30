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


// workiing with array having multiple objects like real scenarios with FILTER. 
const myCoding = [
    {
        title: "Book One", genre: "History", publish: 1986,
        edition: 1996
    },
    {
        title: "Book two", genre: "Science", publish: 2011,
        edition: 2016
    },
    {
        title: "Book three", genre: "History", publish: 1981,
        edition: 1989
    }]

    //Case1:
    let mybook = myCoding.filter((bk) => bk.genre === "History")
    console.log(mybook);

    //Case2:
    let mybook1 = myCoding.filter((bk) => {
        return bk.publish >=2000
    })
    console.log(mybook1);

    //Case3:
    let mybook3 = myCoding.filter( (bk) => {
        return bk.publish >= 1995 && bk.genre === "Science"
    })
    console.log(mybook3);


 // workiing with array using .map() method( This method returns an array that contains the results)   
 const val = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];
 const numVal = val.map( (num) => num + 10);
 console.log(numVal);


 //++++++++++++++++++++++++ CHAINING ++++++++++++++++++++++++++++++++++++++++++++++++++

 // Chaining is a way where we can use multiple .map() and filter() methods one after the other.

 const val1 = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];
 const numVal1 = val1.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40);
 console.log(numVal1);


 //++++++++++++++++++++++++++++++ Reduce +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// this method is generally used in case where in the shopping cart we have multiple items and we need to find total bill of the cart. .reduce() also returns a value like .map() and .filter()

const newVal = [1, 2, 3];

// Way1:
const totalSum = newVal.reduce( function (acc, curr){
    return acc + curr ;
}, 0)
console.log(totalSum);

// Way2:
const totalVal = newVal.reduce( (acc, curr) => (acc + curr), 0)
console.log(totalVal);

// Reason for giving 0(it can be anyother value also based on the logic is required) is that it is the initial value which acc requires in the starting, after first iteration the value of acc becomes acc = acc + curr

//Lets take a real life scenario of shopping cart
const cart = [
    {
        itemName: "js Course", 
        price: 2999
    },
    {
        itemName: "python Course", 
        price: 999
    },
    {
        itemName: "mobile dev course", 
        price: 5999
    },
    {
        itemName: "data Science course", 
        price: 12999
    }]

const grandTotal = cart.reduce( (acc, item) => (acc + item.price),0);
console.log(grandTotal);
// Here we saw that just one line statement was able to add all the prices of the item in cart.    
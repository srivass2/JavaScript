/* In JS alomost everything is object.


If we try to access an array we will see it will have prototype{} and further again going inside prototype we will find more prototype untill it stops at an object.


array -------------------> Object -------> null
string ------------------> object -------> null

surprisingly functions() technically --------------> object ---------> null

hence JS is a prototyple language where it keeps on looking above(parent/grandparent) of it even if find what looking for.
*/
// for example

function multiplyBy5(num) {
    return num*5;

}
multiplyBy5.power = 3;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);



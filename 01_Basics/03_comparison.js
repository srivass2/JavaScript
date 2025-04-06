console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* It is recommended to compare between same dataType variable.
In this case the equality check like == and comparisons like > < >= <=  work diffently.
Comparisons convert null to a number, treating null as 0 that is why in (3) when null is compared to 0 it gives TRUE. because null is converted to number and it becomes 0. like wise (1) also gave FALSE since 0 > 0 is false.
WHERE AS for equality it doesnot convert hence in (2) where null is not equal to 0 so it gave FALSE. */

console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined <= 0);


// Hence AVOID such comparision in real case scenarios.


//===    strict check. i.e it check dataType as well as value.

console.log("2" === 2); // checks both dataType and Value hence returns FALSE.
console.log("2" == 2); // only checks value hence returns TRUE

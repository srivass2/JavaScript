const accountId = 123443;
let emailId = "abcd@yahoo.com";
var accountPassword = "12345"
accountCity = "Lucknow"  // not a recomended way to initialize without dataType
let accountState; // by default if not initialized then it has undefined value.

//accountId = 223344    // not allowed since it is const type.

/*
Donot use (var) dataType anymore. Because of the issue in block scope and functional scope
*/

emailId = "ss@gmail.com"
accountPassword = "98765";
accountCity = "Dublin"

console.table([accountId, emailId, accountPassword, accountCity, accountState]); // console.table([]) prints the values in a tabular format

console.log(accountId)
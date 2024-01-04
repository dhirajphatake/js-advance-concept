const accountId = 226204;
let accountEmail = "dhirajphatake185@gmail.com";
var accountPassword = "123";
accountCity = "Ahmednagar";
let accountState;

// accountId = 12; //we cannot change const variables
accountEmail = "dhiraj@gmail.com";
accountPassword = "321";
accountCity = "Pune";

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope qand functional scope
*/

console.table([accountId ,accountEmail, accountPassword, accountCity, accountState])
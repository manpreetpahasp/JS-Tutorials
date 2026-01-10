const account_ID = 144562
let accountEmail = "reet@gmailcom"
var accountPassword = "12345"
accountCity = "Jalandhar"
let accountState;

// account_ID = 3// Not Allowed means const does not change

accountEmail = "manpreet@gmail.com"
accountPassword = "09876"
accountCity = "Delhi"

console.log(account_ID);

/*
Prefer not to use var 
because of issue in block scope and funtional scope
*/

console.table([account_ID,accountEmail,accountPassword,accountCity,accountState]);
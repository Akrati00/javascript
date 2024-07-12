const accountId = 144553
let accountEmail = "akrati@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed // TypeError 

accountEmail = "ab@google.com"
accountPassword = "22213232"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity])




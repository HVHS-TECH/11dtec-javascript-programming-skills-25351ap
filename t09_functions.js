/****************************
 Task 9
 Alice
 14-05-2025
 Learing how to use functions in javascript
 ****************************/
console.log("Running t08_for_loop.js")

//Variables
let randomnum = 0;

/****************************
 Main code
 ****************************/
console.log("Starting loop")
for (count = 0; count < 5; count ++) {
    let currentnum = prompt ("Type a random number", 0);
    randomnum = randomnum + (Number(currentnum));
}
console.log("Loop stopped!")
console.log("Your random number is " + randomnum)


 /****************************
 Functions
 ****************************/
function askUserName() {
    UserName = prompt("What is your name?");
    
}
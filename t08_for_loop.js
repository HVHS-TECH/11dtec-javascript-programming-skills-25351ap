/****************************
 Task 8
 Alice
 29-04-2025
 Learing how to do for loops
 ****************************/
console.log("Running t08_for_loop.js");

//Variables
let randomnum = 0;

/****************************
 Main code
 ****************************/
console.log("Starting loop")
for (count = 0; count < 5; count ++) {
    let currentnum = prompt ("Type a random number", 0);
    randomnum = randomnum + currentnum;
}
console.log("Your random number is" + randomnum)
console.log("Loop stopped!")


 /****************************
 Functions
 ****************************/
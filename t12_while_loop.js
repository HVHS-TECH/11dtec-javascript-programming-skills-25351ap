/****************************
 Task 12
 Alice
 15-05-2025
 Learing how to use a while loop to repeat a section of code
 ****************************/
console.log("Running t12_while_loop.js");

//Variables
var loop = prompt("Would you like to continue the loop? \nTo continue enter y.");

/****************************
 Main code
 ****************************/
while (loop == "y") {
    alert("Loop will repeat again.")
    loop = prompt("Would you like to continue the loop? \nTo continue enter y.");
}

alert("End of loop.")

while (confirm("Would you like to continue the loop?") == true) {
    alert("Loop will repeat again.")
}

alert("End of loop.")


 /****************************
 Functions
 ****************************/
/****************************
 Task 10
 Alice
 14-05-2025
 Learing how to activate the javascript with an html start button
 ****************************/
console.log("Running t10_activate_via_button.js")

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
alert(askUserName());
alert(askUserAge());
alert(askUserMoney());

 /****************************
 Functions
 ****************************/
function askUserName() {
    UserName = prompt("What is your name?");
    alert("Welcome to my program " + UserName + "!");
}
function askUserAge() {
    UserAge = prompt("How old are you?");
    alert("You are " + UserAge + " years old.");
}
function askUserMoney() {
    UserPocketMoney = prompt("How much pocket money do you have?");
    if (UserPocketMoney > 4){
    alert("You have " + UserPocketMoney + " dollars. That is enough to purchase a 4 dollar chocolate bar. YAY!");
  } else {
    alert("You have " + UserPocketMoney + " dollars. That is not enough to purchase a 4 dollar chocolate bar. :(");
  }
}
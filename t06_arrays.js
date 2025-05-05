/****************************
 Task 6
 Alice
 06-05-2025
 Learing to use arrays in javascript
 ****************************/
 console.log("Running t05_alerts_prompts.js");
 //Variables
 let username = prompt ("What is your name?");
 let userAge = prompt ("How old are you?");
  let userPocketMoney = prompt("How much pocket money do you have?");
  let currentYear = 2025
  let classArray = ["You loath chocolate", "Chocolate is meh", "Chocoloate is pretty good", "Chocolate is the best thing EVER!!!!"];
  let choice = prompt ("On a scale of 0-3 how much do you like chocolate?");

 /****************************
  Main code
  ****************************/
  console.log("Hi", username);
  console.log("As of", currentYear, "you are", userAge, "years old");
  console.log("You were born in", currentYear - userAge);
  console.log("In 10 years you will be", Number(userAge) + 10, "years old");
  console.log("You have", userPocketMoney, "dollars");
  console.log("Half of your money is", userPocketMoney / 2, "dollars");
  alert("Welcome user to my first Javascript program!");
  alert("Hi Bob \nAs of 2025 you are 57 years old \nYou were born in 1968 \nIn 10 years you will be 67 \nYou have 30 dollars \nHalf of your money is 15");
  alert("Your "+choice+" is "+classArray[choice]);
  /****************************
  Functions
  ****************************/
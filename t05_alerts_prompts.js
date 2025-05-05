/****************************
 Task 5
 Alice
 02-05-2025
 Learing how to do alerts and propts in javascript
 ****************************/
 console.log("Running t05_alerts_prompts.js");
 //Variables
 let username = prompt ("What is your name?");
 let userAge = prompt ("How old are you?");
  let userPocketMoney = prompt("How much pocket money do you have?");
  let currentYear = 2025

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
  alert("Hi Jerimah the second, \nAs of, currentYear, you are, userAge, years old, \nYou were born in, currentYear - userAge, \nIn 10 years you will be, userAge + 10, years old, \nYou have, userPocketMoney, dollars, \nHalf of your money is, userPocketMoney / 2");
  alert(" Hi " +username+ " \nAs of " +currentYear+ " you are " +userAge+ " years old \nYou were born in " +currentYear - userAge+ " \nIn 10 years you will be " +Number(userAge) + 10+ " years old \nYou have " +userPocketMoney+ " dollars \nHalf of your money is " +userPocketMoney / 2);
  /****************************
  Functions
  ****************************/
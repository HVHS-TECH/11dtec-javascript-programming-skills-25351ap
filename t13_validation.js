/****************************
 Task 13
 Alice
 27-05-2025
 Learing to only allow valid input from the user
 ****************************/
console.log("Running t13_validation.js")

//Variables
let randomnum = 0;
let userName;
let userAge;
let userPocketMoney;
let userNameInvalid = true;
let userAgeInvalid = true;
let userPocketMoneyInvalid = true;

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
function start() {
    userName = askUserName();
    userAge = askUserAge();
    userPocketMoney = askUserMoney();
}


 /****************************
 Functions
 ****************************/
function askUserName() {
    userName = prompt("Please enter your name.");
    while (userNameInvalid) {
        if (userName == null) {
            break;
        }
        else {
            if (userName == "" || userName == " " || (!isNaN(userName))) {
                userName = prompt("Error! \nInvalid user input. \nPlease enter a valid user name.");
            }
            else {
                userNameInvalid = false;
            }
        }
    }
    alert("Hello " + userName + ".");
}
function askUserAge() {
    userAge = prompt("Please enter your age.");
    while (userAgeInvalid) {
        if (userAge == null) {
            break;
        }
        else {
            if (userAge == "" || userAge == " " || (isNaN(userAge)) || userAge <= 0 || userAge >= 130) {
                userAge = prompt("Error! \nInvalid user input. \nPlease enter a valid user age between 0 and 130.");
            }
            else {
                userAgeInvalid = false;
            }
        }
    }
    alert("You are " + userAge + " years old.");
}
function askUserMoney() {
    userPocketMoney = prompt("How much pocket money do you have?");
    while (userPocketMoneyInvalid) {
        if (userPocketMoney == null) {
            break;
        }
        else {
            if (userPocketMoney == "" || userPocketMoney == " " || (isNaN(userPocketMoney)) || userPocketMoney <= 0 || userPocketMoney >= 6) {
                userPocketMoney = prompt("Error! \nInvalid user input. \nPlease enter a valid user pocket money between 1 and 5.");
            }
            else {
                userPocketMoneyInvalid = false;
            }
        }
    }
  if (userPocketMoney == 1) {
        alert("Congratulations! \nYou have enough pocket money to buy a $1 mars bar.");
    }
    else if (userPocketMoney == 2) {
        alert("Congratulations! \nYou have enough pocket money to buy a $2 moro bar.");
    }
    else if (userPocketMoney == 3) {
        alert("Congratulations! \nYou have enough pocket money to buy a $3 King sized chrunchy.");
    }
    else if (userPocketMoney == 4) {
        alert("Congratulations! \nYou have enough pocket money to buy a $4 Dairy milk block.");
    }
    else if (userPocketMoney == 5) {
        alert("Congratulations! \nYou have enough pocket money to buy a $5 Lindt block.");
    }
}
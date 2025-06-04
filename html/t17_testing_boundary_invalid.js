/****************************
 Task 17
 Alice
 04-06-2025
 Learing to use Javascript to change html 
 ****************************/
console.log("Running t17_testing_boundary_invalid.js")

//Variables
let randomnum = 0;
let userName;
let userAge;
let userPocketMoney;
let userNameInvalid = true;
let userAgeInvalid = true;
let userPocketMoneyInvalid = true;
const MINIMUM_MONEY = 1;
const MAXIMUM_MONEY = 5;
const MINIMUM_AGE = 0;
const MAXIMUM_AGE = 130;
const MAXIMUM_POCKET_MONEY = 10;
const MINIMUM_POCKET_MONEY = 0;
let chocolateArray = ["Mars bar", "Moro bar", "King Size Crunchy", "Dairy Milk Block", "Lindt Block"];
let chocolatePriceArray = ["2", "2.50", "3", "6", "7"]
let message = ("The different kinds of chocolate bars available are:");

/****************************
 Main code
 ****************************/
console.log("Starting loop")
for (count = 0; count < 5; count++) {
    let currentnum = prompt("Type a random number", 0);
    randomnum = randomnum + (Number(currentnum));
}
console.log("Loop stopped!")
console.log("Your random number is " + randomnum)
askUserName()
userAge = askUserAge();
for (i = 1; i < chocolateArray.length; i++) {
    message = message + "\nChocolate bar number " + i + " is " + chocolateArray[i];
}
alert(message);
askUserPocketMoney()
if (userPocketMoney < chocolatePriceArray[0]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means you can not afford a chocolate bar.")
}
else if (userPocketMoney == chocolatePriceArray[0]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $2 Mars bar.")
}
else if (userPocketMoney < chocolatePriceArray[1]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $2 Mars bar.")
}
else if (userPocketMoney == chocolatePriceArray[1]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $2.50 Moro bar.")
}
else if (userPocketMoney < chocolatePriceArray[2]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $2.50 Moro bar.")
}
else if (userPocketMoney == chocolatePriceArray[2]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $3 King Size Crunchy.")
}
else if (userPocketMoney < chocolatePriceArray[3]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $3 King Size Crunchy.")
}
else if (userPocketMoney == chocolatePriceArray[3]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $6 Dairy Milk Block.")
}
else if (userPocketMoney < chocolatePriceArray[4]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $6 Dairy Milk Block.")
}
else if (userPocketMoney == chocolatePriceArray[4]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $7 Lindt Block.")
}
else if (userPocketMoney > chocolatePriceArray[4]) {
    alert("Your current pocket money amount is $" + userPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $7 Lindt Block.")
}
function start() {
    userName = askUserName();
    if (userName == null) {
        return;
    }
    userAge = askUserAge();
    if (userAge == null) {
        return;
    }
    userPocketMoney = askUserMoney();
    if (userPocketMoney == null) {
        return;
    }
}
function clicks() {
    testing.innerHTML="Button pressed";
}


/****************************
Functions
****************************/
function askUserName() {
    userName = prompt("Please enter your name.");
    while (userNameInvalid) {
         if (userName == null) {
        return;
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
            return;
        }
        else {
            if (userAge == "" || userAge == " " || (isNaN(userAge)) || userAge <= MINIMUM_AGE || userAge >= MAXIMUM_AGE) {
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
            return;
        }
        else {
            if (userPocketMoney == "" || userPocketMoney == " " || (isNaN(userPocketMoney)) || userPocketMoney <= MINIMUM_MONEY || userPocketMoney >= MAXIMUM_MONEY) {
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
function askUserPocketMoney() {
    userPocketMoney = prompt("How much pocket money do you have?");
    while (userPocketMoneyInvalid) {
        if (userPocketMoney == null) {
            return;
        }
        else {
            if (userPocketMoney == "" || userPocketMoney == " " || (isNaN(userPocketMoney)) || userPocketMoney <= MINIMUM_POCKET_MONEY || userPocketMoney >= MAXIMUM_POCKET_MONEY) {
                userPocketMoney = prompt("Error! \nInvalid user input. \nPlease enter a valid user pocket money between 0 and 10.");
            }
            else {
                userPocketMoneyInvalid = false;
            }
        }
    }
}
/****************************
 Task 16
 Alice
 03-06-2025
 Learing to how to exit the program if the user clicks cancel. 
 ****************************/
console.log("Running t16_cancel_and_exit.js")

//Variables
let randomnum = 0;
let UserName;
let UserAge;
let UserPocketMoney;
let UserNameInvalid = true;
let UserAgeInvalid = true;
let UserPocketMoneyInvalid = true;
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
alert(askUserName());
alert(askUserAge());
for (i = 1; i < chocolateArray.length; i++) {
    message = message + "\nChocolate bar number " + i + " is " + chocolateArray[i];
}
alert(message);
alert(askUserPocketMoney())
if (UserPocketMoney < chocolatePriceArray[0]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means you can not afford a chocolate bar.")
}
else if (UserPocketMoney == chocolatePriceArray[0]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $2 Mars bar.")
}
else if (UserPocketMoney < chocolatePriceArray[1]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $2 Mars bar.")
}
else if (UserPocketMoney == chocolatePriceArray[1]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $2.50 Moro bar.")
}
else if (UserPocketMoney < chocolatePriceArray[2]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $2.50 Moro bar.")
}
else if (UserPocketMoney == chocolatePriceArray[2]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $3 King Size Crunchy.")
}
else if (UserPocketMoney < chocolatePriceArray[3]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $3 King Size Crunchy.")
}
else if (UserPocketMoney == chocolatePriceArray[3]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $6 Dairy Milk Block.")
}
else if (UserPocketMoney < chocolatePriceArray[4]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $6 Dairy Milk Block.")
}
else if (UserPocketMoney == chocolatePriceArray[4]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $7 Lindt Block.")
}
else if (UserPocketMoney > chocolatePriceArray[4]) {
    alert("Your current pocket money amount is $" + UserPocketMoney + " \nThis means the most expensive chocolate bar you can a afford is a $7 Lindt Block.")
}
function start() {
    UserName = askUserName();
    UserAge = askUserAge();
    UserPocketMoney = askUserMoney();
}


/****************************
Functions
****************************/
function askUserName() {
    UserName = prompt("Please enter your name.");
    while (UserNameInvalid) {
        if (UserName == null) {
            return;
        }
        else {
            if (UserName == "" || UserName == " " || (!isNaN(UserName))) {
                UserName = prompt("Error! \nInvalid user input. \nPlease enter a valid user name.");
            }
            else {
                UserNameInvalid = false;
            }
        }
    }
    alert("Hello " + UserName + ".");
}
function askUserAge() {
    UserAge = prompt("Please enter your age.");
    while (UserAgeInvalid) {
        if (UserAge == null) {
            return;
        }
        else {
            if (UserAge == "" || UserAge == " " || (isNaN(UserAge)) || UserAge <= MINIMUM_AGE || UserAge >= MAXIMUM_AGE) {
                UserAge = prompt("Error! \nInvalid user input. \nPlease enter a valid user age between 0 and 130.");
            }
            else {
                UserAgeInvalid = false;
            }
        }
    }
    alert("You are " + UserAge + " years old.");
}
function askUserMoney() {
    UserPocketMoney = prompt("How much pocket money do you have?");
    while (UserPocketMoneyInvalid) {
        if (UserPocketMoney == null) {
            return;
        }
        else {
            if (UserPocketMoney == "" || UserPocketMoney == " " || (isNaN(UserPocketMoney)) || UserPocketMoney <= MINIMUM_MONEY || UserPocketMoney >= MAXIMUM_MONEY) {
                UserPocketMoney = prompt("Error! \nInvalid user input. \nPlease enter a valid user pocket money between 1 and 5.");
            }
            else {
                UserPocketMoneyInvalid = false;
            }
        }
    }

    if (UserPocketMoney == 1) {
        alert("Congratulations! \nYou have enough pocket money to buy a $1 mars bar.");
    }
    else if (UserPocketMoney == 2) {
        alert("Congratulations! \nYou have enough pocket money to buy a $2 moro bar.");
    }
    else if (UserPocketMoney == 3) {
        alert("Congratulations! \nYou have enough pocket money to buy a $3 King sized chrunchy.");
    }
    else if (UserPocketMoney == 4) {
        alert("Congratulations! \nYou have enough pocket money to buy a $4 Dairy milk block.");
    }
    else if (UserPocketMoney == 5) {
        alert("Congratulations! \nYou have enough pocket money to buy a $5 Lindt block.");
    }
}
function askUserPocketMoney() {
    UserPocketMoney = prompt("How much pocket money do you have?");
    while (UserPocketMoneyInvalid) {
        if (UserPocketMoney == null) {
            return;
        }
        else {
            if (UserPocketMoney == "" || UserPocketMoney == " " || (isNaN(UserPocketMoney)) || UserPocketMoney <= MINIMUM_POCKET_MONEY || UserPocketMoney >= MAXIMUM_POCKET_MONEY) {
                UserPocketMoney = prompt("Error! \nInvalid user input. \nPlease enter a valid user pocket money between 0 and 10.");
            }
            else {
                UserPocketMoneyInvalid = false;
            }
        }
    }
}
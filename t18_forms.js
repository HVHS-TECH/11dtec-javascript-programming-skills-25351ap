/****************************
 Task 18
 Alice
 06-06-2025
 Learing to use Javascript to change html 
 ****************************/
console.log("Running t18_forms.js")

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
formnameinput();
formageinput();
for (i = 0; i < chocolateArray.length; i++) {
    message = message + "\nChocolate bar number " + i + " is " + chocolateArray[i];
}
chocolatebars.innerHTML=message + "\nChocolate bar number " + i + " is " + chocolateArray[i];
formpocketmoneyinput()
if (input_pocket_money.value < chocolatePriceArray[0]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means you can not afford a chocolate bar.";
}
else if (input_pocket_money.value == chocolatePriceArray[0]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $2 Mars bar.";
}
else if (input_pocket_money.value < chocolatePriceArray[1]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $2 Mars bar.";
}
else if (input_pocket_money.value == chocolatePriceArray[1]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $2.50 Moro bar.";
}
else if (input_pocket_money.value < chocolatePriceArray[2]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $2.50 Moro bar.";
}
else if (input_pocket_money.value == chocolatePriceArray[2]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $3 King Size Crunchy.";
}
else if (input_pocket_money.value < chocolatePriceArray[3]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $3 King Size Crunchy.";
}
else if (input_pocket_money.value == chocolatePriceArray[3]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $6 Dairy Milk Block.";
}
else if (input_pocket_money.value < chocolatePriceArray[4]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $6 Dairy Milk Block.";
}
else if (input_pocket_money.value == chocolatePriceArray[4]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $7 Lindt Block.";
}
else if (input_pocket_money.value > chocolatePriceArray[4]) {
    afford.innerHTML="Your current pocket money amount is $" + input_pocket_money.value + " \nThis means the most expensive chocolate bar you can a afford is a $7 Lindt Block.";
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
    console.log("Button clicked.")
    testing.innerHTML="Congrats! \nYou pressed the button.";
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
    names.innerHTML="Hello " + userName + ".";
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
    ages.innerHTML="You are " + userAge + " years old.";
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
        pocketmoney.innerHTML="Congratulations! \nYou have enough pocket money to buy a $1 mars bar.";
    }
    else if (userPocketMoney == 2) {
        pocketmoney.innerHTML="Congratulations! \nYou have enough pocket money to buy a $2 moro bar.";
    }
    else if (userPocketMoney == 3) {
        pocketmoney.innerHTML="Congratulations! \nYou have enough pocket money to buy a $3 King sized chrunchy.";
    }
    else if (userPocketMoney == 4) {
        pocketmoney.innerHTML="Congratulations! \nYou have enough pocket money to buy a $4 Dairy milk block.";
    }
    else if (userPocketMoney == 5) {
        pocketmoney.innerHTML="Congratulations! \nYou have enough pocket money to buy a $5 Lindt block.";
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
function formnameinput() {
        names.innerHTML="Hello " + input_name.value + ".";
    }
function formageinput() {
        ages.innerHTML="You are " + input_age.value + " years old.";
    }
function formpocketmoneyinput() {
    pocketmoney.innerHTML="Your current pocket money balance is " + input_pocket_money.value + ".";
}
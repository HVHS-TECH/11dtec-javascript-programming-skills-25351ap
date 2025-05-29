/****************************
 Task 15
 Alice
 29-05-2025
 Learing to use arrays to sort a list of items and access different values 
 ****************************/
console.log("Running t15_array_sorting.js")

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
            break;
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
            break;
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
            break;
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
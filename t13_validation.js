/****************************
 Task 13
 Alice
 27-05-2025
 Learing to only allow valid input from the user
 ****************************/
console.log("Running t13_validation.js")

//Variables
let randomnum = 0;
let UserName;
let UserAge;
let UserPocketMoney;
let UserNameInvalid = true;
let UserAgeInvalid = true;
let UserPocketMoneyInvalid = true;

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
    UserName = askUserName();
    UserAge = askUserAge();
    UserPocketMoney = askUserMoney();
}


 /****************************
 Functions
 ****************************/
function askUserName() {
    while (UserNameInvalid) {
        UserName = prompt("Please enter your name.");
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
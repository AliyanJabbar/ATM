#!/usr/bin/env node
// import inquirer from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";
// let MyBalance = 10000; //Dollars
// let MyPinCode = 2468;
// console.log(`Your current balance is ${MyBalance}`); //here I use template literals
// const answer = await inquirer.prompt([
//   {
//     name: "pin", //here name, message and type are properties and should be written in the same manner
//     message: "Enter your pin",
//     type: "number",
//   },
// ]);
// if (answer.pin === MyPinCode) {
//   console.log("Correct pin code!!!");
//   let operationAns = await inquirer.prompt([
//     {
//       name: "operation",
//       message: "What do you want to do",
//       type: "list",
//       choices: ["Withdraw money", "Check Balance", "Fast Cash", "Deposit"],
//     },
//   ]);
//   if (operationAns.operation === "Withdraw money") {
//     let amountAns = await inquirer.prompt([
//       {
//         name: "amount",
//         message: "Enter amount to withdraw",
//         type: "number",
//       },
//     ]);
//     if (amountAns.amount <= MyBalance) {
//       MyBalance -= amountAns.amount;
//       console.log("your remaining balance is: " + MyBalance);
//     } else {
//       console.log("Insufficient Balance");
//     }
//   } else if (operationAns.operation === "Check Balance") {
//     console.log("Your balance is" + " " + MyBalance);
//   } else if (operationAns.operation === "Fast Cash") {
//     let fastcash = await inquirer.prompt([
//       {
//         name: "fastCash",
//         message: "Select amount of fast cash",
//         type: "list",
//         choices: [1000, 2000, 5000, 7000, 10000],
//       },
//     ]);
//     MyBalance -= fastcash.fastCash;
//     console.log("your remaining balance is:" + " " + MyBalance);
//   } else if (operationAns.operation === "Deposit") {
//     let Deposit = await inquirer.prompt([
//       {
//         name: "amount",
//         message: "Enter amount you want to deposit",
//         type: "number",
//       },
//     ]);
//     if (operationAns.operation === "Deposit") {
//       MyBalance += Deposit.amount;
//       console.log(`Your balance after deposit is: ${MyBalance}`); //here I have used template literals
//     }
//   }
// } else {
//   console.log("Incorrect pin code");
// }
//ATM 2 with some new features:
import inquirer from "inquirer";
let condition = true;
let currentBalance = 10000;
let MyPin = 2468;
let answer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "what is your pin?",
});
if (answer.pin === MyPin) {
    console.log("Correct Pin code!!!");
    while (condition) {
        let operationAnswer = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "what do you want to do?",
                choices: [
                    "Deposit",
                    "Withdraw",
                    "Check Balance",
                    "FastCash",
                    "Change Pin",
                    "exit",
                ],
            },
        ]);
        switch (operationAnswer.operation) {
            case "Deposit":
                {
                    let DepositAnswer = await inquirer.prompt([
                        {
                            name: "depositAnswer",
                            type: "number",
                            message: "How much amount you want to deposit?",
                        },
                    ]);
                    if (DepositAnswer.depositAnswer < 0) {
                        console.log("invalid deposit amount");
                    }
                    else {
                        currentBalance += DepositAnswer.depositAnswer;
                        console.log(`Your new balance is : ${currentBalance}`);
                    }
                }
                break;
            case "Withdraw":
                {
                    let WithdrawAnswer = await inquirer.prompt([
                        {
                            name: "withdrawAnswer",
                            type: "number",
                            message: "How much amount you want to withdraw?",
                        },
                    ]);
                    if (WithdrawAnswer.withdrawAnswer > currentBalance) {
                        console.log("Insufficient Balance");
                        console.log(`Your current balance is 10000`);
                    }
                    else {
                        currentBalance -= WithdrawAnswer.withdrawAnswer;
                        console.log(`Your remaining balance is : ${currentBalance}`);
                    }
                }
                break;
            case "Check Balance":
                {
                    console.log(`Your current balance is ${currentBalance}`);
                }
                break;
            case "FastCash":
                {
                    let FastCashAnswer = await inquirer.prompt([
                        {
                            name: "fastcashAnswer",
                            type: "list",
                            message: "Select Fast cash",
                            choices: [100, 500, 1000, 2000, 5000, 10000],
                        },
                    ]);
                    currentBalance -= FastCashAnswer.fastcashAnswer;
                    console.log(`Your remaining balance: ${currentBalance}`);
                }
                break;
            case "Change Pin":
                {
                    let ChangePinAnswer = await inquirer.prompt([
                        {
                            name: "changepinAnswer",
                            type: "number",
                            message: "input new pin",
                        },
                    ]);
                    MyPin = ChangePinAnswer.changepinAnswer;
                    console.log(`Your new pin is: ${MyPin}`);
                }
                break;
            case "exit":
                {
                    condition = false;
                }
                break;
            default: {
                console.log("something went wrong");
            }
        }
    }
}
else {
    console.log("Invalid Pin");
}

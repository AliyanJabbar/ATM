#!/usr/bin/env node

import inquirer from "inquirer";

let condition = true 
let currentBalance = 10000;

let MyPin = 2468;

let answer = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: "what is your pin?",
});

if (answer.pin === MyPin) {
  console.log("Correct Pin code!!!");

  while(condition){
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
        } else {
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
        } else {
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
        condition = false 
      }
      break;

    default: {
      console.log("something went wrong");
    }
  }
}
 } else {
  console.log("Invalid Pin");
}

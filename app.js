import inquirer from "inquirer";
let MyBalance = 10000; //Dollars
let MyPinCode = 2468;
console.log(`Your current balance is ${MyBalance}`); //here I use template literals
const answer = await inquirer.prompt([
    {
        name: "pin", //here name, message and type are properties and should be written in the same manner
        message: "Enter your pin",
        type: "number",
    },
]);
if (answer.pin === 2468) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "What do you want to do",
            type: "list",
            choices: ["Withdraw money", "Check Balance", "Fast Cash", "Deposit"],
        },
    ]);
    // console.log(operationAns)
    if (operationAns.operation === "Withdraw money") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount to withdraw",
                type: "number",
            },
        ]);
        if (amountAns.amount <= MyBalance) {
            MyBalance -= amountAns.amount;
            console.log("your remaining balance is: " + MyBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is" + " " + MyBalance);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select amount of fast cash",
                type: "list",
                choices: [1000, 2000, 5000, 7000, 10000],
            },
        ]);
        MyBalance -= fastcash.fastCash;
        console.log("your remaining balance is:" + " " + MyBalance);
    }
    else if (operationAns.operation === "Deposit") {
        let Deposit = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount you want to deposit",
                type: "number",
            },
        ]);
        if (operationAns.operation === "Deposit") {
            MyBalance += Deposit.amount;
            console.log(`Your balance after deposit is: ${MyBalance}`); //here I have used template literals
        }
    }
}
else {
    console.log("Incorrect pin code");
}

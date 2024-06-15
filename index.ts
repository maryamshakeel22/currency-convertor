#! /usr/bin/env node
//Shebang

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright.bold("\t\t <<<<<<<<<<<<<>>>>>>>>>>> \t"));
console.log(chalk.bgCyanBright.green.italic.bold("\t\t <<<Currency Convertor>>> \t"));
console.log(chalk.greenBright.bold("\t\t <<<<<<<<<<<<<>>>>>>>>>>> \t"))

//Declared variable to store condition for loop
let condition=true;

while(condition){
const currency:any = {
    USD:1,                  //Base Currency
    PKR:280,
    EUR:0.91,
    GBP:0.76,
    IMR:74.57,
    BDT:110.02,
    CNY:7.25,
    EGP:47.86,
    SAR:3.75,
    AED:3.67
}

let user_answer= await inquirer.prompt(
    [
        {
          name: 'from',
          type: 'list',
          message: chalk.blueBright('\n Enter from Currency'),
          choices: (['USD','PKR','EUR','GBP','IMR','BDT','CNY','EGP','SAR','AED']),
        },
        {
          name: 'to',
          type: 'list',
          message: chalk.blueBright('\n Enter to Currency'),
          choices: (['USD','PKR','EUR','GBP','IMR','BDT','CNY','EGP','SAR','AED']),
        },
        {
          name: 'amount',
          message: chalk.blueBright('\n Enter your amount'),
          type: 'number',
        },
    ]
)
let fromAmount  = (currency[user_answer.from])
let toAmount = (currency[user_answer.to])
let amount = (user_answer.amount)

let baseAmount =(amount/fromAmount)//USD Base Currency
let convertedAmount=(baseAmount * toAmount)
let roundAmount= Math.round(convertedAmount)
console.log(chalk.greenBright.bold(`\n You got ${roundAmount} ${user_answer.to} from your ${amount} ${user_answer.from}`));

let want_continue = await inquirer.prompt([
  {
    name:'continue',
    type:'list',
    message:chalk.blueBright(`\n Do you want to continue:`),
    choices:['Yes','No']
  }
])
want_continue.continue == 'Yes' ? (condition = true) : (condition = false)
};

console.log(chalk.greenBright.bold("\n\t\t <<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>> \t"));
console.log(chalk.bgCyanBright.yellowBright.bold("\t\t Thanks For Using Currency Convertor \t"))
console.log(chalk.greenBright.bold("\t\t <<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>> \t"));
import inquirer from "inquirer";

let myBalance = '10000';// dollar
console.log()
let myPin ="12345";

let pinAnswer = await inquirer.prompt([
    {
        message: "enter your pin",
        type: "number",
        name: "pin"
    }
])

if(pinAnswer === myPin){
    console.log('Correct Pin !!!');

    let operationAns = await inquirer.prompt([
           {
            message: "What do you wanna do",
            type: "list",
            name: 'operations',
            choices: ['withdraw','check balance'],
           }
           
    ])
}
else{
    console.log('Wrong Pin');
}
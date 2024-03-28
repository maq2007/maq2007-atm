import inquirer from "inquirer";

let myBalance = "10000";// dollar
console.log(myBalance);
let myPin = 12345;

let pinAnswer = await inquirer.prompt([
    {
        message: "enter your pin",
        type: "number",
        name: "pin",
    }
])

if(pinAnswer === myPin){
    console.log('Correct Pin !!');
}
else{
}

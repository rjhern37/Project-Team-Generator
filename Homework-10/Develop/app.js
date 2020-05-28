const inquirer = require("inquirer"); 

const fs = require("fs");




const path = require("path");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/intern.js");


const classes = {
    Manager,
    Engineer,
    Intern

}

// Make a set of questions for the user to fill out to populate the file/page
const managerQuestions = [
    

    {

        type: "input", 
        name: "ManagerName",
        message: "Who is the manager of this project?"

    },

    {

        type: "input", 
        name: "ManagerId",
        message: "Please enter the manager's ID #"

    },

    {

        type: "input", 
        name: "managerEmail",
        message: "Please enter the manager's Email."

    },

    {

        type: "input", 
        name: "role",
        message: "What is the manager's office number?"

    },

]





//Make sure to console log questions & manager objects. 


function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
        console.log(answers)
        const employee = new classes[answers.role]()



    })


}

init();



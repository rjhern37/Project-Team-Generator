const inquirer = require("inquirer"); 

const fs = require("fs");




// const path = require("path");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/intern.js");


// const classes = {
//     Manager,
//     Engineer,
//     Intern

// }

const teamMembers = [];

let manager;

let projectTitle;

// Make a set of questions for the user to fill out to populate the file/page
const managerQuestions = [
    

    {

        type: "input", 
        name: "managerName",
        message: "Who is the manager of this project?"

    },

    {

        type: "input", 
        name: "managerId",
        message: "Please enter the manager's ID #"

    },

    {

        type: "input", 
        name: "managerEmail",
        message: "Please enter the manager's Email."

    },

    {

        type: "input", 
        name: "managerOfficeNum",
        message: "What is the manager's office number?"

    },

    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of the team/project?"

    }

]

//Getting the Manager questions started
function init() {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        console.log(managerAnswers)
        manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNum )
        projectTitle = managerAnswers.projectTitle;
        console.log("Thank you, Now please answer some questions about any additional team members.");
        empInit()
    })
}

init();

//Set of questions to ask for other types of employees
const employeeQuestions = [
    

    {

        type: "list", 
        name: "employeeRole",
        message: "Please select a role for the employee.",
        choices: ["Engineer", "Intern"]

    },

    {

        type: "input", 
        name: "employeeName",
        message: "What is the employee's name?"

    },

    {

        type: "input", 
        name: "employeeId",
        message: "What is the employee's ID #?"

    },

    {

        type: "input", 
        name: "employeeEmail",
        message: "What is the employee's Email?"

    },

    {

        type: "input", 
        name: "employeeGitHub",
        message: "What is this employee's Git Hub Username?",
        when: (userInput) => userInput.employeeRole === "Engineer"

    },

    {

        type: "input", 
        name: "school",
        message: "What is the Intern's school Name?",
        when: (userInput) => userInput.employeeRole === "Intern"

    },

    {

        type: "confirm", 
        name: "newEmployee",
        message: "Additional Team members?"

    },

]





//Make sure to console log questions & manager objects. 




//Getting the employee questions started
function empInit() {
    inquirer.prompt(employeeQuestions).then((employeeAnswers) => {
        console.log(employeeAnswers)
        if (employeeAnswers.employeeRole === "Intern") {
            teamMembers.push(new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school));
        } else if (answers.employeeRole === "Engineer") {
            teamMembers.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGitHub))
        }
       })
}





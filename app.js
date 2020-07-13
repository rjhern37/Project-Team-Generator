const inquirer = require("inquirer"); 

const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/intern.js");
const Employee = require("./lib/Employee.js");


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
        // console.log(managerAnswers)
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
        message: "Would you like to add additional Team members?"

    },

]

//Getting the employee questions started
function empInit() {
    inquirer.prompt(employeeQuestions).then((employeeAnswers) => {
        // console.log(employeeAnswers)
        if (employeeAnswers.employeeRole === "Intern") {
            teamMembers.push(new Intern(employeeAnswers.employeeName, employeeAnswers.employeeId, employeeAnswers.employeeEmail, employeeAnswers.school));
            // console.log(teamMembers);
        }
         else if (employeeAnswers.employeeRole === "Engineer") {
            teamMembers.push(new Engineer(employeeAnswers.employeeName, employeeAnswers.employeeId, employeeAnswers.employeeEmail, employeeAnswers.employeeGitHub))
        }
        if (employeeAnswers.newEmployee === true) {
            empInit();
        } else {
            var main = fs.readFileSync('./templates/main.html', 'utf-8');

            main = main.replace(/{{teamTitle}}/g, projectTitle);

            var managerCard = fs.readFileSync("./templates/manager.html", "utf-8");

            managerCard = managerCard.replace("{{name}}", manager.getName());
            managerCard = managerCard.replace("{{role}}", manager.getRole());
            managerCard = managerCard.replace("{{id}}", manager.getId());
            managerCard = managerCard.replace("{{email}}", manager.getEmail());
            managerCard = managerCard.replace("{{officeNumber}}", manager.getOfficeNumber());
            

            var cards = managerCard;
            for(var i = 0; i < teamMembers.length; i++){
                var employee = teamMembers[i];
                cards += renderEmployee(employee);
            }

            main = main.replace("{{cards}}", cards);

            fs.writeFileSync("./output/team.html", main);

            console.log("The team.html has been generated in the output folder");

        }
       })
};


function renderEmployee(employee){
    if (employee.getRole() === "Intern"){
        var internCard = fs.readFileSync("./templates/intern.html", "utf-8")

        internCard = internCard.replace("{{name}}", employee.getName());
        internCard = internCard.replace("{{role}}", employee.getRole());
        internCard = internCard.replace("{{id}}", employee.getId());
        internCard = internCard.replace("{{email}}", employee.getEmail());
        internCard = internCard.replace("{{school}}", employee.getSchool());
        return internCard;
    } else if (employee.getRole() === "Engineer") {
        var engineerCard = fs.readFileSync("./templates/engineer.html", "utf-8");

        engineerCard = engineerCard.replace("{{name}}", employee.getName());
        engineerCard = engineerCard.replace("{{role}}", employee.getRole());
        engineerCard = engineerCard.replace("{{id}}", employee.getId());
        engineerCard = engineerCard.replace("{{email}}", employee.getEmail());
        engineerCard = engineerCard.replace("{{github}}", employee.getGithub());
        return engineerCard;
    }

};






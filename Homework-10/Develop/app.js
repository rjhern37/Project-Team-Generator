const inquirer = require("inquirer"); 

const fs = require("fs");

const path = require("path");

const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/intern.js");


const classes = {
    Manager,
    Engineer,
    Intern

}

// Make a set of questions for the user to fill out to populate the file/page
const questions = [
    

    {

        type: "input", 
        name: "name",
        message: "Please enter your name."

    },

    {

        type: "input", 
        name: "idNum",
        message: "Please enter your ID number."

    },

    {

        type: "input", 
        name: "email",
        message: "Please enter your Email."

    },

    {

        type: "input", 
        name: "role",
        message: "Which team member are you? Manager, Engineer, or Intern?"

    },

    {

        type: "input", 
        name: "numberOfUsers",
        message: "How many employees are on your team?"

    },

   

]





//Make sure to console log questions & manager objects. 


function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        const employee = new classes[answers.role]()
        console.log(employee)


    })


}

init();

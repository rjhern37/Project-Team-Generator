const inquirer = require("inquirer"); 

const fs = require("fs");


// Make a set of questions for the user to fill out to populate the file/page
const managerQuestions = [
    {

        type: "input", 
        name: "numberOfUsers",
        message: "How many employees are on your team?"

    },

    {

        type: "input", 
        name: "teamLeader",
        message: "Who is the project manager?"

    },

    {

        type: "input", 
        name: "numberOfUsers",
        message: "How many employees are on your team?"

    },

    {

        type: "input", 
        name: "numberOfUsers",
        message: "How many employees are on your team?"

    },

   

]


//Make sure to console log questions & manager objects. 
const engQuestions = [

{


}

]

const internQuestions = [

    {


    }


]


class emp

//Make a class for employees (also use a "default" like Nick showed us)
// class employees {

// };

function start(){
    inquirer.prompt(questions).then(answers) => {



    }


}
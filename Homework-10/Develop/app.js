const inquirer = require("inquirer"); 

const fs = require("fs");

//require the path package 
const path = require("path");

//require the path package 
const Employee = require("../Develop/lib/Employee");


// Make a set of questions for the user to fill out to populate the file/page
const questions = [
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
// const engQuestions = [

// {


// }

// ]

// const internQuestions = [

    


// ]




// function start(){
//     inquirer.prompt(questions).then(answers) => {



//     }


// }

function init() {
    inquirer.prompt(questions).then((answers) => {

        //  api.getUser(answers.githubName)


    
        api.getUser(answers.githubName).then(function (data) {
            let allData = { ...answers, ...data.data };
            
            //console.log(data.data);
            //console.log(allData)

            //let readMeMarkUp = generateMarkdown(allData);
            //generateMarkdown(allData);
            writeToFile("README.md", generateMarkdown(allData));
       })
    })


}

init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(reponse =>{
        if(reponse.contents.indexOf('Screenshots') > -1){
            return addScreenshots(response);
        }
        else {
            return response;
        }
    })
    .then(response => {
         if(response.contents.indexOf('Credits')> -1) {
             return addCredits(response);
         }
         else {
             return response;
         }
    })
    .then(answers => generateMarkdown(answers))
    .then(generateReadme => writeToFile('README.md', generatedReadme))
    .catch(err => {
        console.log(err);
    });

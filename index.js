// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a project title. (Required)',
        validate: input => {
             if(input) {
                 return true;
             }else  {
                 console.log("Please provide a project title.");
                 return false;
             }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username. (Required)',
        validate: input => {
            validateInput(input,message);
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter the name of the repo. (Required)',
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your application. (Required)',
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information for using your application. (Required)',
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Any additional sections you would like to include in your README?',
        choices : [
            {
                name :'Deployed Application',
                checked :false
            },
            {
                name : 'Installation',
                checked : false
            },
            {
                name: 'Screenshots',
                checked: true
            },
            {
                name: 'Built With',
                checked: true
            },
            {
                name: 'License',
                checked: false
            },
            {
                name: 'Contributing',
                checked: false
            },
            {
                name: 'Tests',
                checked: false
            },
            {
                name: 'Questions',
                checked: true
            },
            {
                name: 'Credits',
                checked: true
            },
        ]
        
    },
    {
        type: 'input',
        name: 'link',
        message: 'please provide a link to your deployed application.',
        when: ({contents})=> {
                if(contents.indexOf('Link') > -1){
                    return true;
                }
                else {
                    return false;
                }
        },
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list any required packages for installation of your application.',
        when: ({contents})=> {
            if(contents.indexOf('Installation') > -1){
                return true;
            }
            else {
                return false;
            }
    },
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type:'list',
        name: 'license',
        message: 'Please provide license information.',
        choices : ['MIT','GNU','Apache 2.0','ISC'],
        default :0,
        when: ({contents})=> {
            if(contents.indexOf('License') > -1){
                return true;
            }
            else {
                return false;
            }
        },
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type:'checkbox',
        name:'built with',
        message:'Please select the technologies that your application was built with.',
        choices:['HTML','CSS','SASS','javascript','Node.js','Express.js'],
        default:0,
        when: ({contents})=> {
            if(contents.indexOf('Built with') > -1){
                return true;
            }
            else {
                return false;
            }
        },
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type:'input',
        name:'contributing',
        message:'Please enter your guidelines for contributing.',
        when: ({contents})=> {
            if(contents.indexOf('Contributing') > -1){
                return true;
            }
            else {
                return false;
            }
        },
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type:'input',
        name:'tests',
        message:'Please enter test information for your application.',
        when: ({contents})=> {
            if(contents.indexOf('Tests') > -1){
                return true;
            }
            else {
                return false;
            }
        },
        validate: input =>{
            validateInput(input,message);
        }
    },
    {
        type:'input',
        name:'questions',
        message:'Please provide an email address for others to reach you with questions.',
        when: ({contents})=> {
            if(contents.indexOf('Questions') > -1){
                return true;
            }
            else {
                return false;
            }
        },
        validate: input =>{
            validateInput(input,message);
        }
    }
];

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

    function validateInput(input, message){
        if(input){
            return true;
        }
        else {
            console.log(message);
            return false;
        }

    }
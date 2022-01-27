//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Create an array of questions for user input
const questions = [
    {   // Project Name
        type: 'input',
        message: "What will be the title of your project?",
        name: 'title',
        validate: function (title) {
            if (title) {
                return true;
            }
            return "A README needs a project title";
        },
    },
    {   // Project description
        type: 'input',
        message: "Describe your application",
        name: 'description',
        validate: function (description) {
            if (description) {
                return true;
            }
            return "A README needs a description";
        },
    },
    {   // Installation instructions
        type: 'input',
        message: "What are the installation instructions for your project?",
        name: 'installation',
        validate: function (install) {
            if (install) {
                return true;
            }
            return "A README needs to provide steps on how to install the project";
        },
    },
    {   // Application usage
        type: 'input',
        message: "What is the usage of your application?",
        name: 'usage',
        validate: function (use) {
            if (use) {
                return true;
            }
            return "A README needs instructions on how to use the project";
        },
    },
    {   // Contribution directions
        type: 'input',
        message: "How can contributions be added to this project?",
        name: 'contribution',
        validate: function (contribute) {
            if (contribute) {
                return true;
            }
            return "A README needs contribution instructions";
        },
    },
    {   // Test instructions
        type: 'input',
        name: 'test',
        message: "Are there any tests for your contributors to follow?",
        validate: function (testing) {
            if (testing) {
                return true;
            }
            return "A README needs instructions on how to use the project";
        },
    },
    {   // License options
        type: 'list',
        name: 'license',
        message: "Choose a license:",
        choices: ["MIT", "Apache 2.0", "BSD", "Unlicense", 'No License'],
    },
    {   // Github username
        type: 'input',
        name: 'username',
        message: "What is your GitHub Username?",
        validate: function (username) {
            if (username) {
                return true;
            }
            return "Please enter your GitHub username";
        },
    },
    {   // User's email
        type: 'input',
        name: 'email',
        message: "What is your email?",
        validate: function (email) {
            let pass = email.match(/\S+@\S+\.\S+/g);
            if (pass) {
                return true;
            }
            return "Please enter a valid email";
        },
    },
];

//Create a function to write README file
function writeToFile(fileName, data) { }

//Create a function to initialize app
function init() { }

//Function call to initialize app
init();

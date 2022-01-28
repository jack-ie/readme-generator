//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//Create an array of questions for user input
const questions = [
    {   // Project Title
        type: 'input',
        message: "Enter project title",
        name: 'title',
        validate: function (title) {
            if (title) {
                return true;
            } return "A README needs a project title";
        },
    },
    {   // Project description
        type: 'input',
        message: "Write a description of your project",
        name: 'description',
        validate: function (description) {
            if (description) {
                return true;
            } return "A README needs a description";
        },
    },
    {   // Installation instructions
        type: 'input',
        message: "What are the installation instructions?",
        name: 'installation',
        validate: function (install) {
            if (install) {
                return true;
            } return "A README needs to provide steps on how to install the project";
        },
    },
    {   // Application usage
        type: 'input',
        message: "What is the usage of your application?",
        name: 'usage',
        validate: function (use) {
            if (use) {
                return true;
            } return "A README needs instructions on how to use the project";
        },
    },
    {   // Contribution directions
        type: 'input',
        message: "How can contributions be added to this project?",
        name: 'contribution',
        validate: function (contribute) {
            if (contribute) {
                return true;
            } return "A README needs contribution instructions";
        },
    },
    {   // Test instructions if needed
        type: 'input',
        name: 'test',
        message: "If applicable, provide tests for your contributors to follow",
        validate: function (testing) {
            if (testing) {
                return true;
            } return "A README needs instructions on how to use the project";
        },
    },
    {   // License options
        type: 'list',
        name: 'license',
        message: "Choose a license:",
        choices: ['Apache 2.0', 'BSD', 'MIT', 'No License', 'Unlicense'],
    },
    {   // Github username
        type: 'input',
        name: 'username',
        message: "Enter GitHub username",
        validate: function (username) {
            if (username) {
                return true;
            } return "Please enter your GitHub username";
        },
    },
    {   // User email
        type: 'input',
        name: 'email',
        message: "Enter email",
        validate: function (email) {
            let pass = email.match(/\S+@\S+\.\S+/g);
            if (pass) {
                return true;
            } return "Please enter a valid email";
        },
    },
];

// Function to write README file
function writeToFile(data) {
    const generateReadme = generateMarkdown(data);
    fs.writeFile("README.md", generateReadme, (err) => err ? console.log(err) : console.log("README.md has been generated"))
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(data)
        })
};

init();
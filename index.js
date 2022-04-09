// Dependencies 
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
        {
            type:'input',
            name: 'title',
            message: 'What is the title of your project?', 
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title');
                    return false;
                }
            }
        },
    
        {
            type:'input',
            name: 'description',
            message: "Write a description of your project",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description');
                    return false;
                }
            }
        },
    
        {
            type:'input',
            name: 'installation',
            message: 'Describe any installation process',
        },

        {
            type:'input',
            name: 'usage',
            message: 'What is this project usage for?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Enter a valid usage');
                    return false;
                }
            }
        },
    
        {
        type:'list',
        name: 'license',
        message: 'Choose the appropriate license for this projec', 
        choices: ['None', 'MIT', 'Academic', 'Mozilla', 'Open'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Choose an appropriate license');
                return false;
            }
        }
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributors of this project?'
        },

        {
            type: 'input',
            name: 'questions',
            message: 'What do I do if I have an issue?'
        },

        {
            type: 'input',
            name: 'username',
            message: "Please enter your GitHub username: ",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter a valid email address'
        }
    ]
// Function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            } resolve ({
                ok: true
            });
        });
    });
};

// Function to initialize the app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers);
        let fileContent = generateMarkdown(answers);
        writeToFile(fileContent);
    });
}

// Function that calls init function 
init();

//exports
module.exports = questions;

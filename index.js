// Dependencies 
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);

function questions(){
    return inquirer.prompt([
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
    ]);
}
    

// Function to initialize the app
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await questions();
        const generateContent = generateMarkdown(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }

// Function that calls init function 
init();

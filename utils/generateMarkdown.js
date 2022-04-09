

function generateReadme(answers) {
    return `
    #${answers.title}

    ### ![badge](https://img.shields.io/badge/license-${answers.license}--green)<br />

    ## Description 
    ${answers.description}
    
    ##Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Questions](#questions)

    ## Installation 
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License 
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
    <br />
    This application is covered by the ${answers.license} license. 

    ## Contributing 
    ${answers.contributing}

    ## Questions 
    ${answers.questions}
    <br />
    Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
    <br />
    Email me with any questions: ${answers.email}
    <br />

    Thank you for visiting ${answers.title}!
    
    `
}
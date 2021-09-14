// Imported required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project:',
  },  
  {
    type: 'input',
    name: 'installation',
    message: 'Any installation instructions?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run for tests?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage Information?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Any contributors?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'select a license:',
    choices: ['MIT', 'Apache', 'Mozilla'],
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}
// Call to initialize
init();
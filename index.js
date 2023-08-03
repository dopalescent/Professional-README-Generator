// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache', 'GPL', 'ISC', 'unlicensed'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter testing instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter associated GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter associated email address:',
  },
  {
    type: 'input',
    name: 'contact',
    message: 'Enter contact directions:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeText = generateMarkdown(data);

  fs.writeFile(fileName, readmeText, (error) => {
    error ? console.error(error) : console.log(`File ${fileName} created.`);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", answers);
    })
}

// Function call to initialize app
init();

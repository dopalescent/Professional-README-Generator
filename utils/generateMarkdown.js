// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license !== 'unlicensed') {
    return `![License](https://img.shields.io/badge/License-${license}-blue)\n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GPL') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license !== 'unlicensed') {
    return `(https://www.opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// MIT, Apache, GPL, ISC, unlicensed

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${renderLicenseBadge(data.license)}
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  ${data.license}
  
  ## Questions
  ${data.contact}
  \n 
  GitHub: [${data.github}](https://github.com/${data.github})
  \n
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else {
    return '';
  }
}
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'Mozilla') {
      return `https://opensource.org/licenses/MPL-2.0`;
    } else if (license === 'Apache') {
      return `https://opensource.org/licenses/Apache-2.0`;
    } else if (license === 'MIT') {
      return `https://opensource.org/licenses/MIT`;
    } else {
      return '';
    }
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'Mozilla') {
      return `This application is licensed by Mozilla.`;
    } else if (license === 'Apache') {
      return `This application is licensed by Apache.`;
    } else if (license === 'MIT') {
      return `This application is licensed by MIT.`;
    } else {
      return '';
    }
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license) 
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
    
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests, run the following in your command line:
  \`\`\`
  ${data.test}
  \`\`\`
  ## Questions
  If you have any questions about the repo please contact me at ${
      data.email
    }. 
  You can find more of my work at [${data.github}](https://github.com/${
      data.github
    }/).
  `;
  }
  
  module.exports = generateMarkdown;
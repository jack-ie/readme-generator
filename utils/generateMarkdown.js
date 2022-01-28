// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === 'BSD') {
    return `![BSD License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else if (license === "MIT") {
    return `![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Unlicense') {
    return `![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

function generateMarkdown(data) {
  return `# ${data.title}

  <h1 align="center">${data.title}</h1>
    
  ${renderLicenseBadge(data.license)}
  <br>
  
  ## Description
   ${data.description}
  
   ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  (https://img.shields.io/badge/license-${data.license}-blue.svg)
  <br />
  This application is covered by the ${data.license}license. 
  
  ## Contributing
  ${data.contributing}
 
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.questions}<br />
  <br />
  GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  Email: ${data.email}<br /><br />
  This README was generated with by [README-generator](https://github.com/jack-ie/readme-generator
`;
}

module.exports = generateMarkdown;

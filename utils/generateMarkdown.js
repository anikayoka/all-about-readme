// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
  } else {
    return ' ';
  }
}

// Function returns license in table of contents
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return `* [License](#license)`;
  } else {
    return ' ';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Built With

  ${data.language}

  ## Links

  * Video walkthrough: ${data.link}
  * Github: ${data.repo}

  
  ## Srcreenshot

  ${data.screenshot}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions about the repo contact me via email at ${data.email}. You can check out more of my work on my GitHub, ${data.username}.

  ## Developed By

  Made with ❤️ by Anika Ayoka
  
  ### ©️2022 All About Readme 

`;
}

module.exports = generateMarkdown;

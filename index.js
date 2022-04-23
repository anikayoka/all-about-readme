// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'repo',
    message: 'Please enter the name of your repo. (Required)',
    validate: repoInput => {
      if (repoInput) {
        return true;
      } else {
        console.log('Please enter the name of your repo!')
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your application. (Required)',
    validate: descInput => {
      if (descInput) {
        return true;
      } else {
        console.log('Please enter a description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide specifics for use of applcation. (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter how to use application!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'link',
    message: 'Please provide a link to your deployed application.',
    validate: linkInput => {
      if (linkInput) {
        return true;
      } else {
        console.log('Please enter a link!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide required installation instructions for your project. (Required)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter your installation instructions!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license will you use for your project?',
    choices: ['Mozilla', 'Apache', 'MIT', 'GNU', 'Unlicense'],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please provide license information!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'built with',
    message: 'Please select the technologies that your application was built with.',
    choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'JQuery'],
    validate: licenseInput => {
      if (licenseInput) {
          return true;
      } else {
          console.log('Please provide license information!');
          return false;
      }
  }
}, 
  {
    type: 'input',
    name: 'screenshotLink',
    message: 'Please provide a link for your screenshot. (Required)',
    validate: screenshotInput => {
      if (screenshotInput) {
        return true;
      } else {
        console.log('Please provide a link for your screenshot!')
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmContributers',
    message: 'Would you like to allow other developers to contribute?',
    default: true
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Please provide guidelines for contributing. (Required)',
    when: ({ confirmContributers }) => {
      if (confirmContributers) {
        return true;
      } else {
        return false;
      }
    },
    validate: contributerInput => {
      if (contributerInput) {
        return true;
      } else {
        console.log('Please enter contributer guidelines!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide instructions on how to test the app. (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please enter your use test instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please provide an email where you can be reached.',
    validate: questionsInput => {
      if (questionsInput) {
        return true;
      } else {
        console.log('Please provide an email address!');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, err => {
    if (err) {
        throw err
    };
    console.log('README generated!')
});
};

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
};

// Function call to initialize app
init()
.then(readmeInfo => {
  console.log(readmeInfo);
  return generateMarkdown(readmeInfo);
})
.then(pageMD => {
  return writeFile(pageMD);
})
.then(writeFileResponse => {
  console.log(writeFileResponse.message);
})
.catch(err => {
  console.log(err);
});

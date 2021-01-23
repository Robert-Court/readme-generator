const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateReadme } = require("./utils/generateReadme")
const { DateTime } = require("luxon");

// Line below may not be necessary, as I am using 'writeFile', not 'writeFileAsync'. 
  // const writeFileAsync = util.promisify(fs.writeFile);

const askQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project/application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a brief description for your application.',
    },
    {
      type: 'checkbox',
      name: 'licenseOption',
      message: `Which type of license do you require?\nNB-For more on licenses, visit https://choosealicense.com` ,
      choices: [
        'No license - I am not sharing my work', 'GNU - I will share with some requirements', 'MIT - I will share',
      ],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please outline the steps for installing the application.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please detail the necessary usage information for the user.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please explain the process whereby users may be able to contribute to the project.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter any information on tests that you wish the user to know.',
    },
    {
      type: 'input',
      name: 'quest',
      message: 'Where should users direct their questions?',
    },
    ,,
  ]);
};


// Bonus using async/await and try/catch
const init = async () => {
  console.log('\nWelcome to "Readme File Generator"\n\n   IMPORTANT: Please note that your responses to the prompts below will form the content of your readme file.');
    const answers = await askQuestions();

    const generatedReadme = generateReadme(answers);

    fs.writeFile(`${answers.projectTitle}.md`, generatedReadme.trim(), (error) => {
      console.log('Successfully wrote to readme file.');
  });
}

init ();
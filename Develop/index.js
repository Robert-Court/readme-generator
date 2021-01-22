const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateReadme } = require("./utils/generateReadme")

const writeFileAsync = util.promisify(fs.writeFile);

const askQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Project title',
      message: 'What is the title of your project/application?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Please write a description for your application.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Please outline the steps for installing the application.',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Please detail the necessary usage information for the potential user.',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Please explain the process whereby users may be able to contribute to the project. (NB - It may also help to specify any aspects of the project where you would welcome user input/feedback.)',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Please enter any test instructions that you wish the user to know.',
    },
  ]);
};




// Bonus using async/await and try/catch
const init = async () => {
  console.log('\nWelcome to "Readme File Generator"\n\n   IMPORTANT: Please note that your responses to the prompts below will form the content of your readme file.');
    const answers = await askQuestions();

    const generatedReadme = generateReadme(answers);

    fs.writeFile('readme.md', generatedReadme.trim(), (error) => {
      console.log('Successfully wrote to readme file.');
  });
}

init ();
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateReadme } = require("./utils/readme")
const {askQuestions} = require("./utils/questions")

const init = async () => {
  console.log('\nWelcome to "Readme File Generator"\n\n   IMPORTANT: Please note that your responses to the prompts below will form the content of your readme file.');
    try {
      const answers = await askQuestions();

      const generatedReadme = generateReadme(answers);

      fs.writeFile(`${answers.projectTitle}.md`, generatedReadme.trim(), (error) => {
        console.log('Successfully wrote to readme file.');
      })
    } catch (err) {
      console.log(err);
    }
  };


init ();
// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [];

    // Project title 
        // NB - Project title becomes the title of the README
    
    // Description - 'Description'
    // Installation instructions - 'Installation' 
    // Usage information - 'Usage'
    // Contribution guidelines - 'Contributing'
    // Test instructions - 'Tests'
        // NB - Above information is added to sections of the Readme file.

    // Table of Contents - 'Table of Contents'
        // NB - links from table of contents take viewer to that section of the readme file.
        
    // License - 'License'
        // NB - license for application is chosen from a list of options;
            // badge for that license is added near top of readme file.
            // notice is added to the section of the readme called 'License'.
            // explanation of license under which the project is covered appears
            // in this section.
    // Questions - 'Questions'
        // NB - user's github username and github profile page link is requested.
            // username and link appear within the section entitled 'Questions'.
            // Questions sections contains instructions on how to reach user with additional questions.

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);
};

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using async/await and try/catch
const init = async () => {
  console.log('hi');
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync('index.html', html);

    console.log('Successfully wrote to index.html');
  } catch (err) {
    console.log(err);
  }
};

init();

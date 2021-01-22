// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input

const questions = () => {
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

// Function to write README file
function writeToFile(fileName, data) {}
const writeFileAsync = util.promisify(fs.writeFile);
const generateReadmeFile = (answers) =>
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

// Function to initialize app
  console.log('hi');
  try {
    const answers = await questions();

    const readme = generateReadmeFile(answers);

    await writeFileAsync('readme2.md', readme);

    console.log('Successfully wrote to readme2.me');
  } catch (err) {
    console.log(err);
};

function init() {}

// Function call to initialize app
init();
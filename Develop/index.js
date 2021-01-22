const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
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
  console.log('\nWelcome to "Readme File Generator"\n\n   IMPORTANT: Please note that your responses to the prompts below will form the content of your readme file.');
  // try {
  //   const answers = await promptUser();

  //   const html

init(); = generateHTML(answers);

  //   await writeFileAsync('index.html', html);

  //   console.log('Successfully wrote to index.html');
  // } catch (err) {
  //   console.log(err);
  // }
};
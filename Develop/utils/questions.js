const inquirer = require('inquirer')

const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'What is your full name?',
        },
        {
            type: 'input',
            name: 'userEmail',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'year',
            message: 'In what year will your project be published?',
        },
        {
            type: 'editor',
            name: 'description',
            message: 'Write a brief description for your application.',
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project/application?',
        },
        {
            type: 'list',
            name: 'licenseOption',
            message: `Which type of license do you require?\nNB-For more on licenses, visit https://choosealicense.com`,
            choices: [
                'None', 'GNU', 'MIT',
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
            name: 'githubUserName',
            message: 'Please enter your Github user name.',
        },
        {
            type: 'input',
            name: 'githubURL',
            message: 'Please enter the URL to your Github user profile.',
        },
        {
            type: 'input',
            name: 'quest',
            message: 'Where should users direct their questions?',
        },
    ]);
};

module.exports = {
    askQuestions
}

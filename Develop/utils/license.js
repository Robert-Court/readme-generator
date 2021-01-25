const inquirer = require('inquirer')

function badgeOptions (answers) {
  if (answers.licenseOption == null || answers.licenseOption == 'None') {
    return `Copyright (C) ${answers.publishYear}, ${answers.userName} (${answers.userEmail})`
  }
  else if (answers.licenseOption == 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (answers.licenseOption == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
}

function license (answers) {
  if (answers.licenseOption == null || answers.licenseOption == 'None') {
    return `
    Copyright (C) ${answers.publishYear}, ${answers.userName} (${answers.userEmail})
    \n\nThis file is part of ${answers.projectTile}.
    \n\n${answers.projectTile} can not be copied and/or distributed without the express permission of ${answers.userName}.
    `
  }
  else if (answers.licenseOption == 'GNU') {
    return `Please click on the link for more details: [GNU](https://https://choosealicense.com/licenses/gpl-3.0/)`
  }
  else if (answers.licenseOption == 'MIT') {
    return `Please click on the link for more details: [MIT](https://choosealicense.com/licenses/mit/)`
  };
};

module.exports = {badgeOptions,license};
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = "not working";

function badgeOptions (answers) {
  if (licenseOption == null || 'No license - I am not sharing my work') {
  licenseBadge = `Copyright (C) ${answers.publishYear}, ${answers.userName} (${answers.userEmail})`
  }
  else if (licenseOption == 'GNU - I will share with some requirements') {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (licenseOption == 'MIT - I will share') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
}

badgeOptions();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseOptions (answers) {
  if (licenseOption == null || 'No license - I am not sharing my work') {
  license = `
    Copyright (C) ${answers.publishYear}, ${answers.userName} (${answers.userEmail})
    \n\nThis file is part of ${answers.projectTile}.
    \n\n${answers.projectTile} can not be copied and/or distributed without the express permission of ${userName}.
    `
  }
  else if (licenseOption == 'GNU - I will share with some requirements') {
    license = `[GNU](https://https://choosealicense.com/licenses/gpl-3.0/)\n`
  }
  else if (licenseOption == 'MIT - I will share') {
    license = `[MIT](https://choosealicense.com/licenses/mit/)`
  };
};

licenseOption();

module.exports = {licenseBadge};
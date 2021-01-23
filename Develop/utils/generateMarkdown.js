const { DateTime } = require("luxon");
const license = 'unspecified';
const licenseBadge = 'unspecified';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (licenseOption == 'No license - I am not sharing my work') {
  licenseBage = `Copyright (C) ${DateTime.local(dt.year)}, ${answers.userName} (${answers.userEmail})`
  }
  else if (licenseOption == 'GNU - I will share with some requirements') {
    licenseBage = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (licenseOption == 'MIT - I will share') {
    licenseBage = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  if (licenseOption == 'No license - I am not sharing my work') {
  license = `
    Copyright (C) ${DateTime.local(dt.year)}, ${answers.userName} (${answers.userEmail})
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

module.exports = {renderLicenseSection};
module.exports = {renderLicenseBadge};
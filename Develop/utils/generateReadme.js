const { renderLicenseSection } = require("./generateMarkdown")
const { renderLicenseBadge } = require("./generateMarkdown")

const generateReadme = (answers) => {
    // NB - Readme file structure is located within the template literal below
    return `
    ## ${answers.projectTitle}
---
## License: ${answers.licenseBadge}

### Table of Contents
1.[Description](#desc)
2.[Installation](#install)
3.[Usage link](#use)
4.[Contributing](#contrib)
5.[Tests](#test)
6.[Questions](#quest)
7.[License](#license)

###<a name="desc">Description</a>
${answers.description}

###<a name="install">Installation</a>
${answers.installation}

###<a name="use">Usage</a>
${answers.usage}

###<a name="contrib">Contributing</a>
${answers.contributing}

###<a name="test">Tests</a>
${answers.tests}

###<a name="quest">Questions</a>
### Github username
### Github profile link

###<a name="license">License</a>
${answer.license}`

renderLicenseBadge();
renderLicenseSection();
}

module.exports = {generateReadme};
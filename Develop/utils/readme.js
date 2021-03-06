const {badgeOptions, license} = require("./license")

const generateReadme = (answers) => {
    // NB - Readme file structure is located within the template literal below
    return `
    ## ${answers.projectTitle}
---
${badgeOptions(answers)} 

### Table of Contents
1.[Description](#desc)
2.[Installation](#install)
3.[Usage link](#use)
4.[Contributing](#contrib)
5.[Tests](#test)
6.[Questions](#quest)
7.[License](#license)

### <a name="desc">Description</a>
${answers.description}

### <a name="install">Installation</a>
${answers.installation}

### <a name="use">Usage</a>
${answers.usage}

### <a name="contrib">Contributing</a>
${answers.contributing}

### <a name="test">Tests</a>
${answers.tests}

### <a name="quest">Questions</a>
  * **Github username**: ${answers.githubUserName}
  * **Email**: [${answers.userEmail}](${answers.userEmail})
  * **Github profile link**: [${answers.githubURL}](${answers.githubURL})

### <a name="license">License</a>
${license(answers)}`

}

module.exports = {generateReadme};
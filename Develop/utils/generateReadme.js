const generateReadme = (answers) => {
    // NB - Readme file structure is located within the template literal below
    return `
        # ${answers.projectTitle}
            License badge

        ## Table of Contents
            1.[Description] (#desc)
            Installation link
            Usage link
            Contributing link
            Tests link
            Questions link
            License link

        <a name="desc"></a>
        ## Description

        ## Installation

        ## Usage

        ## Contributing

        ## Tests

        ## Questions
            ### Github username
            ### Github profile link

        ## License
    `
}

module.exports = {
        generateReadme
}
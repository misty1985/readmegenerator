const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            name: "what is your name?",


        },
        {
            name: "license"

        },


    ])
    .then(answers => {
        console.log(answers)
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });



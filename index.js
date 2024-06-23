const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What will your logo say?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color will the text be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape is your logo?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color will the shape be?'
    }
]).then((data) => {
    console.log(data);
});
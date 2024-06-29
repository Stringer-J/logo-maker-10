const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const fs = require('fs');

const generateSVG = () => ``;

inquirer
    .prompt([
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'What will your logo say?',
        maxLength: 3
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
    const svgContent = generateSVG(data);

    fs.writeFile('./examples/logo.svg', svgContent, (err) => err ? console.log(err) : console.log('Generated logo.svg'));
});
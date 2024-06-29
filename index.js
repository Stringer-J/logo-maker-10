const inquirer = require('inquirer');

//next two lines add type to inquirer that limits length of response for the input type
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const fs = require('fs');

const {Circle, Triangle, Square} = require('./library/shapes.js');
const circle = new Circle(50, 50, 30);
const triangle = new Triangle();
const square = new Square();

const generateSVG = () =>  //function that will eventually create the logo
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${circle.makeCircle()}
    </svg>`;

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
    const svgContent = generateSVG(data); //makes file with user input

    fs.writeFile('./examples/logo.svg', svgContent, (err) => err ? console.log(err) : console.log('Generated logo.svg')); //creates actual svg file in the examples folder
});
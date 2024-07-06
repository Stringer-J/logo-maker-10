const inquirer = require('inquirer');

//next two lines add type to inquirer that limits length of response for the input type
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const fs = require('fs');

const {Circle, Triangle, Square} = require('./library/shapes.js');
const circle = new Circle(150, 100, 80);
const triangle = new Triangle(150, 30, 250, 190, 50, 190);
const square = new Square(75, 50, 150);

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

    const textSize = 50;

    if (data.shape === 'Circle') {
        const generateSVG = () =>  //function that will eventually create the logo
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <style>
                circle { fill: ${data.shapeColor}; }
            </style>
            ${circle.makeCircle()}
            <text x="50%" y="52.5%" dominant-baseline="middle" text-anchor="middle" fill="${data.textColor}" font-size="${textSize}">
                ${data.text}
            </text>
            </svg>`;

        const svgContent = generateSVG(data);

        fs.writeFile('./examples/logo.svg', svgContent, (err) => err ? console.log(err) : console.log('Generated logo.svg')); //creates actual svg file in the examples folder

    } else if (data.shape === 'Triangle') {
        const generateSVG = () =>  //function that will eventually create the logo
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <style>
                polygon { fill: ${data.shapeColor}; }
            </style>
            ${triangle.makeTriangle()}
            <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="${data.textColor}" font-size="${textSize}">
                ${data.text}
            </text>
            </svg>`;

        const svgContent = generateSVG(data);

        fs.writeFile('./examples/logo.svg', svgContent, (err) => err ? console.log(err) : console.log('Generated logo.svg')); //creates actual svg file in the examples folder

    } else if (data.shape === 'Square') {
        const generateSVG = () =>  //function that will eventually create the logo
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <style>
                rect { fill: ${data.shapeColor}; }
            </style>
            ${square.makeSquare()}
            <text x="50.5%" y="65.5%" dominant-baseline="middle" text-anchor="middle" fill="${data.textColor}" font-size="${textSize}">
                ${data.text}
            </text>
            </svg>`;

        const svgContent = generateSVG(data);

        fs.writeFile('./examples/logo.svg', svgContent, (err) => err ? console.log(err) : console.log('Generated logo.svg')); //creates actual svg file in the examples folder
    }
});
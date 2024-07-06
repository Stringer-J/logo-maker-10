//let's me use inquirer to ask questions
const inquirer = require('inquirer');

//next two lines add type to inquirer that limits length of response for the input type
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

//let's me use fs so that I can write file later
const fs = require('fs');

//imports the three classes I made in the shapes file and then creates new instances of each class
const {Circle, Triangle, Square} = require('./library/shapes.js');
const circle = new Circle(150, 100, 80);
const triangle = new Triangle(150, 30, 250, 190, 50, 190);
const square = new Square(75, 50, 150);

//starts inquirer and asks the following questions
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
]).then((data) => { //takes info and puts it in an object called data

    const textSize = 50; //sets text size 50 because the base size was too small for my liking

    if (data.shape === 'Circle') { //if the shape is a circle, runs function related to making my circle

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

        const svgContent = generateSVG(data); //fills svgContent with the generateSVG function using the data object

        fs.writeFile('./examples/logo.svg', svgContent, (err) => err ? console.log(err) : console.log('Generated logo.svg')); //creates actual svg file in the examples folder

    } else if (data.shape === 'Triangle') { //if the shape is a triangle, runs function related to making my triangle

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

        const svgContent = generateSVG(data); //fills svgContent with the generateSVG function using the data object

        fs.writeFile('./examples/logo.svg', svgContent, (err) => err ? console.log(err) : console.log('Generated logo.svg')); //creates actual svg file in the examples folder

    } else if (data.shape === 'Square') { //if the shape is a square, runs function related to making my square

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

        const svgContent = generateSVG(data); //fills svgContent with the generateSVG function using the data object

        fs.writeFile('./examples/logo.svg', svgContent, (err) => err ? console.log(err) : console.log('Generated logo.svg')); //creates actual svg file in the examples folder
    }
});
//imports shapes I want to test
const {Circle, Triangle, Square} = require('./library/shapes.js');

//test for circle
test('creates circle with user inputted color', () => {
    const circle = new Circle(150, 100, 80);
    circle.shapeColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

//test for triangle
test('creates triangle with user inputted color', () => {
    const triangle = new Triangle(150, 30, 250, 190, 50, 190);
    triangle.shapeColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,30 250,190 50,190" fill="blue" />');
});

//test for square
test('creates square with user inputted color', () => {
    const square = new Square(75, 50, 150);
    square.shapeColor('blue');
    expect(shape.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="blue" />');
});
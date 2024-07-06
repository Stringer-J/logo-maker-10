//imports shapes I want to test
const {Circle, Triangle, Square} = require('./shapes.js');

//test for circle
test('creates circle with makeCircle', () => {
    const circle = new Circle(150, 100, 80);
    expect(circle.makeCircle()).toEqual('<circle cx="150" cy="100" r="80" />');
});

//test for triangle
test('creates triangle with makeTriangle', () => {
    const triangle = new Triangle(150, 30, 250, 190, 50, 190);
    expect(triangle.makeTriangle()).toEqual('<polygon points="150,30 250,190 50,190" />');
});

//test for square
test('creates square with makeSquare', () => {
    const square = new Square(75, 50, 150);
    expect(square.makeSquare()).toEqual('<rect x="75" y="50" width="150" height="150" />');
});
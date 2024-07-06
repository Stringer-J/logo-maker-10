class Circle { //makes a Circle class and sets up it's parameters
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    makeCircle() { //function that actual makes the circle for an SVG file
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" />`;
    }
};

class Triangle { //makes a Triangle class and sets up it's parameters
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }
    makeTriangle() { //function that actual makes the triangle for an SVG file
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" />`;
    }
};

class Square { //makes a Square class and sets up it's parameters
    constructor(x, y, sidelength) {
        this.x = x;
        this.y = y;
        this.sidelength = sidelength;
    }
    makeSquare() { //function that actual makes the square for an SVG file
        return `<rect x="${this.x}" y="${this.y}" width="${this.sidelength}" height="${this.sidelength}" />`;
    }
};

module.exports = {Circle, Triangle, Square}; //exports the classes for the index file to use later
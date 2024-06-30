class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    makeCircle() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" />`;
    }
};

class Triangle {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }
    makeTriangle() {
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" />`;
    }
};

class Square {
    constructor(x, y, sidelength) {
        this.x = x;
        this.y = y;
        this.sidelength = sidelength;
    }
    makeSquare() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.sidelength}" height="${this.sidelength}" />`;
    }
};

module.exports = {Circle, Triangle, Square};
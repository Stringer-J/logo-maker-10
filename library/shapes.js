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
    constructor() {

    }
};

class Square {
    constructor() {
        
    }
};

module.exports = {Circle, Triangle, Square};
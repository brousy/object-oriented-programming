// class that defines the shape and color that appears on the screen using SVG syntax
// todo: change dimensions 
class Shape {
    constructor() {
        this.color = ""
    }

    setColor(chosenColor) {
        this.color = chosenColor
    }
}

class Square extends Shape {
    render() {
        return `<rect fill="${this.color}" x="90" y="90" width="120" height="120"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle fill="${this.color}" cx="150" cy="100" r="80" text-anchor="middle"/>`
    }
}

// TODO: adjust placement for centered text
class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.color}" points="150,20 245,182 60,182"/>`
        
    }
}
// Export this to procide information for someone else to import
module.exports = {
    Square, Circle, Triangle
}
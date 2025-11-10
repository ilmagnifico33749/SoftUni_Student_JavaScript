function rectangle(width, height, color) {
    let rectanbleObject = {
        width: width,
        height: height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
    }

    rectanbleObject.calcArea = function() {
        return this.width * this.height
    } ;

    return rectanbleObject
}

// Test Input 1
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


function calculatorArea(figureType, sideOne, sideTwo) {
    let area;
    if (figureType === "square") {
        area = sideOne * sideOne;
    }
    else if (figureType === "rectangle") {
        area = sideOne * sideTwo;
    }
    else if (figureType === "circle") {
        area = Math.pow(sideOne, 2) * Math.PI;
    }
    else if (figureType === "triangle") {
        area = (sideOne * sideTwo) / 2;
    }
    console.log(area.toFixed(3))
}

calculatorArea("square", 5);
calculatorArea("rectangle", 7, 2.5);
calculatorArea("circle", 6);
calculatorArea("triangle", 4.5, 20);

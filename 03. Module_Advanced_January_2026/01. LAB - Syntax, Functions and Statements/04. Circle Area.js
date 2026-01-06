function circleArea(userInput) {
    let typeOfUserInput = typeof(userInput);
    function circleAreaFormula(circleRadius) {
        let formula = Math.PI * Math.pow(circleRadius, 2);
        console.log(formula.toFixed(2));
    }
    
    let circleArea = circleAreaFormula
    let circleRadius = undefined;
    
    if (typeOfUserInput === "number") {
        circleRadius = userInput;
        circleAreaFormula(circleRadius);
    }

    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfUserInput}.`);
    }
};

circleArea(5);
circleArea('name');
 
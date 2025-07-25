function jansNotation(arrInp) {
    let aritmicOperators = ["+", "-", "*", "/"];
    let errorMessageManyInstructions = `Error: too many operands!`;
    let errorMessageFewInstructions = `Error: not enough operands!`;
    let arrNums = [];

    for (let command of arrInp) {
        let operand1 = undefined;
        let operand2 = undefined;

        if (typeof command === "number") {
            arrNums.push(command);
        }
        else if (typeof command === "string" && aritmicOperators.includes(command)) {
            operand2 = arrNums.pop();
            operand1 = arrNums.pop();

            if (operand1 !== undefined && operand2 !== undefined) {
                let operations = {
                    "+": (x, y) => x + y,
                    "-": (x, y) => x - y,
                    "*": (x, y) => x * y,
                    "/": (x, y) => x / y,
                }
                let result=operations[command](operand1, operand2);
                arrNums.push(result);
            }

            else {
                console.log(errorMessageFewInstructions)
            }
        }
    }

    if (arrNums.length > 1) {
        console.log(errorMessageManyInstructions);
    }
    else {
        console.log(arrNums.join(""));
    };
}


jansNotation(
    [
        3,
        4,
        '+'
    ]
);

jansNotation(
    [
        5,
        3,
        4,
        '*',
        '-'
    ]
);

jansNotation(
    [
        7,
        33,
        8,
        '-'
    ]
);

jansNotation(
    [
    15, 
        '/'   
    ]
);

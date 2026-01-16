function validityChecker(x1, y1, x2, y2) {

    function positionsCheck(a1, b1, a2, b2) {
        let equation = Math.sqrt(Math.pow((a2-a1), 2) + Math.pow((b2-b1), 2));
        let status = undefined;

        if (Number.isInteger(equation)) {
            status = "valid";
        }
        else {
            status = "invalid";
        }

        let output = `{${a1}, ${b1}} to {${a2}, ${b2}} is ${status}`;

        console.log(output);
    }

    positionsCheck(x1, y1, 0, 0);
    positionsCheck(x2, y2, 0, 0);
    positionsCheck(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
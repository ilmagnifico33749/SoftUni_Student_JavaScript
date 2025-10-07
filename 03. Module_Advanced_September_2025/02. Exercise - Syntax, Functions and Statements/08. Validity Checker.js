function validityChecker(x1, y1, x2, y2) {
    function isValidDistance(xA, yA, xB, yB) {
        const distance = Math.sqrt((xB - xA) ** 2 + (yB - yA) ** 2);
        return Number.isInteger(distance);
    }

    const checks = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2, y2]
    ];

    for (let [xA, yA, xB, yB] of checks) {
        const validity = isValidDistance(xA, yA, xB, yB) ? "valid" : "invalid";
        console.log(`{${xA}, ${yA}} to {${xB}, ${yB}} is ${validity}`);
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);

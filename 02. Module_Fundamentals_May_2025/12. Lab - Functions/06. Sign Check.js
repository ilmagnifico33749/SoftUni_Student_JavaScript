function signCheck(num1, num2, num3) {
    let countNegativeNums = 0;
    let arrNums = [num1, num2, num3];
    let finalResult;
    
    for (let element of arrNums) {
        if (element < 0) {
            countNegativeNums++;
        }
    } 

    if (countNegativeNums === 0 || countNegativeNums % 2 === 0) {
        finalResult = `Positive`;
    }
    else {
        finalResult = `Negative`;
    }

    return console.log(finalResult);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);

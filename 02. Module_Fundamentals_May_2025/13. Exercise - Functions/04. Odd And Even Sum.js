function oddAndEvenSum(inputNum) {
    let numToString = inputNum.toString().split('');
    let sumEven = 0;
    let sumOdd = 0;

    for (let index in numToString) {
        let currentNum = Number(numToString[index]);
        if (currentNum % 2 === 0) {
            sumEven += currentNum;
        }
        else {
            sumOdd += currentNum;
        }

    }

    result = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
    return console.log(result)
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);

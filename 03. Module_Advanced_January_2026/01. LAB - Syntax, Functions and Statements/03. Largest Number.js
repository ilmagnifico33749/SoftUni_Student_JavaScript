function largestNumber(num1, num2, num3) {
    let arrNums = [num1, num2, num3];
    let largestNumber = undefined;

    for (let num in arrNums) {
        let currentNumber = arrNums[num]

        if (num == 0) {
            largestNumber = currentNumber;
        }

        else if (currentNumber > largestNumber) {
            largestNumber = currentNumber;
        }
    }
    console.log(`The largest number is ${largestNumber}.`)
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

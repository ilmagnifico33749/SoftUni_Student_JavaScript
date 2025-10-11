function smallestTwoNumbers(arrInp) {
    let numSmallest = undefined;
    let numSecondSmallest = undefined;

    for (let num of arrInp) {
        if (numSmallest === undefined || num < numSmallest) {
            numSecondSmallest = numSmallest;
            numSmallest = num;
        }

        else if (numSecondSmallest === undefined || num < numSecondSmallest) {
        numSecondSmallest = num;
        }
    }

    console.log(`${numSmallest}, ${numSecondSmallest}`)
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

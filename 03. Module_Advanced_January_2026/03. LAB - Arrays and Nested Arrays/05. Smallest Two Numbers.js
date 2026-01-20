function smallestTwoNumbers(inpArr) {
    let smallestNum = undefined;
    let secondSmallestNum = undefined;

    for (let element of inpArr) {
        if (secondSmallestNum == undefined || smallestNum > element) {
            secondSmallestNum = smallestNum;
            smallestNum = element;
        }
        else if (secondSmallestNum == undefined || secondSmallestNum > element ) {
            secondSmallestNum = element;
        }
    }

    console.log(smallestNum, secondSmallestNum);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function smallestOfThreeNumbers (num1, num2, num3) {
    let smallestNum = num1;
    let arrNums = [num1, num2, num3];

    for (let num of arrNums) {
        if (num < smallestNum) {
            smallestNum = num;
        }
    }
    
    return console.log(smallestNum);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);

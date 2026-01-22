function biggestElement(matrixInp) {
    let biggestNumber = undefined;
    for (let array of matrixInp) {
        for (let element of array) {
            if (biggestNumber == undefined || biggestNumber < element) {
                biggestNumber = element;
            }
        }
    }

    console.log(biggestNumber);
};

biggestElement(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
);

biggestElement(
    [
        [3, 5, 7, 12], 
        [-1, 4, 33, 2], 
        [8, 3, 0, 4]
    ]
);

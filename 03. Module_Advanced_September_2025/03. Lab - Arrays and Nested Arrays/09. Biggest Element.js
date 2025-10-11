function biggestElement(matrix) {
    let biggestElement = undefined;
    
    for (let row of matrix) {
        for (let element of row) {
            if (biggestElement === undefined || element > biggestElement) {
                biggestElement = element;
            }
        }
    }

    return biggestElement;
}

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

function diagonalSums(matrixInp) {
    const matrixLength = Number(matrixInp.length);
    const rowLength = Number(matrixInp[0].length);
    let sumMainDiagonals = 0;
    let sumSecondaryDiagonals = 0;
    
    for (let rowIndex=0; rowIndex < matrixLength; rowIndex++) {
        let currentElementMainDiag = matrixInp[rowIndex][rowIndex];
        sumMainDiagonals += currentElementMainDiag;
        sumSecondaryDiagonals += matrixInp[rowIndex][rowLength-1-rowIndex];
    }

    console.log(`${sumMainDiagonals} ${sumSecondaryDiagonals}`)
}

diagonalSums(
    [
        [20, 40], 
        [10, 60]
    ]
);

diagonalSums(
    [
        [3, 5, 17], 
        [-1, 7, 14], 
        [1, -8, 89]
    ]
);

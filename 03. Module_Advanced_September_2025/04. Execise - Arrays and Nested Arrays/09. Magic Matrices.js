function magicMatrixes(matrixInp) {
    let matrixLength = matrixInp.length;
    let rowLength = matrixInp[0].length;
    let magicalStatus = true;

    let sumPrevRow = null;

    for (let rowIndex = 0; rowIndex < matrixLength; rowIndex++) {
        let currentRow = matrixInp[rowIndex];
        let sumCurrRow = 0;

        for (let currentElement of currentRow) {
            sumCurrRow += currentElement;
        }

        if (sumPrevRow !== null && sumCurrRow !== sumPrevRow) {
            magicalStatus = false;
            break;
        }

        sumPrevRow = sumCurrRow;
    }

    if (magicalStatus) {
        let sumPrevColumn = null;

        for (let columnIndex = 0; columnIndex < rowLength; columnIndex++) {
            let sumCurrColumn = 0;

            for (let rowIndex = 0; rowIndex < matrixLength; rowIndex++) {
                sumCurrColumn += matrixInp[rowIndex][columnIndex];
            }

            if (sumPrevColumn !== null && sumCurrColumn !== sumPrevColumn) {
                magicalStatus = false;
                break;
            }

            sumPrevColumn = sumCurrColumn;
        }
    }

    console.log(magicalStatus);
}


magicMatrixes(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
);

magicMatrixes(
    [
        [11, 32, 45], 
        [21, 0, 1], 
        [21, 1, 1]
    ]
);

magicMatrixes(
    [
        [1, 0, 0], 
        [0, 0, 1], 
        [0, 1, 0]
    ]
);

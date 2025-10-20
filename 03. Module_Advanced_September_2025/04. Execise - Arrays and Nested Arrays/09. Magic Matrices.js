function magicMatrixes(matrixInp) {
    let matrixLength = matrixInp.length;
    let rowLength = matrixInp[0].length;
    let magicalStatus = true;
    

    for (let rowIndex=0; rowIndex<matrixLength; rowIndex++) {
        let currentRow = matrixInp[rowIndex];
        let sumCurrRow = undefined;
        let sumPrevRow = undefined;
        for (let currentElement of currentRow) {
            sumCurrRow += currentElement;
        }
        if (sumPrevRow !== undefined && sumCurrRow !== sumPrevRow) {
            magicalStatus = false;
            break;
        }
    } 

    if (magicalStatus == true) {
        for (let columnIndex=0; columnIndex<rowLength; columnIndex++) {
            let sumCurrColumn= undefined;
            let sumPrevColumn = undefined;
            for (let rowIndex=0; rowIndex<matrixLength; rowIndex++) {
                let currentElement = matrixInp[rowIndex][columnIndex];
                sumCurrColumn += currentElement;
            }
            if (sumPrevColumn !== undefined && sumCurrColumn !== sumPrevColumn) {
                magicalStatus = false;
                break;
            }
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

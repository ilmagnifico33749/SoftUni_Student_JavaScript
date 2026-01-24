function magicMatrixes(matrixInp) {
    let matrixUsrInp = matrixInp;
    let statusMagical = true;
    let matrixLenght = matrixUsrInp.length;
    let matrixArrayLength = matrixUsrInp[0].length;
    
    let sumZero = 0;
    
    for (let indexRow=0; indexRow<matrixLenght; indexRow++) {
        let currentRow = matrixUsrInp[indexRow]
        let sumCurrentRow = 0;
        currentRow.map(x => sumCurrentRow += x)
        if (indexRow == 0) {
            sumZero = sumCurrentRow;
        } 
        else if (indexRow !== 0) {
            if (sumZero !== sumCurrentRow) {
                statusMagical = false;
                break;
            }
        }
    }   
    
    for (let indexColumn=0; indexColumn<matrixArrayLength; indexColumn++) {
        let sumCurrentColumn = 0;
        for (let row in matrixUsrInp) {
            let currentElement = matrixUsrInp[row][indexColumn]
            sumCurrentColumn += currentElement;
        }
        if (sumCurrentColumn !== sumZero) {
            statusMagical = false;
            break;
        }
    }

    console.log(statusMagical);
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

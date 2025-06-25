function magicMatrices(matrixInp) {
    function sumNums(numsArr) {
        let sum = 0;
        for (let num of numsArr) {
            sum += Number(num);
        }
        return sum;
    }

    let sumFirstRow = sumNums(matrixInp[0]);
    let validity;

    function rowsSumsCheck(matricesInp) {
        for (let index = 1; index<matricesInp.length; index++) {
            let currentRow = matricesInp[index];
            let sumCurrentRow = sumNums(currentRow);
            if (sumFirstRow == sumCurrentRow) {
                validity = true;
            }
            else {
                validity = false;
                break;
            }
        }
    }

    
    function columnsSumsCheck(matricesInp) {
            let sumFirstColumn = 0;
            for (let columnIndex = 0; columnIndex<matricesInp.length; columnIndex++) {
                let sumCurrentColumn = 0;
                for (let rowIndex = 0; rowIndex<matricesInp.length; rowIndex++) {
                    let currentRow = matricesInp[rowIndex];
                    let numCurrentColumn = currentRow[columnIndex]
                    if (columnIndex == 0) {
                        sumFirstColumn += numCurrentColumn;
                    }
                    else {
                        sumCurrentColumn += numCurrentColumn;
                    }
                }
                if (columnIndex != 0) {
                    if (sumFirstColumn == sumCurrentColumn) {
                        validity = true;
                    }
                    else {
                        validity = false;
                        break;
                    }
                } 
            }
        }

    rowsSumsCheck(matrixInp);
    
    if (validity == true) {
        columnsSumsCheck(matrixInp);
    }

    return console.log(validity);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);

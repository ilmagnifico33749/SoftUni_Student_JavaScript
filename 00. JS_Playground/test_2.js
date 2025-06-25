
function columnsSumsCheck(matricesInp) {
        let sumFirstColumn = 0;
        let validity;
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
        return validity;
    }

columnsSumsCheck([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);

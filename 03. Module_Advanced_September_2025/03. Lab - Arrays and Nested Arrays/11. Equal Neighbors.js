function equalNeighbors(matrix) {
    let countNeighboors = 0;

    
    for (let rowIndex=0; rowIndex < matrix.length; rowIndex++) {
        let currentRow = matrix[rowIndex]

        for (let columnIndex=0; columnIndex < currentRow.length; columnIndex++) {
            let currentElement = matrix[rowIndex][columnIndex];

            if (columnIndex < currentRow.length-1) {
                let elementOnRight = matrix[rowIndex][columnIndex+1];
                if (currentElement === elementOnRight) {
                    countNeighboors++;
                }
            }

            if (rowIndex < matrix.length-1) {
                let elementBelow = matrix[rowIndex+1][columnIndex];
                if (currentElement === elementBelow) {
                    countNeighboors++;
                }
            }
        }
    }

    console.log(countNeighboors);
}

equalNeighbors(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
);

equalNeighbors(
    [
        ['test', 'yes', 'yo', 'ho'], 
        ['well', 'done', 'yo', '6'], 
        ['not', 'done', 'yet', '5']
    ]
);

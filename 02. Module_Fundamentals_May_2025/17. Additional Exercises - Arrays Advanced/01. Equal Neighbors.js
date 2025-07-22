function equalNeighbors(arrInp) {
    let countEqualNeighbors = 0;

    for (let indexArray=0; indexArray < arrInp.length; indexArray++) {
        let previousArray = arrInp[indexArray-1];
        let currentArray = arrInp[indexArray];

        for (let indexSymbol=0; indexSymbol < currentArray.length; indexSymbol++) {
            let indexSymbolPrevious = indexSymbol -1; 
            let indexSymbolCurrent = indexSymbol;
            
            if (previousArray) {
                if (previousArray[indexSymbolCurrent] == currentArray[indexSymbolCurrent]) {
                    countEqualNeighbors++;
                }
            }

            if (indexSymbolPrevious >= 0) {
                if (currentArray[indexSymbolPrevious] == currentArray[indexSymbolCurrent]) {
                    countEqualNeighbors++;
                }
            }
        }
    }

    console.log(countEqualNeighbors);
}


equalNeighbors(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
)

equalNeighbors(
    [
        ['test', 'yo', 'yo', 'ho'], 
        ['well', 'done', 'no', '6'], 
        ['not', 'done', 'yet', '5']
    ]
)

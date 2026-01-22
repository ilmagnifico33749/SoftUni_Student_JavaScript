function equalNeighbors(matrixInp){
    let pairs = [];
    let countPairs = 0;

    for (let arrayIndex=0; arrayIndex<(matrixInp.length); arrayIndex++) {
    let currentArray = matrixInp[arrayIndex];
    
        for (let elementIndex=0; elementIndex<(currentArray.length); elementIndex++) {
            let currentElement = currentArray[elementIndex];

            if (elementIndex<(currentArray.length-1)) {
                let nextElementCurrentArray = currentArray[elementIndex+1];
                if (currentElement == nextElementCurrentArray) {
                    pairs.push([currentElement, nextElementCurrentArray]);
                    countPairs++;
                }
            }
            
            if (arrayIndex<(matrixInp.length-1)) {
                let nextArray = matrixInp[arrayIndex+1];
                let nextElementNextArray = nextArray[elementIndex];
                if (currentElement == nextElementNextArray) {
                    pairs.push([currentElement, nextElementNextArray]);
                    countPairs++;
                }
            }
        }
    }
    // console.log(pairs.join(" | "));
    console.log(countPairs);
    // console.log(pairs.length);
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

equalNeighbors (
    [
        [2, 2, 5, 7, 4],
        [4, 0, 5, 3, 4],
        [2, 5, 5, 4, 2]
    ]
)

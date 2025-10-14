function extractIncreasingSubsequenceFromArray(arrInp) {
    let extractedArray = [];
    let currentBiggestNum = undefined;

    for (let element of arrInp) {
        if (currentBiggestNum === undefined || (currentBiggestNum !== undefined && currentBiggestNum<element)) {
            currentBiggestNum = element;
            extractedArray.push(currentBiggestNum);
        }
    }
    
    return extractedArray;
} 

extractIncreasingSubsequenceFromArray([1,3,8,4,10,12,3,2,24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);

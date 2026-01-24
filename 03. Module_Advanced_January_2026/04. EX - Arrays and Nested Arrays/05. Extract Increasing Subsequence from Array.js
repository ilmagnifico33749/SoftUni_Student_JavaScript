function extractIncreasingSubsequenceFromArray(arrInp){
    let arrUsrInp = [...arrInp];
    let finalArr = [arrUsrInp.shift()];
    arrUsrInp.map( num => {
        let lastEl = finalArr[finalArr.length - 1];

        if (num >= lastEl) {
            finalArr.push(num);
        }
    });

    return finalArr;
}

extractIncreasingSubsequenceFromArray([1,3,8,4,10,12,3,2,24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);


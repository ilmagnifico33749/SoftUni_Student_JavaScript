function sortingNumbers(arrInp) {
    let arrUsrInp = arrInp.sort((a, b) => a-b);
    let arrUsrLength = arrUsrInp.length;
    let arrSorted = [];
    for (let index=0; index<arrUsrLength; index++) {
        if (index % 2 == 0) {
            arrSorted.push(arrUsrInp.shift());
        }
        else if (index % 2 == 1) {
            arrSorted.push(arrUsrInp.pop());
        }
    }

    return arrSorted;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);

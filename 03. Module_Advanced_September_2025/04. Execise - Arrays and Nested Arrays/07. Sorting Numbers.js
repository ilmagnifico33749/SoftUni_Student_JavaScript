function sortingNumbers(arrInp) {
    let sortedArray = arrInp.sort((a, b) => (a-b))

    let finalArr = [];
    
    while (sortedArray.length) {
        if (sortedArray.length) finalArr.push(sortedArray.shift());
        if (sortedArray.length) finalArr.push(sortedArray.pop());
    }

    return finalArr;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);

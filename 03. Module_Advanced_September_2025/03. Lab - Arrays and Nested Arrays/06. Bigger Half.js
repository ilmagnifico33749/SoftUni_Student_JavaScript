function biggerHalf(arrInp) {
    const arrInptMidIndexLow = Math.floor(arrInp.length/2);

    let sortedArray = arrInp.sort((a, b) => (a-b));
    let selectedArray = sortedArray.slice(arrInptMidIndexLow);

    return selectedArray;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);

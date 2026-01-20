function biggerHalfs(arrInp) {
    let sortedArrInp = arrInp.sort((a, b) => a-b)
    let arrPartial = arrInp.slice(Math.floor(arrInp.length/2));
    return arrPartial;
}

biggerHalfs([4, 7, 2, 5]);
biggerHalfs([3, 19, 14, 7, 2, 19, 6]);

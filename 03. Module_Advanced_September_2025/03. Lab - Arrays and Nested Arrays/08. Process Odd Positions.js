function processOddPosition(arrInp) {
    let result = arrInp
        .filter((_, index) => index %2 !==0)
        .map(x => x*2)
        .reverse()

    console.log(result.join(" "));
}

processOddPosition([10, 15, 20, 25]);
processOddPosition([3, 0, 10, 4, 7, 3]);

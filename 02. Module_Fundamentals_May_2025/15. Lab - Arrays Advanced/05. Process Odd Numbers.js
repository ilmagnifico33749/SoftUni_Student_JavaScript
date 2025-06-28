function processOddNumbers(arrNums) {
    let finalArr = arrNums.filter((_, index) => index % 2 !== 0);
    finalArr = finalArr.map(x => x*2);
    finalArr.reverse();

    console.log(finalArr.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);

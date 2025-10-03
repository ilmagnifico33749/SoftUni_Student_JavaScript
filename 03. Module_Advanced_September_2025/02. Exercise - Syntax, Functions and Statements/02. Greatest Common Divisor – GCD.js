function greatestCommonDivisor(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    console.log(x);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);

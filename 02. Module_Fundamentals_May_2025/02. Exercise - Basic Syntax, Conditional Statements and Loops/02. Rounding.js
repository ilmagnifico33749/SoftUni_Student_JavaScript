function solve(number, precision) {
    if (precision < 0) {
        precision = 0;
    }
    if (precision > 15) {
        precision = 15;
    }
    let result = number.toFixed(precision);
    console.log(parseFloat(result));
}

solve(3.1415926535897932384626433832795,2);

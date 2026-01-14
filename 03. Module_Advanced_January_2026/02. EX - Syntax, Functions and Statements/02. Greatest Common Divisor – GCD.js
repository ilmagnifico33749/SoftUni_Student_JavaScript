function greatestCommonDivisor(num1, num2) {
    a = num1;
    b = num2
    let gdc = undefined;

    while (b !== 0) {
        let remainder = a % b;
        gdc = b;
        a = b;
        b = remainder;
    }

    console.log(gdc);    
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);

function sameNumbers(num) {
    const strNum = num.toString();
    const firstSym = strNum[0];
    let identicity = true;
    let sum = 0;
    for (symbol of strNum) {
        if (symbol !== firstSym) {
            identicity = false;
        }
        sum += Number(symbol)
    }

    console.log(identicity);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);

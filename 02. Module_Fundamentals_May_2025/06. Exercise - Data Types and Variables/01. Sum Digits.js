function solve(num) {
    let numToString = num.toString();
    let lenghtNumString = numToString.length;
    let sumNumsNum = 0;
    for (i=0; i < lenghtNumString; i++) {
        sumNumsNum += Number(numToString[i])
    }
    console.log(sumNumsNum);
}

solve(245678);
solve(97561);
solve(543);

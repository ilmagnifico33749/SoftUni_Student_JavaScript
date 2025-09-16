function sumNums(str1, str2) {
    let num1 = Number(str1);
    let num2 = Number(str2);
    let sum = 0;

    for (let i = num1; i<=num2; i++) {
        sum+=i;
    }
    
    return sum;
}

sumNums('1', '5');
sumNums('-8', '20');

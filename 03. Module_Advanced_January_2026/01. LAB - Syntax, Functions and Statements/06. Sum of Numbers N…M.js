function sumOfNnM(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let sumAllNums = 0;

    for (let startingNum=num1; startingNum<=num2; startingNum++) {
        let currentNum = startingNum;
        sumAllNums+= currentNum
    }

    console.log(sumAllNums);
}

sumOfNnM('1', '5');
sumOfNnM('-8', '20');

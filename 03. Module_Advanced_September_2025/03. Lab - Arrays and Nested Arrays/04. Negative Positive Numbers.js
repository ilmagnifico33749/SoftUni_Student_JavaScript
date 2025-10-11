function negativePositiveNumbers(arrInp) {
    let arrayNums = arrInp;
    let finalArr= []

    for (let i=0; i< arrayNums.length; i++) {
        let currentNum = arrayNums[i];

        if (currentNum<0) {
            finalArr.unshift(currentNum)
        }

        else if (currentNum >= 0) {
            finalArr.push(currentNum)
        }
    }

    for (num of finalArr) {
        console.log(num);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);

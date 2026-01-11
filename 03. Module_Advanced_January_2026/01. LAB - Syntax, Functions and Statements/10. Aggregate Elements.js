function agregateElements(arrInp) {
    let sumAllElements = 0;
    let sumInverse = 0;
    let concatNums = "";

    for (element of arrInp) {
        sumAllElements+=element;
        sumInverse += (1/element);
        concatNums+=element; 
    }

    console.log(sumAllElements);
    console.log(sumInverse);
    console.log(concatNums);
}

agregateElements([1, 2, 3]);
agregateElements([2, 4, 8, 16]);

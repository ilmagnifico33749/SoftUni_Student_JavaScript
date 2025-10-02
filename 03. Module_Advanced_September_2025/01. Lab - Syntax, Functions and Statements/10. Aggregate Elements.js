function agregateElements(arrInp) {
    let sumAi = 0;
    let inversedSumAi = 0;
    let concatAi = "";
    for (let i=0; i <arrInp.length; i++) {
        sumAi+=Number(arrInp[i]);
        inversedSumAi += 1/ arrInp[i];
        concatAi += arrInp[i];
    }

    console.log(sumAi);
    console.log(inversedSumAi);
    console.log(concatAi);
}

agregateElements([1, 2, 3]);
agregateElements([2, 4, 8, 16]);

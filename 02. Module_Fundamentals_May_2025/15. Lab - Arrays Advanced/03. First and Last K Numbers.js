function firstLastKNums(arrInp) {
    let k = arrInp[0];
    let arrToProcess = arrInp.slice(1);

    let firstK = [];
    let lastK = [];

    for (let index = 0; index < k; index++) {
        firstK.push(arrToProcess[index]);
    }

    for (let index = arrToProcess.length - k; index < arrToProcess.length; index++) {
        lastK.push(arrToProcess[index]);
    }

    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}

firstLastKNums([2, 7, 8, 9]);
firstLastKNums([3, 6, 7, 8, 9]);

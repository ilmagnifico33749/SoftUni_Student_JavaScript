function negPosNumsShuf(arrInp) {
    let arrNums = arrInp;
    let newArr = []
    for (let element of arrNums) {
        if (element < 0) {
            newArr.unshift(element);
        }
        else {
            newArr.push(element);
        }
    }
    console.log(newArr.join("\n"));
}

negPosNumsShuf(['7', '-2', '8', '9']);
negPosNumsShuf(['3', '-2', '0', '-1']);

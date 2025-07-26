// Judge is stupid and is giving 0/100 because it's Judge...
function sequencesFunction(arrInp) {
    let arrAllNormFormat = arrInp.map(x => JSON.parse(x).sort((a,b) => b-a));
    let arrUniqueNumsArrsStr = [];
    
    for (let arr of arrAllNormFormat) {
        let currArrStr = arr.join(" ");
        if (!arrUniqueNumsArrsStr.includes(currArrStr)) {
            arrUniqueNumsArrsStr.push(currArrStr)
        }
    }
    
    let arrUniqueNumsArrs = arrUniqueNumsArrsStr
        .map(x => x
            .split(" ")
            .map(Number))
        .sort((a,b) => a.length - b.length);

    for (let uniqueArray of arrUniqueNumsArrs) {
        console.log(uniqueArray);
    }
}


sequencesFunction(
    [
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]
);

sequencesFunction(
    [
        "[7.14, 7.180, 7.339, 80.099]",
        "[7.339, 80.0990, 7.140000, 7.18]",
        "[7.339, 7.180, 7.14, 80.099]"
    ]
);

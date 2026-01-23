// ==================================================================
// Version 1
// ---------
function printEveryNElement(arrInp, numInp) {
    let arrUsrInp = arrInp;
    let numUsrInp = numInp;
    let outputArr = [];

    for (let index=0; index<arrUsrInp.length; index+=numUsrInp) {
        outputArr.push(arrUsrInp[index]);
    }

    return outputArr;
}
// ==================================================================
// Version 2
// ---------
function printEveryNElement(arrInp, numInp) {
    console.log(arrInp.filter((_, index) => index % numInp === 0));
}
// ==================================================================

printEveryNElement(
    ['5', '20', '31', '4', '20'],
    2
)

printEveryNElement (
    ['dsa', 'asd', 'test', 'tset'], 
    2
);

printEveryNElement(
    ['1', '2', '3', '4', '5'], 
    6
)

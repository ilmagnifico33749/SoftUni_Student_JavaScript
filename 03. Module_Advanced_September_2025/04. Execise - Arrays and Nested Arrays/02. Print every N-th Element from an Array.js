function printEveryNElement(arrInp, evElToPrint) {

    let finalArr = [];
    for (let i=0; i<arrInp.length; i+=evElToPrint) {
            finalArr.push(arrInp[i])
    }
    
    return finalArr;
}

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

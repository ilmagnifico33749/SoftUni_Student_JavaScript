function arrayPrintWithDelimeter(arrInp, delimStr) {
    let arrayUsrInp = arrInp;
    let delimeter = delimStr;

    console.log(arrayUsrInp.join(delimeter));
}

arrayPrintWithDelimeter(
    [
        'One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'
);

arrayPrintWithDelimeter(
    [
        'How about no?', 
        'I', 
        'will', 
        'not', 
        'do', 
        'it!'

    ], 
    '_'
);

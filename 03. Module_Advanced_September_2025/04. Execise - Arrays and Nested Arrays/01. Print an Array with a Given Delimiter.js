function arrPrintWithDelim(arrInp, delimeter) {
    console.log(arrInp.join(delimeter));
}

arrPrintWithDelim(
    [
        'One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'
);

arrPrintWithDelim(
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

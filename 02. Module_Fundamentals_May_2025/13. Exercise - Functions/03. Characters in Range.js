function charsInRange(char1, char2) {
    let char1Ascii = char1.charCodeAt(0);
    let char2Ascii = char2.charCodeAt(0);
    let arrSymbs = [];
    let start;
    let end;
    
    if (char1Ascii < char2Ascii) {
        start = char1Ascii + 1;
        end = char2Ascii;
    }
    else {
        start = char2Ascii + 1;
        end = char1Ascii;
    }


    for (let index = start; index < end; index++) {
        arrSymbs.push(String.fromCharCode(index));
    }

    return console.log(arrSymbs.join(" "));
}

charsInRange('a', 'd');
charsInRange('#', ':');
charsInRange('C', '#');

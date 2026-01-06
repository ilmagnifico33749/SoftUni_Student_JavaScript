function stringLength(str1, str2, str3) {
    let totalStrLength = 0;
    let arrStr = [str1, str2, str3];
    for (let str of arrStr) {
        totalStrLength += Number(str.length);
    }

    let medianLengthStr = Math.floor(totalStrLength/(arrStr.length));
    console.log(totalStrLength);
    console.log(medianLengthStr);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');

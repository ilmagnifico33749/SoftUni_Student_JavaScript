function repeatString(inputString, repeatCount) {
    result = ``;
    for (let count=0; count < repeatCount; count++) {
        result += inputString
    }

    return console.log(result);
}

repeatString("abc", 3);
repeatString("String", 2);

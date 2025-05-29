function reversedString(userInput) {
    let originalStringLength = userInput.length;
    let reversedStringOutput = "";
    for (i = (originalStringLength - 1); i >= 0; i--) {
        reversedStringOutput += userInput[i]
    }
    console.log(reversedStringOutput);
}

reversedString('Information')
reversedString('star')
reversedString('racecar');
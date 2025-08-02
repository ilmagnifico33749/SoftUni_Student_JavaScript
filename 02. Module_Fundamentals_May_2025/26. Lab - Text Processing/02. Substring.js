function substringFunction(stringInput, startingIndex, elementsCount) {
    let strSubstring = stringInput.substring(startingIndex, startingIndex+elementsCount);
    console.log(strSubstring);
}

substringFunction('ASentence', 1, 8);
substringFunction('SkipWord', 4, 7);

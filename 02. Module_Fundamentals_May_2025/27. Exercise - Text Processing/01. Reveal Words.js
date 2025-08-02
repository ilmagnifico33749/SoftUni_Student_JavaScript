function revealWords(strToUse, strSentence) {
    let wordsToUse = strToUse.split(", ");
    let strToLookInto = strSentence.split(" ");
    let finalString = strSentence;
    
    for (let word of strToLookInto) {
        if (word.includes("*")) {
            for (let wordReplacement of wordsToUse) {
                if (wordReplacement.length === word.length) {
                    finalString = finalString.replace(word, wordReplacement)
                }
            }
        }
    }

    console.log(finalString);
}

revealWords(
    'great',
    'softuni is ***** place for learning new programming languages'
);

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);

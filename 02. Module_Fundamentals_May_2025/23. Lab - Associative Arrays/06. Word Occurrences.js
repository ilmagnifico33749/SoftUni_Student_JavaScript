function wordOccurencesFunction(arrInp) {
    let wordsOccurencesMap = new Map();

    for (let word of arrInp) {

        if (wordsOccurencesMap.has(word)) {
            let valueOld = Number(wordsOccurencesMap.get(word));
            let valueNew = valueOld + 1;
            wordsOccurencesMap.set(word, valueNew);
        }

        else {
            wordsOccurencesMap.set(word, 1);
        }
    }

    let wordsOccurencesArraySorted = Array.from(wordsOccurencesMap).sort((a,b) => b[1] - a[1]);
    
    for (let [word, occurences] of wordsOccurencesArraySorted) {
        console.log(`${word} -> ${occurences} times`)
    }
}

wordOccurencesFunction(
    [
        "Here", "is", "the", "first", "sentence",
        "Here", "is", "another", "sentence", "And",
        "finally", "the", "third", "sentence"
    ]
);

wordOccurencesFunction(
    [
        "dog", "bye", "city", "dog", "dad", "boys", "ginger"
    ]
);

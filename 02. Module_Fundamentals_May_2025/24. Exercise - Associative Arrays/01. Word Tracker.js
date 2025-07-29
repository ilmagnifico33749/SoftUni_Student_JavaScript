function wordsTrackerFunction(arrInp) {
    let wordsTrackerMap = new Map;
    let [wordsToTrack, ...arrayToSearchIn] = arrInp;
    wordsToTrack = wordsToTrack.split(" ").map(word => word.trim());
    for (let word of arrayToSearchIn) {
        if (wordsToTrack.includes(word.trim())) {
            if (!wordsTrackerMap.has(word)) {
            wordsTrackerMap.set(word, 1);
            }
            else {
                let countCurrent = wordsTrackerMap.get(word);
                let countNew = countCurrent + 1;
                wordsTrackerMap.set(word, countNew);
            }
        }
    }

    let wordsTrackerArray = Array.from(wordsTrackerMap)
                                .sort((a, b) => b[1] - a[1]);
    
    for (let [word, count] of wordsTrackerArray) {
        console.log(`${word} - ${count}`);
    }
}


wordsTrackerFunction(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have',
        'to', 'count', 'the', 'occurrences', 'of',
        'the', 'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'
    ]
);

wordsTrackerFunction(
    [
        'is the',
        'first', 'sentence', 'Here', 'is',
        'another', 'the', 'And', 'finally', 'the',
        'the', 'sentence'
    ]
);

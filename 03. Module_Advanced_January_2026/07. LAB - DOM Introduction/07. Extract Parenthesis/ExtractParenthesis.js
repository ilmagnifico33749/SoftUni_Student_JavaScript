function extract(content) {
    const textToAnalyze = document.getElementById(content).textContent;
    // console.log(textToAnalyze);
    let extractedText = []
    let startingIndex = undefined;
    let endingIndex = undefined;

    for (let index=0; index<textToAnalyze.length; index++) {
        let currentSymbol = textToAnalyze[index];
        
        if (currentSymbol === "(") {
            startingIndex = index;
        }

        else if (currentSymbol === ")") {
            endingIndex = index;
            let currentTextExtraction = textToAnalyze.substring(startingIndex+1, endingIndex);
            extractedText.push(currentTextExtraction);
            startingIndex = undefined;
            endingIndex = undefined;
        }
    }

    // console.log(extractedText.join("; "))
    return extractedText.join("; ")
}

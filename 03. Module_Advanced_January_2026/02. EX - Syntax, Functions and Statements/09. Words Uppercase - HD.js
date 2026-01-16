function wordsUppercase(text) {
    let words = [];
    let currentWord = "";

    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);

        // A–Z → 65–90
        // a–z → 97–122
        let isUpper = code >= 65 && code <= 90;
        let isLower = code >= 97 && code <= 122;

        if (isUpper || isLower) {
            currentWord += text[i];
        } else {
            if (currentWord.length > 0) {
                words.push(currentWord.toUpperCase());
                currentWord = "";
            }
        }
    }

    // Push last word if string ends with a letter
    if (currentWord.length > 0) {
        words.push(currentWord.toUpperCase());
    }

    console.log(words.join(", "));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');

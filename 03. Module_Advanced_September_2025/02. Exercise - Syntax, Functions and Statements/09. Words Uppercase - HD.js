function wordsUppercase(input) {
    const words = input
        .match(/\w+/g) // Extract all word characters (letters, digits, underscores)
        .map(word => word.toUpperCase()); // Convert each word to uppercase

    console.log(words.join(", "));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
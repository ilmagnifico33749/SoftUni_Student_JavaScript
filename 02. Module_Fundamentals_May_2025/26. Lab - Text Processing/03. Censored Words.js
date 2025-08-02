function censoredWord(strInp, strToReplace) {
    let replaceString = "*".repeat(strToReplace.length);
    let censuredVersion = strInp.replace(strToReplace, replaceString);
    console.log(censuredVersion);
}

censoredWord('A small sentence with some words', 'small');
censoredWord('Find the hidden word', 'hidden');

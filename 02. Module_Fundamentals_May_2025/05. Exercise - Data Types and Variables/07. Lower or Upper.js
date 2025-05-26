function lowerUpperCase(userInput) {
    let userInputAsciiCode = userInput.charCodeAt();
    let status;
    if (userInputAsciiCode >= 65 && userInputAsciiCode <= 90)
        status = 'upper-case';
    else if (userInputAsciiCode >= 97 && userInputAsciiCode <= 122) {
        status = 'lower-case';
    }
    console.log(status);
}

lowerUpperCase('L');
lowerUpperCase('f');

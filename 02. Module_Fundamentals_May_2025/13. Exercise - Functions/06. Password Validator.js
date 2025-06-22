function passwordValidator(userInput) {
    let validPassword=false;
    let messageValidPassword = `Password is valid`;
    let passLengthValidity;
    let messageInvalidLength = `Password must be between 6 and 10 characters`;
    let passSymbolsValidity=true;
    let messageInvalidSymbols = `Password must consist only of letters and digits`;
    let passDigitsValidity;
    let messageInvalidDigits = `Password must have at least 2 digits`;
    let digitsCount = 0;

    let userInputToArray = userInput.toString().split('');


    function lengthValidity(userInput) {
        if (userInput.length >= 6 && userInput.length <= 10) {
            passLengthValidity = true;
        }
        else {
            passLengthValidity = false;
        }
    }

    function symbolsValidity(symbol) {
        let symbolAsciiPosition = Number(symbol.charCodeAt(0));
        return (
            (symbolAsciiPosition >= 48 && symbolAsciiPosition <= 57) || 
            (symbolAsciiPosition >= 65 && symbolAsciiPosition <=90) || 
            (symbolAsciiPosition >= 97 && symbolAsciiPosition <= 122)
        );
    }

    function digitsValidity(symbol) {
        let symbolAsciiPosition = Number(symbol.charCodeAt(0));
        return (symbolAsciiPosition >= 48 && symbolAsciiPosition <= 57)

    }


    for (let element of userInputToArray) {
        if (digitsValidity(element)){
            digitsCount++;
        }

        if (!symbolsValidity(element)) {
            passSymbolsValidity = false
        }
    }

    if (digitsCount >= 2) {
        passDigitsValidity = true;
    }
    else {
        passDigitsValidity = false;
    }

    lengthValidity(userInput);

    if (passLengthValidity == false) {
        validPassword = false;
        console.log(messageInvalidLength)
    }

    if (passSymbolsValidity == false) {
        validPassword = false;
        console.log(messageInvalidSymbols);
    }

    if (passDigitsValidity == false) {
        validPassword = false;
        console.log(messageInvalidDigits);
    }

    if (passLengthValidity == true && passSymbolsValidity == true && passDigitsValidity == true) {
        validPassword = true;
    }

    if (validPassword == true) {
        console.log(messageValidPassword);
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');

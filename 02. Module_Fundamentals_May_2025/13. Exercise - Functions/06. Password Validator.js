function passwordValidator(userInput) {
    let validPassword;
    let messageValidPassword = `Password is valid`;
    let passLengthValidity;
    let messageInvalidLength = `Password must be betwee 6 and 10 characters`;
    let passSymbolsValidity;
    let messageInvalidSymbols = `Password must consist only of letters and digits`;
    let passDigitsValidity;
    let messageInvalidDigits = `Passowrd must have at least 2 digits`;

    let userInputToArray = userInput.toString().split('');


    function lengthValidity(userInput) {
        if (userInput.length < 6 && userInput.length > 10) {
            passLengthValidity = true;
        }
        else {
            passLengthValidity = false;
        }
    }

    function symbolsValidity(symbol) {
        let symbolAsciiPosition = Number(symbol.charCodeAt(0));
        if ((symbolAsciiPosition >= 48 && symbolAsciiPosition <= 57) 
            || (symbolAsciiPosition >= 65 && symbolAsciiPosition <=90) 
            || (symbolAsciiPosition >= 97 && symbolAsciiPosition <= 122)) {
                passSymbolsValidity = true;
            }
        else {
            passSymbolsValidity = false; 
        }
    }

    function digitsValidity(symbol) {
        let symbolAsciiPosition = Number(symbol.charCodeAt(0));
        // if (symbolAsciiPosition >= 48 && symbolAsciiPosition <= 57) {
        //     passDigitsValidity = true;
        // }
        // else {
        //     passDigitsValidity = false;
        // }
        return (symbolAsciiPosition >= 48 && symbolAsciiPosition <= 57)

    }

    for (let element of userInputToArray) {
        let count = 0;

        if (digitsValidity(element)){
            count++;
            if (count >= 2) {
                passDigitsValidity = true;
            }
            else {
                passDigitsValidity = false;
            }
        };

        if (passDigitsValidity != false) {
            digitsValidity(element);
        }

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

// passwordValidator('logIn');
passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');

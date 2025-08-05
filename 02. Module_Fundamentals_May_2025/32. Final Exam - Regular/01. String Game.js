function stringGameFunction(userInp) {
    let [inputStr, ...userCommands] = userInp;
    let finalString = inputStr;

    for (let command of userCommands) {
        let commandDetails = command.split(" ");
        let action = commandDetails.shift();

        if (action === "Change") {
            let charToReplace = commandDetails.shift();
            let replacementChar = commandDetails.pop();
            while (finalString.includes(charToReplace)) {
                finalString = finalString.replace(charToReplace, replacementChar);
            }
            console.log(finalString);
        }

        else if (action === "Includes") {
            let substring = commandDetails.pop();
            console.log(finalString.includes(substring) ? "True" : "False");
        }

        else if (action === "End") {
            let substring = commandDetails.pop();
            console.log(finalString.endsWith(substring) ? "True" : "False");
        }

        else if (action === "Uppercase") {
            finalString = finalString.toUpperCase();
            console.log(finalString);
            
        }
        else if (action === "FindIndex") {
            let char = commandDetails.pop();
            let indexOfChar = finalString.indexOf(char);
            console.log(indexOfChar);

        }
        else if (action === "Cut") {
            let startIndex = Number(commandDetails.shift());
            let count = Number(commandDetails.pop());
            finalString = finalString.substring(startIndex, startIndex+count);
            console.log(finalString);
        }
        else if (action === "Done") {

        }
    }
}


stringGameFunction(
    ([
        "//Th1s 1s my str1ng!//",
        "Change 1 i",
        "Includes string",
        "End my",
        "Uppercase",
        "FindIndex I",
        "Cut 5 5",
        "Done"
    ])
);


stringGameFunction(
    ([
        "*S0ftUni is the B3St Plac3**",
        "Change 2 o",
        "Includes best",
        "End is",
        "Uppercase",
        "FindIndex P",
        "Cut 3 7",
        "Done"
    ])
);


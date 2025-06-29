function arrayManipulation(arrInp) {
    let arrayToManipulate = arrInp
        .shift()
        .split(' ')
        .map(Number);

    let arrayCommands = arrInp.splice(0);

    function add(symbol, arrayInput) {
        arrayInput.push(symbol);
    }

    function remove(symbol, arrayInput) {
        return arrayInput.filter(num => num !== symbol);
    }

    function removeAt(index, arrayInput) {
        arrayInput.splice(index, 1)
    }

    function insert(symbol, index, arrayInput) {     
        arrayInput.splice(index, 0, symbol);
    }

    for (command of arrayCommands) {
        let currentCommand = command.split(' ');
        let commandOp = currentCommand.shift();
        let commandNum = currentCommand.map(Number).shift()
        let commandIndex = currentCommand.map(Number).pop();

        switch (commandOp) {
            case "Add": 
                add(commandNum, arrayToManipulate);
                break;
            case "Remove": 
                arrayToManipulate = remove(commandNum, arrayToManipulate);
                break;
            case "RemoveAt": 
                removeAt(commandNum, arrayToManipulate);
                break;
            case "Insert":
                insert(commandNum, commandIndex, arrayToManipulate);
                break;
        }
    }

    console.log(arrayToManipulate.join(" "));
}

arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulation(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);

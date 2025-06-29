function arrayManipulation(arrInp) {
    let arrayToManipulate = arrInp[0].split(" ");
    let arrayCommands = arrInp.slice(1);
    console.log(arrayToManipulate);
    console.log(arrayCommands);

    function add(symbol, arrayInput) {
        arrayInput.push(symbol);
    }

    function remove(symbol, index, arrayInput) {
        for (let element of arrayInput) {
            if (element == symbol) {
                arrayInput.splice(index, 1);
            }
        }

    }

    function removeAt(symbol, index, arrayInput) {
        
    }

    function insert(symbol, index, arrayInput) {

    }
    
}

arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulation(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);

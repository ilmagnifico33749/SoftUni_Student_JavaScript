/// Judge is stupid and gives only 72/100 points...

function arrayManipulator(arr1, arr2) {
    let arrIntgrs = arr1;
    let arrCommands = arr2;

    function add(index, element, array) {
        array.splice(index, 0, element);
    }

    function addMany(index, elements, array) {
        for (let element of elements.reverse()) {
            array.splice(index, 0, element);
        }
    }

    function contains(element, array) {
        console.log(array.indexOf(element));
    }

    function remove(index, array) {
        array.splice(index, 1);
    }

    function shifting(times, array) {
        for (i=0; i<times; i++) {
            let elementToShift = array.shift()
            array.push(elementToShift);
        }
    }

    function sumPairs(array) {
        for (index=0; index<array.length; index++) {
            let arrPair = array.splice(index, 2).map(Number)
            let sumPair = 0 
            for (let element of arrPair) {
                sumPair += element;
            }
            array.unshift(sumPair);
        }
    }
    
    function print(array) {
        console.log(`[ ${array.map(Number).join(", ")} ]`);
    }

    for (let command of arrCommands) {
        let currentCommand = command.split(" ");
        let commandAction = currentCommand.shift();
        currentCommand = currentCommand.map(Number); 

        if (commandAction == "add") {
            let index = currentCommand.shift();
            let element = currentCommand.shift();
            add(index, element, arrIntgrs);
        }

        else if (commandAction == "addMany") {
            let index = currentCommand.shift();
            let elements = currentCommand.splice(0);
            addMany(index, elements, arrIntgrs);
        }

        else if (commandAction == "contains") {
           let element = Number(currentCommand.shift());
           contains(element, arrIntgrs);
        }

        else if (commandAction == "remove") {
            let index = Number(currentCommand.shift());
            remove(index, arrIntgrs);
        }

        else if (commandAction == "shift") {
            let timesToShift = Number(currentCommand.shift());
            shifting(timesToShift, arrIntgrs);
        }

        else if (commandAction == "sumPairs") {
            sumPairs(arrIntgrs);
        }
        
        else if (commandAction == "print") {
            print(arrIntgrs);
            break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

function train(arrInp) {
    let wagonsArr = arrInp.shift().split(" ").map(Number);
    let wagonMaxCap = arrInp.shift()
    let commandsArr = arrInp.slice(0);

    function addNew(wagonValue, array) {
        array.push(wagonValue)
    }

    function addToCurrent(value, array) {
        for (index=0; index<array.length; index++) {
            let currentWagon = Number(array[index])
            let potentialValue = currentWagon + value
            if (potentialValue <= wagonMaxCap) {
                array[index] = potentialValue;
                break;
            }
        }
    }

    for (let command of commandsArr) {
        let commandCurrent = command.split(" ").shift();

        if (commandCurrent == "Add") {
            let newWagonValue = command.split(" ").map(Number).pop();
            addNew(newWagonValue, wagonsArr)
        }

        else {
            let wagonValueToAdd = Number(command);
            addToCurrent(wagonValueToAdd, wagonsArr)
        }
    }

    console.log(wagonsArr.join(" "));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);

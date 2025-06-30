function gladiatorInventory(arrInp) {

    let inventory = arrInp.shift().split(" ");
    let commandsArr = arrInp;

    function buy(equipment, array) {
        if (!array.includes(equipment))
        array.push(equipment);
    }

    function trash(equipment, array) {
        if (array.includes(equipment)) {
            for (index=0; index<array.length; index++) {
                let currentElement = array[index];
                if (currentElement == equipment) {
                    array.splice(index, 1);
                    index--;
                }
            };
        }
    }

    function repair(equipment, array) {
        if (array.includes(equipment)) {
            for (index=0; index<array.length; index++) {
                let currentElement = array[index];
                if (currentElement == equipment) {
                    array.splice(index, 1);
                    array.push(currentElement);
                    break;
                };
            }
            
        }
    }

    function upgrade(equipment, upgrade, array) {

        if (array.includes(equipment)) {
            for (index=0; index<array.length; index++) {
                let currentElement = array[index];
                if (currentElement == equipment) {
                    array.splice(index+1, 0, `${equipment}:${upgrade}`);
                    break;
                };
            };
        }
    }

    for (let command of commandsArr) {
        let currentCommand = command.split(" ");
        let commandOperation = currentCommand.shift();
        let eqipmentdetails = currentCommand.shift();

        if (commandOperation == "Buy") {
            buy(eqipmentdetails, inventory);
        }
        
        else if (commandOperation == "Trash") {
            trash(eqipmentdetails, inventory);
        }

        else if (commandOperation == "Repair") {
            repair(eqipmentdetails, inventory);
        }

        else if (commandOperation == "Upgrade") {
            let eqipmentdetailsNameUpgrade = eqipmentdetails.split("-")
            let equipmentName = eqipmentdetailsNameUpgrade.shift();
            let equipmentUpgrade = eqipmentdetailsNameUpgrade.pop();
            upgrade(equipmentName, equipmentUpgrade, inventory);
        }
    }
    console.log(inventory.join(" "))
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);

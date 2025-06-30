function gladiatorInventory(arrInp) {

    let inventory = arrInp.shift().split(" ");
    let commandsArr = arrInp;

    function repair(equipment, array) {
        if (array.includes(equipment)) {
            for (index=0; index<array.length; index++) {
                let currentElement = array[index];
                if (currentElement == equipment) {
                    array.splice(index, 1);
                    array.push(equipment);
                    break;
                };
            }
            
        }
    }

    repair("Spear", inventory)
    console.log(inventory.join(" "))
}

gladiatorInventory(['SWORD Shield Spear Bag','Repair Spear']);
// gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);

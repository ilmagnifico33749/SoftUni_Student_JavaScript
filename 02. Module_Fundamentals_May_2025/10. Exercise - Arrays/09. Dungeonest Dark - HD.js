function solve(stringInput) {
    let initialHealth = 100;
    let initialCoins = 0;
    let currentHealth = initialHealth;
    let arrayRooms = stringInput.split("|");
    let alive=true;

    for (let room in arrayRooms) {
        let arrayRoomElements = arrayRooms[room].split(" ");
        let itemName = arrayRoomElements[0];
        let itemValue = Number(arrayRoomElements[1]);
        let healingValue = 0;

        if (itemName === "potion") {
            let potentialNewHealth = currentHealth + itemValue;
            if (potentialNewHealth > initialHealth) {
                healingValue = initialHealth - currentHealth;
                currentHealth = initialHealth;
            }
            else {
                healingValue = itemValue;
                currentHealth = potentialNewHealth;
            }
            console.log(`You healed for ${healingValue} hp.`);
            console.log(`Current health: ${currentHealth} hp.`);
        }

        else if (itemName === "chest") {
            initialCoins += itemValue;
            console.log(`You found ${itemValue} coins.`);
        }

        else {
            currentHealth -= itemValue;
            if (currentHealth>0) {
                console.log(`You slayed ${itemName}.`)
            }
            else {
                alive = false;
                console.log(`You died! Killed by ${itemName}.`)
                console.log(`Best room: ${Number(room) + 1}`);
                break;
            }
        }
    }

    if (alive == true) {
            console.log(`You've made it!`);
            console.log(`Coins: ${initialCoins}`);
            console.log(`Health: ${currentHealth}`);
    }

}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

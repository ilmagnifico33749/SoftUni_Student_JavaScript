function steamAccount(arrInp) {
    let inventoryGames = arrInp[0].split(" ");
    let commands = arrInp.slice(1);
    
    
    // console.log(inventoryGames)
    // console.log(commands);

    for (let index = 0; index<commands.length; index++) {
        let currentCommand = commands[index].split(" ");
        let commandAction = currentCommand[0];
        let commandGame = currentCommand[1];

        if (commandAction !== "Play!") {
            switch(commandAction) {
                case "Install":
                    if (!inventoryGames.includes(commandGame)) {
                        inventoryGames.push(commandGame);
                    }
                    break;
                case "Uninstall":
                    if (inventoryGames.includes(commandGame)) {
                        let gameIndex = inventoryGames.indexOf(commandGame);
                        inventoryGames.splice(gameIndex, 1);
                    }
                    break;
                case "Update":
                    if (inventoryGames.includes(commandGame)) {
                        let gameIndex = inventoryGames.indexOf(commandGame);
                        inventoryGames.splice(gameIndex, 1);
                        inventoryGames.push(commandGame);
                    }
                    break;
                case "Expansion":
                    let gameDetails = commandGame.split("-");
                    let gameMain = gameDetails[0];
                    let gameExpansion = gameDetails[1];
                    if (inventoryGames.includes(gameMain)) {
                        let gameIndex = inventoryGames.indexOf(gameMain);
                        let gameWithExpansion = `${gameMain}:${gameExpansion}`;
                        inventoryGames.splice((gameIndex+1), 0, gameWithExpansion);
                    }
                    break;
            }
        }
        else {
            return console.log(inventoryGames.join(" "));
        }
    }    
}

steamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
steamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);

function experienceGaining(input) {
    let experienceNeeded = input[0];
    let battlesCount = input[1];
    let experienceGained = 0;
    let arrBattles = input.splice(2);
    let messageSuccess = `Player successfully collected his needed experience for {battleCount} battles.`;
    let messageFailure = `Player was not able to collect the needed experience, {neededExperience} more needed.`;    


    for (let index = 0; index<arrBattles.length; index++) {
        let experienceCurrBatt = arrBattles[index];
        let battleCount = index+1;
        if (battleCount % 3 == 0) {
            experienceCurrBatt *= 1.15;
        }
        else if (battleCount % 5 == 0) {
            experienceCurrBatt *= 0.9;
        }

        else if (battleCount % 15 == 0) {
            experienceCurrBatt *= 1.05;
        }
        experienceGained += experienceCurrBatt;


        if (experienceGained >= experienceNeeded) {
            return console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
        }
        
    }

    if (experienceGained < experienceNeeded) {
        console.log(`Player was not able to collect the needed experience, ${(experienceNeeded-experienceGained).toFixed(2)} more needed.`)
    }
}

experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);

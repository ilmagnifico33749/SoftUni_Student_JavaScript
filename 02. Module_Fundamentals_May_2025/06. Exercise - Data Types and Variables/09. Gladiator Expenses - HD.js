function solve (lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let timesHelmetBroken = 0;
    let timesSwordBroken = 0;
    let timesShieldBroken = 0;
    let timesArmorBroken = 0;


    for (let count = 1; count <= lostFightsCount; count++) {
        if (count % 2 === 0) {
            timesHelmetBroken++;
        }
        if (count % 3 === 0) {
            timesSwordBroken++;
        }
        if (count % 2 === 0 && count % 3 === 0) {
            timesShieldBroken++;
            if (timesShieldBroken % 2=== 0) {
                timesArmorBroken++;
            }
        }
    }

    expenses = (timesHelmetBroken * helmetPrice) + (timesSwordBroken * swordPrice) + (timesShieldBroken * shieldPrice) + (timesArmorBroken * armorPrice);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);

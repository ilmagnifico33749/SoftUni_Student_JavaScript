function heroicInventory(arrInp) {
    let registerAllHeroesArr = [];

    for (let heroeInfo of arrInp) {
        if (!heroeInfo.trim()) continue;
        const currentHeroeInfo = heroeInfo.split(" / ");
        // console.log(currentHeroeInfo);
        let [currentHeroeName, currentHeroeLevel, currentHeroeItems] = currentHeroeInfo;
        let currentHeroeObject = {
            name: currentHeroeName,
            level: Number(currentHeroeLevel),
            items: currentHeroeItems ? currentHeroeItems.split(", ") : []
        }
        // console.log(currentHeroeObject.items);
        registerAllHeroesArr.push(currentHeroeObject);
    }

    const registerAllHeroesJSON = JSON.stringify(registerAllHeroesArr);
    console.log(registerAllHeroesJSON)
    // return registerAllHeroesJSON
}


// Test Input 1:
// heroicInventory(
//     [
//         'Isacc / 25 / Apple, GravityGun',
//         'Derek / 12 / BarrelVest, DestructionSword', 
//         'Hes / 1 / Desolator, Sentinel, Antara'
//     ]
// )


// Test Input 2:
heroicInventory(
    [
        'Jake / 1000 / Gauss, HolidayGrenade'
    ]
)

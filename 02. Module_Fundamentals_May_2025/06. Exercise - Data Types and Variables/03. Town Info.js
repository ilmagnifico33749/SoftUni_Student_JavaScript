function solve(townName, townPopulation, townArea) {
    let townNameValidity = true;
    let townPopulationValidity = true;
    let townAreaValidity = true;

    if (townName.length < 3) {
        console.log(`Town name must be at least 3 characters!`);
        townNameValidity = false;
    }
    
    if (townPopulation < 0) {
        console.log(`Population must be a positive number!`)
        townPopulationValidity = false;
    }

    if (townArea < 0) {
        console.log(`Area must be a positive number!`)
        townAreaValidity = false;
    }

    if (townNameValidity === true && townPopulationValidity === true && townAreaValidity=== true) {
        console.log(`Town ${townName} has population of ${townPopulation} and area ${townArea} square km.`)
    }
}

solve('Sofia', 1286383, 492);
solve('LA', 1481353, 512);
solve('Plovdiv', -45000, 100);
solve('Ka', 3600, -50);

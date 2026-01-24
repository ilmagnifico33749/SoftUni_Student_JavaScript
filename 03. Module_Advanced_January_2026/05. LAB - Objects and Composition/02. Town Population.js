function townPopulation(arrInp) {
    let arrUsrInp = arrInp;
    let townArr = []; 

    function createTownObj(name, pops) {
        return {
        townName: name,
        townPops: pops
        }
    };

    for (let cityInfo of arrUsrInp) {
        let [cityName, cityPopulation] = cityInfo.split(" <-> ")
        cityPopulation = Number(cityPopulation);
        
        let found = false; 
        for (let town of townArr) {
            if (town.townName === cityName) {
                town.townPops += cityPopulation;
                found = true; 
                break;
            }
        }
        
        if (!found) {
            townArr.push(createTownObj(cityName, cityPopulation));
        }
    }

    for (let townObj of townArr) {
        let [name, pops] = Object.values(townObj)
            console.log(`${name} : ${pops}`); 
    }
}


townPopulation(
    [
        'Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ]
);

townPopulation(
    [
        'Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]
);

function towns(arrInp) {
    let listTowns = [];

    for (let townDetails of arrInp) {
        let currentTownDetails = townDetails.split(" | ");
        let currentTownName = currentTownDetails.shift();
        let currentTownLatitude = currentTownDetails.shift();
        let currentTownLongitude = currentTownDetails.pop();
        let townObj = {
            town: currentTownName,
            latitude: Number(currentTownLatitude).toFixed(2),
            longitude: Number(currentTownLongitude).toFixed(2)
        }
        listTowns.push(townObj);

    }

    for (let town of listTowns) {
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);


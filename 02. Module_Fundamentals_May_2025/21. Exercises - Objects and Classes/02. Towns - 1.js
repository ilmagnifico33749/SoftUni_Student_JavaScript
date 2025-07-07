function towns(arrInp) {
    let listTowns = [];

    class Town {
        constructor(name, latitude, longuitude) {
            this.name = name;
            this.latitude = Number(latitude).toFixed(2);
            this.longuitude = Number(longuitude).toFixed(2);
        }

        toObject() {
            return {
                town: this.name,
                latitude: this.latitude,
                longitude: this.longitude
                };
        }
    }

    for (let townDetails of arrInp) {
        let currentTownDetails = townDetails.split(" | ");
        let currentTownName = currentTownDetails.shift();
        let currentTownLatitude = currentTownDetails.shift();
        let currentTownLongitude = currentTownDetails.pop();
        let town = new Town(currentTownName, currentTownLatitude, currentTownLongitude);
        listTowns.push(town);

    }

    for (let town of listTowns) {
        console.log(town.toObject);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);



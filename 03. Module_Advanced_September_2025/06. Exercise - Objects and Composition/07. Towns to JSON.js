function townToJSON(arrInp) {
    let result = []

    let columnsNamesRaw = arrInp.shift()
        .split("|")
        .filter(part => part !== '')
        .map(x => x.trim());

    let columnNamesRefined = {};

    for (let index=0; index<columnsNamesRaw.length; index++) {
        let currentColumnName = columnsNamesRaw[index];
        console.log(currentColumnName)
        columnNamesRefined[`Column-${index}`] = currentColumnName;
    }

    for (let cityInfo of arrInp) {
        let cityInfoRefined = [];
        let currentCityObject = {}
        let [cityName, cityLatitude, cityLongitude] = cityInfo
            .split("|")
            .filter(part => part !== '')
            .map(x => x.trim());
        console.log(cityName, cityLatitude, cityLongitude); 
        cityInfoRefined[cityName, cityLatitude, cityLongitude];
        
        for (let index in Object.keys(columnNamesRefined)) {
            let currentColumnName = columnNamesRefined[index];
            let currentCityStat = cityInfoRefined[index];
            currentCityObject[currentColumnName] = currentCityStat;
        }
        console.log(currentCityObject)
        result.push(currentCityObject);
    }
    console.log(JSON.stringify(result));
}

townToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]
)

// townToJSON(
//     [
//         '| Town | Latitude | Longitude |', 
//         '| Veliko Turnovo | 43.0757 | 25.6172 |', 
//         '| Monatevideo | 34.50 | 56.11 |'
//     ]
// );

function airPollution(arrInp1, arrInp2) {
    matrixMap = arrInp1.map(x => x.split(" ").map(Number));
    natForces = arrInp2;
    let pollutionTreshold = 50;
    let pollutedAreas = [];

    for (let natForceDetails of natForces) {
        let [natForceName, value] = natForceDetails.split(" ");

        if (natForceName == "breeze") {
            for (let column in matrixMap[value]) {
                result = matrixMap[value][column] - 15
                if (result >= 0) {
                    matrixMap[value][column] = result;
                }
                else {
                    matrixMap[value][column] = 0;
                };
            }
        }

        else if (natForceName == "gale") {
            for (let row in matrixMap) {
                for (let column in matrixMap[row]) {
                    if (column == value) {
                        result = matrixMap[row][column] - 20;
                        if (result >= 0) {
                            matrixMap[row][column] = result;
                        }
                        else {
                            matrixMap[row][column] = 0;
                        };
                    }
                }
            }   
        }

        else if (natForceName == "smog") {
            for (let row in matrixMap) {
                for (let column in matrixMap[row]) {
                    matrixMap[row][column] += Number(value);
                }
            }       
        }
    }

    function testPolution(value) {
        if (pollutionTreshold >= value) {
            return false;
        }
        else {
            return true;
        };
    }

    for (let row in matrixMap) {
        for (let column in matrixMap[row]) {
            let cellValue = matrixMap[row][column];
            let cellCoordinates = `[${row}-${column}]`;
            if (testPolution(cellValue) == true) {
                pollutedAreas.push(cellCoordinates);
            }
        }
    }
    
    if (pollutedAreas.length == 0) {
        console.log("No polluted areas")
    }
    else {
        console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
    }
}

airPollution(
    [
        '5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'
    ],
    [
        'breeze 1', 'gale 2', 'smog 25'
    ]
);

airPollution(
    [
        '5 7 3 28 32',
        '41 12 49 30 33',
        '3 16 20 42 12',
        '2 20 10 39 14',
        '7 34 4 27 24'
    ],
    [
        'smog 11', 'gale 3', 'breeze 1', 'smog 2'
    ]
);

airPollution(
    [
        '5 7 2 14 4',
        '21 14 2 5 3',
        '3 16 7 42 12',
        '2 20 8 39 14',
        '7 34 1 10 24'
    ],
    [
        'breeze 1', 'gale 2', 'smog 35'
    ]
);

// Getting only 30/100 in Judge... to find out why...

function bunnyKill(arrInp) {
    let totalDamageDone = 0;
    let killCount = 0;
    let coordinatesBombBunnies = arrInp.pop().split(" ");
    let matrix = [];
    let affectedCoordinates = [];

    for (let row in arrInp) {
        let currentRow = arrInp[row]
            .split(" ")
            .map(Number);
        matrix.push(currentRow);
    }

    function affectedCoordinatesCalculation(positionCoord) {
        let [positionRow, positionColumn] = positionCoord.split(",").map(Number);
        let matrixSize = matrix.length-1;

        for (let indexRow=positionRow-1; indexRow<=positionRow+1; indexRow++) {
            if (indexRow >= 0 && indexRow <= matrixSize) {
                let affectedRow = Number(indexRow);
                let columnSize = matrix[affectedRow].length-1;
                for (let indexColumn = positionColumn-1; indexColumn<=positionColumn+1; indexColumn++) {
                    let affectedColumn = Number(indexColumn);
                    if (affectedColumn>=0 && affectedColumn<=columnSize) {
                        let coordinates = `${affectedRow},${affectedColumn}`
                        affectedCoordinates.push(coordinates);
                    }
                }
            }
        }
    }

    function explosion(power, affectedPositions, affectedMatrix) {
        for (let position of affectedPositions) {
            let [positionRow, positionColumn] = position.split(",");
            let affectedPositionInitialValue = Number(affectedMatrix[positionRow][positionColumn]);
            let affectedPositionNewValue = Number(affectedPositionInitialValue - power);
            if (affectedPositionNewValue < 0) {
                affectedPositionNewValue = 0;
            }
            affectedMatrix[positionRow][positionColumn] = affectedPositionNewValue;
        }
    }

    for (let coordinatesBombBunny of coordinatesBombBunnies) {
        affectedCoordinates = []
        let [positionRow, positionColumn] = coordinatesBombBunny
            .split(",")
            .map(Number);
        let power = Number(matrix[positionRow][positionColumn]);
        totalDamageDone+=power;
        killCount++;
        affectedCoordinatesCalculation(coordinatesBombBunny);
        explosion(power, affectedCoordinates, matrix);
    }

    for (let row in matrix) {
        for (let convinctBunny of matrix[row]) {
            if (Number(convinctBunny) > 0) {
                // console.log(convinctBunny);
                totalDamageDone+= Number(convinctBunny);
                killCount++;
            }
        }
    }

    console.log(totalDamageDone);
    console.log(killCount);
}


bunnyKill(
    [
        '5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1'
    ]
);

bunnyKill(
    [
        '10 10 10',
        '10 10 10',
        '10 10 10',
        '0,0'
    ]
);

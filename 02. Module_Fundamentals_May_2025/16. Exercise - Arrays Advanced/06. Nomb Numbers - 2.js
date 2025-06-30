// Getting 100/100 from Judge cuz it wants to have a separate array, which is done in Solution 2.0

function nomb(arrInp1, arrInp2) {
    let arrPositions = arrInp1;
    let nombPosition = arrInp2.shift();
    let nombPower = arrInp2.pop();
    let sumAllElements = 0;
    let indexesToExclude = [];

    for (let index=0; index<arrPositions.length; index++) {
        let currentPosition = arrPositions[index];
        if (currentPosition == nombPosition && (!indexesToExclude.includes(index))) {
            let start = index - nombPower;
            if (index - nombPower < 0) {
                start = 0;
            } 
            let end = index + nombPower;
            if (index + nombPower >= arrPositions.length) {
                end = arrPositions.length;
            }
            for (i=start; i<=end; i++) {
                if (i < arrPositions.length) {
                indexesToExclude.push(i)
                }
            }
        }
    }

    for (i=0; i<arrPositions.length; i++) {
        if (!indexesToExclude.includes(i)) {
            sumAllElements+=arrPositions[i];
        }
    }
    
    console.log(sumAllElements);
}

nomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
nomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);
nomb([1, 7, 7, 1, 2, 3], [7, 1]);
nomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

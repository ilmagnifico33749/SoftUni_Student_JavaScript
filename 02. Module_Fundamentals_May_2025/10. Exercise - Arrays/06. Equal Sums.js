function solve(arr) {
    let indexesElements = [];
    let statusEquality; 

    for (i=0; i<arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        if (i === 0) {
            sumLeft = 0;
        }

        else {
            for (let j = 0; j<i; j++) {
                sumLeft += Number(arr[j]);
            }
        }
            
        if (i !== (arr.length - 1)) {
            for (let k=i+1; k<arr.length; k++) {
                sumRight += Number(arr[k]);
            }
        }
            else {
                sumRight = 0;
            }
        

        if (sumLeft === sumRight) {
            statusEquality = true;
            indexesElements.push(i);
        }
    }

    if (!statusEquality) {
        console.log(`no`);
    }
    else {
        console.log(indexesElements.join(""));
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

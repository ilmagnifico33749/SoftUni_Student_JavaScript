function lastKnumbersSequence(n, k) {
    let finalArr = [];
    for (let count =0; count<n; count++ ) {
        if (count == 0) {
            finalArr.push(1);
        }
        else {
            let numToAdd = 0;
            for (let times=0; times<k; times++) {
                let startingIndex = count-1;
                let currentIndex = startingIndex - times;
                if (currentIndex >= 0 && currentIndex<finalArr.length) {
                    let currentNum = finalArr[startingIndex-times]
                    numToAdd += currentNum;
                }

            }
            finalArr.push(numToAdd);
        }
    }

    console.log(finalArr);
}

lastKnumbersSequence(6, 3); 
lastKnumbersSequence(8, 2); 

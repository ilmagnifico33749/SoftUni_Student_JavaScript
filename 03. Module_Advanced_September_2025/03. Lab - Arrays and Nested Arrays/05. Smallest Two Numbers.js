function smallestTwoNumbers(arrInp) {
    let numSmallest;
    let numSecondSmallest;

    for (let num of arrInp) {

        console.log(num);
        console.log(numSmallest);
        console.log(numSecondSmallest);
        console.log(!numSmallest);
        console.log("-".repeat(30))
        if (!numSmallest || !numSmallest === 0 && num < numSmallest) {
            console.log(`!numSmallest ${!numSmallest}`)
            console.log(`num < numSmallest: ${num < numSmallest} | ${num} < ${numSmallest}`)
            console.log("-".repeat(50));
            numSecondSmallest = numSmallest;
            numSmallest = num;
        }

        else if (!numSecondSmallest || num < numSecondSmallest) {
        numSecondSmallest = num;
        }

        console.log("-".repeat(50));
        console.log(`Current:\n- Smallest Num: ${numSmallest}\n- Second Smallest Num: ${numSecondSmallest}`)
        console.log("-".repeat(50));
        console.log("=".repeat(50));

    }

    console.log(`${numSmallest}, ${numSecondSmallest}`)
}

// smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

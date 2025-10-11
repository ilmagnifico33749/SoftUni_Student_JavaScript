function lastKnumbersSequence(n, k) {
    const firstNum = 1;
    const numElementsToSum = k;
    let sequenceLength = n;
    let currentSequence = [1]; 

    for (let i=1; i<sequenceLength; i++) {
        let sum = 0;
        let indexToStartFrom = (i-numElementsToSum) >= 0 ? i-numElementsToSum : 0;
        for (let j = indexToStartFrom; j<i; j++) {
            sum += currentSequence[j]
        }
        currentSequence.push(sum);
    }

    console.log(currentSequence)
}

lastKnumbersSequence(6, 3);
lastKnumbersSequence(8, 2);

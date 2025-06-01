function solve(arr) {
    let sequenceEqualElements = [];
    let currentSequence = [];

    for (i=0; i<arr.length; i++) {
        let currentElement = arr[i];
        let nextElement = arr[i+1];
        let previousElement = arr[i-1];

        if (currentElement === nextElement) {
            currentSequence.push(currentElement);
        }

        else {
            
            if (currentElement === previousElement) {
                currentSequence.push(currentElement);
            }

            if (currentSequence.length > sequenceEqualElements.length) {
            sequenceEqualElements = currentSequence;
            }
            currentSequence = [];
        }
    }

    console.log(sequenceEqualElements.join(" "))
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);

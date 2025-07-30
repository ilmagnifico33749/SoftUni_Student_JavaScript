function piccoloFunction(arrInp) {
    let parkingMap = new Map;

    for (let instructions of arrInp) {
        let [direction, plateNumber] = instructions.split(", ");
            if (direction === "IN") {
                if (!parkingMap.has(plateNumber)) {
                    parkingMap.set(plateNumber, undefined)
                }
            }
            else if (direction === "OUT") {
                if (parkingMap.has(plateNumber)) {
                    parkingMap.delete(plateNumber);
                }
            }
    }

    let parkingArraySorted = Array.from(parkingMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    if (parkingArraySorted.length > 0) {
        for (let key of parkingArraySorted) {
            console.log(key[0]);
        }
    }
    else {
        console.log(`Parking Lot is Empty`)
    }
}


piccoloFunction(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
);

piccoloFunction(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA'
    ]
);

function minerTaskFunction(arrInp) {
    let mineralsMap = new Map;

    for (let index=0; index<arrInp.length-1; index+=2) {
        let [mineral, quantity] = [arrInp[index], arrInp[index+1]]
        if (!mineralsMap.has(mineral)) {
            mineralsMap.set(mineral, Number(quantity));
        }

        else if (mineralsMap.has(mineral)) {
            let mineralQuantity = mineralsMap.get(mineral) + Number(quantity);
            mineralsMap.set(mineral, mineralQuantity);
        }
    }

    for (let [mineral, quantity] of mineralsMap) {
        console.log(`${mineral} -> ${quantity}`)
    }
}


minerTaskFunction(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
);

minerTaskFunction(
    [
        'gold', 
        '155', 
        'silver', 
        '10', 
        'copper', 
        '17', 
        'gold', 
        '15'
    ]
);

function storageFunction(arrInp) {
    let storageMap = new Map;

    for (let info of arrInp) {
        let [itemName, itemQuantity] = info.split(" ");
        if (storageMap.has(itemName)) {
            let valueOld = storageMap.get(itemName);
            let valueNew = Number(valueOld) + Number(itemQuantity);
            storageMap.set(itemName, valueNew);
        }

        else {
            storageMap.set(itemName, itemQuantity);
        }
    }

    for (let [key, value] of storageMap) {
        console.log(`${key} -> ${value}`)
    }
}


storageFunction(
    [
        'tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40'
    ]
);

storageFunction(
    [
        'apple 50',
        'apple 61',
        'coffee 115',
        'coffee 40'
    ]
);

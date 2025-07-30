function partyTimeFunction(arrInp) {
    let reservationsListRegular = new Map;
    let reservationsListVIP = new Map;
    let partyStarted = false;

    for (let guestNumber of arrInp) {
        let statusVIP = false;

        if (guestNumber === "PARTY") {
            partyStarted = true;
        }

        else { 
            if (!isNaN(guestNumber[0])) {
                statusVIP = true;
            }

            if (partyStarted === false) {
                if (statusVIP === false) {
                    reservationsListRegular.set(guestNumber, undefined);
                }
                else {
                    reservationsListVIP.set(guestNumber, undefined);
                }
            }

            else if (partyStarted === true) {
               if (statusVIP === false) {
                    reservationsListRegular.delete(guestNumber);
                }
                else {
                    reservationsListVIP.delete(guestNumber);
                }
            }
        }
    }
    
    console.log(reservationsListVIP.size + reservationsListRegular.size);

    for (let key of reservationsListVIP.keys()) {
        console.log(key);
    }
    for (let key of reservationsListRegular.keys()) {
        console.log(key);
    }
}


partyTimeFunction(
    [
        '7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 
        'SVQXQCbc', 'tSzE5t0p', 'PARTY', 
        '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'
    ]
);

partyTimeFunction(
    [
        'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', 
        '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 
        'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', 
        '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', 
        '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 
        'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 
        'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', 
        '9CQBGUeJ' 
    ]
);

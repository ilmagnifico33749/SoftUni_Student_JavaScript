function partyTimeFunction(arrInp) {
    let reservationsList = new Map;
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
                    reservationsList.set(guestNumber, "Regular");
                }
                else {
                    reservationsList.set(guestNumber, "VIP");
                }
            }

            else if (partyStarted === true) {
                reservationsList.delete(guestNumber);
            }
        }
    }
    
    console.log(reservationsList.size);

    let reservationsListArraySorted = Array.from(reservationsList.entries())
                                            .sort((a, b) => b[1].localeCompare(a[1]));
    
    for (let [guestNumber, guestStatus] of reservationsListArraySorted) {
        console.log(guestNumber);
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

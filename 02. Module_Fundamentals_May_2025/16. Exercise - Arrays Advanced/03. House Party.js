function houseParty(arrInp) {
    let listGuests = [];

    function presentInTheList(guestName, listGuestsName) {
        return listGuestsName.includes(guestName);
    }

    for (let element of arrInp) {
        let currentCommand = element.split(" is ")
        let currentGuestName = currentCommand.shift();
        let newGuestStatus = currentCommand.pop();

        if (newGuestStatus == "going!") {
            if (!presentInTheList(currentGuestName, listGuests)) {
                listGuests.push(currentGuestName);
            }
            else {
                console.log(`${currentGuestName} is already in the list!`);
            }
        }

        else if (newGuestStatus == "not going!") {
            if (!presentInTheList(currentGuestName, listGuests)) {
                console.log(`${currentGuestName} is not in the list!`)
            }
            else{
                let indexCurrentGuest = listGuests.indexOf(currentGuestName);
                listGuests.splice(indexCurrentGuest, 1);
            }
        }
    }

    console.log(listGuests.join("\n"));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);

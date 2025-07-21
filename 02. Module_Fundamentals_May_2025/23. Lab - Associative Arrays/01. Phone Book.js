function phoneBookFunction(arrInp) {
    let phoneBook = {};
    for (let contactDetails of arrInp) {
        let [personName, phoneNumber] = contactDetails.split(" ");
            phoneBook[personName] = phoneNumber;
    }

    for (let person in phoneBook) {
        console.log(`${person} -> ${phoneBook[person]}`);
    }
}

phoneBookFunction(
    [
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
    ]
);

phoneBookFunction(
    [
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
    ]
);

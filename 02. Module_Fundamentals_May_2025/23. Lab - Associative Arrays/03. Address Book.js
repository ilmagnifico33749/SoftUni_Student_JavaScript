function addressBookfunction(arrInp) {
    let addressBookMap = new Map();

    for (let info of arrInp) {
        let [name, address] = info.split(":");
        addressBookMap.set(name, address);
    }

    let addressBookArray = Array
        .from(addressBookMap.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of addressBookArray) {
        console.log(`${name} -> ${address}`);
    }
}


addressBookfunction(
    [
        'Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd'
    ]
);

addressBookfunction(
    [
        'Bob:Huxley Rd',
        'John:Milwaukee Crossing',
        'Peter:Fordem Ave',
        'Bob:Redwing Ave',
        'George:Mesta Crossing',
        'Ted:Gateway Way',
        'Bill:Gateway Way',
        'John:Grover Rd',
        'Peter:Huxley Rd',
        'Jeff:Gateway Way',
        'Jeff:Huxley Rd'
    ]
);

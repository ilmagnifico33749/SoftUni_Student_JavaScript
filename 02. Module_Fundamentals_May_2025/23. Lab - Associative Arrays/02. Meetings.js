function meetingsFunction(arrInp) {
    let meetings = new Map();

    for (let info of arrInp) {
        let [day, person] = info.split(" ");
        if (meetings.has(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            meetings.set(day, person);
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [day, person] of meetings) {
        console.log(`${day} -> ${person}`);
    }
}


meetingsFunction(
    [
        'Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'
    ]
);

meetingsFunction(
    [
        'Friday Bob',
        'Saturday Ted',
        'Monday Bill',
        'Monday John',
        'Wednesday George'
    ]
);

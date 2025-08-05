function bossRushFunction(inputArr) {
    let numberOfInputs = inputArr.shift();
    let arrLinesToCheck = inputArr;
    let validity = false;
    let pattern = /^\|[A-Z]{4,}\|\:#([A-Za-z]+ [A-Za-z]+)#$/;

    for (let line of arrLinesToCheck) {
        if (pattern.test(line)) {
            let bossName = line.match(/^\|([A-Z]{4,})\|/)[1];
            let title = line.match(/\:#([A-Za-z]+ [A-Za-z]+)#$/)[1];
            console.log(`${bossName}, The ${title}\n>> Strength: ${bossName.length}\n>> Armor: ${title.length}`)
        }
        else {
            console.log("Access denied!")
        }
    }
};

bossRushFunction(
    [
        '3',
        '|PETER|:#Lead architect#',
        '|GEORGE|:#High Overseer#',
        '|ALEX|:#Assistant Game Developer#'
    ]
);

bossRushFunction(
    [
        '3',
        '|STEFAN|:#H1gh Overseer#',
        '|IVAN|:#Master detective#',
        '|KARL|: #Marketing lead#'
    ]
);

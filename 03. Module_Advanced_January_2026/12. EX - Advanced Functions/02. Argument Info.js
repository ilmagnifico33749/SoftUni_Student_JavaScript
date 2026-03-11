function argumentsInfo(...usrInput) {
    let tally = {};

    function typeOfInputandValue(inpCurr) {
        const type = typeof inpCurr;
        const value = inpCurr;
        console.log(`${type}: ${value}`);

        if (Object.hasOwn(tally, type)) {
            tally[type] += 1;
        }

        else {
            tally[type] = 1;
        }
    }

    function tallyPrint() {
        Object.entries(tally)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => {
            console.log(`${type} = ${count}`)
        })
    }

    for (let usrInpCurr of usrInput) {
        typeOfInputandValue(usrInpCurr)
    }

    return tallyPrint();
}


// Sample Input 1:

argumentsInfo(
    'cat', 42, function () { console.log('Hello world!'); }
)
function solve(commandsArr) {
    let currentNum = 1;
    let increment = 1;
    let currentArr = [];
    let finalArr = [];
    for (let command of commandsArr) {
        if (command ==="add") {
            finalArr.push(currentNum);
        }
        else if (command === "remove") {
            finalArr.pop([finalArr.length - 1]);
        }
        currentNum += increment;
    }

    if (finalArr.length > 0) {
        console.log(finalArr.join(" "));
    }
    else {
        console.log(`Empty`);
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);

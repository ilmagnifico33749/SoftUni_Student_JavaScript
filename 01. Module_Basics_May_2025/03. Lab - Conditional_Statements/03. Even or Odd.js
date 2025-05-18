function solve(number) {
    if (number % 2 === 0) {
        if (number !== 0) {
            console.log(`even`);
        }
        else {
            console.log(`cannot divide 0`);
        }
    }
    else if (number % 2 === 1) {
        console.log(`odd`);
    }
}

solve(2);
solve(3);
solve(0);
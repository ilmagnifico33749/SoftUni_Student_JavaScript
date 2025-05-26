function solve(number) {
    let highestDivider;

    if (number % 2 === 0) {
        highestDivider = 2;
    }
    if (number % 3 === 0) {
        highestDivider = 3;
    }
    if (number % 6 === 0) {
        highestDivider = 6;
    }
    if (number % 7 === 0) {
        highestDivider = 7;
    }
    if (number % 10 === 0) {
        highestDivider = 10;
    }

    if (highestDivider) {
        console.log(`The number is divisible by ${highestDivider}`);
    }
    else {
        console.log(`Not divisible`);
    }
}

solve(30);
solve(15);
solve(12);
solve(1643);

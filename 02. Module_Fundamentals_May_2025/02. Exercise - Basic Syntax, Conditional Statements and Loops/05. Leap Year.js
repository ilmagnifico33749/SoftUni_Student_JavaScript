function solve(year) {
    let statusLeapYear;

    if ((year % 4 === 0 & year % 100 !== 0) || (year % 400 === 0)) {
        statusLeapYear = true;
    }
    else {
        statusLeapYear = false;
    }

    if (!statusLeapYear) {
        console.log("no");
    }
    else {
        console.log("yes");
    }
}

solve(1984);
solve(2003);
solve(4);

function solve(timeAthlete1, timeAthlete2, timeAthlete3) {
    let minutesRepr;
    let secondsRepr;
    let finalRepr;
    let sumAllSeconds = timeAthlete1 + timeAthlete2 + timeAthlete3
    let sumAllMinutesOnly = parseInt(sumAllSeconds/60);
    let sumAllSecondsWithoutMinutes = sumAllSeconds - (sumAllMinutesOnly * 60);
    if (sumAllMinutesOnly < 10) {
        minutesRepr = `0${sumAllMinutesOnly}`;
    }
    else {
        minutesRepr = `${sumAllMinutesOnly}`;
    }

    if (sumAllSecondsWithoutMinutes < 10) {
        secondsRepr = `0${sumAllSecondsWithoutMinutes}`;
    }
    else {
        secondsRepr = `${sumAllSecondsWithoutMinutes}`;
    }
    
    finalRepr = minutesRepr + `:` + secondsRepr;
    console.log(finalRepr);
}

solve(35, 45, 44);
solve(22, 7, 34);
solve(50, 50, 49);
solve(14, 12, 10);

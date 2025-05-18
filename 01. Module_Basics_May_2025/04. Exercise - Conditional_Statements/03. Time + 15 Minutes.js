function solve(hoursCurrent, minutesCurrent) {
    let hoursLimit = 24;
    let minutesLimit = 60;
    let incrementMinutes = 15;
    let futureMinutes = minutesCurrent + incrementMinutes;
    let futureHours;
    let hoursToDisplay;
    let minutesToDisplay; 
    let finalResultToDisplay;

    if (futureMinutes >= minutesLimit) {
        minutesToDisplay = futureMinutes - minutesLimit;
        futureHours = hoursCurrent + 1;
    } 
    else {
        minutesToDisplay = futureMinutes;
        futureHours = hoursCurrent;
    }

    if (minutesToDisplay < 10) {
        minutesToDisplay = `0${minutesToDisplay}`;
    } 
    else {
        minutesToDisplay = minutesToDisplay;
    }

    if (futureHours >= hoursLimit) {
            hoursToDisplay = futureHours - hoursLimit;
        }
    else {
        hoursToDisplay = futureHours;
    }

    finalResultToDisplay = `${hoursToDisplay}:${minutesToDisplay}`;

    console.log(finalResultToDisplay);
}

solve(1, 46);
solve(0, 01);
solve(23, 59);
solve(11, 08);
solve(12, 49);

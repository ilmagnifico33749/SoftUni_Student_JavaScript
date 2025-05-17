function solve(bookPages, pagesPerHour, daysLimit) {
    let totalHoursNeeded = bookPages / pagesPerHour;
    let totalDaysNeeded = totalHoursNeeded / daysLimit
    console.log(totalDaysNeeded)
}

solve(212, 20, 2)
solve(432, 15, 4)
function solve(currentYear, currentMonth, currentDay) {
  let nextDay;
  let nextMonth;
  let nextYear;
  
  if (currentDay < 30) {
    nextDay = currentDay + 1;
    nextMonth = currentMonth;
    nextYear = currentYear;
  }
  else {
    nextDay = 1;
    nextMonth = currentMonth + 1;
    
    if (nextMonth < 12) {
      nextYear = currentYear;
    }
      else {
        nextMonth = 1;
        nextYear = currentYear + 1;
      }
  }
  console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

solve(2016, 9, 30);
solve(2020, 3, 24);

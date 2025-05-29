function requiredReading(numPagesCurrBook, pagesReadForAnHour, daysToReadTheBook) {
    let hoursNeededForTheBook = numPagesCurrBook / pagesReadForAnHour;
    let daysNeededForTheBook = hoursNeededForTheBook / daysToReadTheBook;
    
    console.log(daysNeededForTheBook);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);

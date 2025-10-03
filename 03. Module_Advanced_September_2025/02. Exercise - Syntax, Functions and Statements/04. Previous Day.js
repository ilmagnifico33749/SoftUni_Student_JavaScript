function previousDay(year, month, day) {
    const date = new Date(year, month - 1, day);

    date.setDate(date.getDate() - 1);

    const prevYear = date.getFullYear();
    const prevMonth = date.getMonth() + 1;
    const prevDay = date.getDate();

    console.log(`${prevYear}-${prevMonth}-${prevDay}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);

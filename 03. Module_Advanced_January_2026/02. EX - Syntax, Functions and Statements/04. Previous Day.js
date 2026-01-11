function previousDay(year, month, day) {
    let date = new Date(year, month-1, day);
    date.setDate(date.getDate() - 1);

    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    console.log(`${y}-${m}-${d}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);

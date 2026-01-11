function daysInaMonth(month, year) {
    let output = new Date(year, month, 0).getDate();
    console.log(output)
};

daysInaMonth(1, 2012);
daysInaMonth(2, 2021);

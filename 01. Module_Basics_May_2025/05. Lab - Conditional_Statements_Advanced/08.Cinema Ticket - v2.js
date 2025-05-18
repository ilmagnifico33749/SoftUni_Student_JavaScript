function solve(day) {
    let ticketPrice;
    if (day === 'Monday' || day === 'Tuesday' || day === 'Friday') {
        ticketPrice = 12;
    }
    else if (day === 'Wednesday' || day === "Thursday") {
        ticketPrice = 14;
    }
    else if (day === 'Saturday' || day === 'Sunday') {
        ticketPrice = 16;
    }
    console.log(ticketPrice);
}

solve('Monday');
solve('Friday');
solve('Sunday');

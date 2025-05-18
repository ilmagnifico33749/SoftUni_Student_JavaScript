function solve(weekDay) {
    let ticketPrice;
    switch (weekDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Friday':
            ticketPrice = 12; break;
        case 'Wednesday':
        case 'Thursday':
            ticketPrice = 14; break;
        case 'Saturday':
        case 'Sunday':
            ticketPrice = 16; break;
    }
    console.log(ticketPrice)
}

solve('Monday');
solve('Friday');
solve('Sunday');

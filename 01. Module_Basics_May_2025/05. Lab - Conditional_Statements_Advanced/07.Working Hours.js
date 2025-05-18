function solve(hour, day) {
    if (hour >= 10 && hour <= 18 && day != 'Sunday') {
        console.log('open');
    }
    else {
        console.log('closed');
    }
}

solve(11, 'Monday');
solve(19, 'Friday');
solve(11, 'Sunday');

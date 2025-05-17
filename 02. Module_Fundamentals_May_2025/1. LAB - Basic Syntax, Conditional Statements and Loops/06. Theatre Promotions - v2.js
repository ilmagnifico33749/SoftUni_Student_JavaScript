function theatProm(dayType, age) {
    let ticket_price = 0

    if (dayType === 'Weekday') {
        if ((age>=0 && age<=18) || (age>64 && age<=122))
            ticket_price = 12;
        else if (age>18 && age<=64) {
            ticket_price = 18;
        }
    }

    else if (dayType == 'Weekend') {
        if ((age>=0 && age<=18) || (age>64 && age<=122))
            ticket_price = 15;
        else if (age> 18 && age<=64) {
            ticket_price = 20;
        }
    }

    else if (dayType == 'Holiday') {
        if (age>=0 && age<=18) {
            ticket_price = 5;
        }
        else if (age>18 && age<=64) {
            ticket_price = 12;
        }
        else if (age>64 && age<=122) {
            ticket_price = 10;
        }
        
    }

    if (ticket_price != 0) {
        console.log(`${ticket_price}$`);
    }
    else {
        console.log('Error!')
    }
}

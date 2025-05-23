function fruitShop(fruit, day, fruitQuantity) {
    let fruitPrice;
    let costTotal;
    let invalidInput = false;

    if (fruit === "banana") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            fruitPrice = 2.50;
        }
        else if (day === "Saturday" || day === "Sunday") { 
            fruitPrice = 2.70;
        }
        else {
            invalidInput = true;
        }
    }
    else if (fruit === "apple") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            fruitPrice = 1.20;
        }
        else if (day === "Saturday" || day === "Sunday") { 
            fruitPrice = 1.25;
        }
        else {
            invalidInput = true;
        }
    }
    else if (fruit === "orange") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            fruitPrice = 0.85;
        }
        else if (day === "Saturday" || day === "Sunday") { 
            fruitPrice = 0.90;
        }
        else {
            invalidInput = true;
        }
    }
    else if (fruit === "grapefruit") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            fruitPrice = 1.45;
        }
        else if (day === "Saturday" || day === "Sunday") { 
            fruitPrice = 1.60;
        }
        else {
            invalidInput = true;
        }
    }
        else if (fruit === "kiwi") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            fruitPrice = 2.70;
        }
        else if (day === "Saturday" || day === "Sunday") { 
            fruitPrice = 3.00;
        }
        else {
            invalidInput = true;
        }
    }
        else if (fruit === "pineapple") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            fruitPrice = 5.50;
        }
        else if (day === "Saturday" || day === "Sunday") { 
            fruitPrice = 5.60;
        }
        else {
            invalidInput = true;
        }
    }
        else if (fruit === "grapes") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            fruitPrice = 3.85;
        }
        else if (day === "Saturday" || day === "Sunday") { 
            fruitPrice = 4.20;
        }
        else {
            invalidInput = true;
        }
    }
    else {
        invalidInput = true;
    }

    if (!invalidInput) {
    costTotal = fruitPrice * fruitQuantity;
    console.log(costTotal.toFixed(2));
    }

    else {
        console.log("error");
    }
}

fruitShop("apple", "Tuesday", 2);
fruitShop("orange", "Sunday", 3);
fruitShop("kiwi", "Monday", 2.5);
fruitShop("grapes", "Saturday", 0.5);
fruitShop("tomato", "Monday", 0.5);

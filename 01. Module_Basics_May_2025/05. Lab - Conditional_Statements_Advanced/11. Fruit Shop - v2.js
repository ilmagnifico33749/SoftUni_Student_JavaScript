function fruitShop(fruit, day, fruitQuantity) {
    let fruitPrice;
    let costTotal;
    let invalidInput = false;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": fruitPrice = 2.50; break;
            case "apple": fruitPrice = 1.20; break;
            case "orange": fruitPrice = 0.85; break;
            case "grapefruit": fruitPrice = 1.45; break;
            case "kiwi": fruitPrice = 2.70; break;
            case "pineapple": fruitPrice = 5.50; break;
            case "grapes": fruitPrice = 3.85; break;
            default: invalidInput = true;
        }
    } 
    else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": fruitPrice = 2.70; break;
            case "apple": fruitPrice = 1.25; break;
            case "orange": fruitPrice = 0.90; break;
            case "grapefruit": fruitPrice = 1.60; break;
            case "kiwi": fruitPrice = 3.00; break;
            case "pineapple": fruitPrice = 5.60; break;
            case "grapes": fruitPrice = 4.20; break;
            default: invalidInput = true;
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

function solve(periodOfStay, roomType, review) {
    let roomPrice;
    let discountMain;
    let discountAdditional;

    switch (roomType) {
        case "room for one person":
            roomPrice = 18.00;
            discountMain = 0.00;
            break;

        case "apartment":
            roomPrice = 25.00; 
            if (periodOfStay < 10) {
                discountMain = 0.30;
            }
            else if (periodOfStay >= 10 && periodOfStay <= 15) {
                discountMain = 0.35;
            }
            else if (periodOfStay > 15) {
                discountMain = 0.50;
            }
            break;

        case "president apartment":
            roomPrice = 35.00; 
            if (periodOfStay < 10) {
                discountMain = 0.10;
            }
            else if (periodOfStay >= 10 && periodOfStay <= 15) {
                discountMain = 0.15;
            }
            else if (periodOfStay > 15) {
                discountMain = 0.20;
            }
            break;
    }

    let totalCostRoom = (periodOfStay * roomPrice) * (1 - discountMain);

    switch (review) {
        case "positive":
            discountAdditional = -0.25;
            break;
        case "negative":
            discountAdditional = 0.10
    }

    let finalCostRoom = totalCostRoom * (1-discountAdditional);
    
    console.log(finalCostRoom.toFixed(2));
}

solve(14, "apartment", "positive");
solve(30, "president apartment", "negative");
solve(12, "room for one person", "positive");
solve(2, "apartment", "positive");
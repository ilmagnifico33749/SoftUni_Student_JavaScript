function calculator(pensNum, markersNum, chemsNum, discountPerc) {
    let pricePens = 5.80;
    let priceMarkers = 7.20;
    let priceChems = 1.20;
    let discountAbs = discountPerc / 100;
    let finalExpensesBeforeDiscount = (pensNum * pricePens) + (markersNum * priceMarkers) + (chemsNum * priceChems);
    let finalExpensesAfterDiscount = finalExpensesBeforeDiscount * (1 - discountAbs);
    let discountNet = finalExpensesBeforeDiscount * discountAbs;
    
    console.log(finalExpensesAfterDiscount);
}

calculator(2, 3, 4, 25);
calculator(4, 2, 5, 13);

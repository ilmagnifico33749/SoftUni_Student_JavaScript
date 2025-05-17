function calculatorExpenses(area){
    let priceSqM = 7.61;
    let discountPercentage = 0.18;
    let finalPriceBeforeDiscount = (area * priceSqM).toFixed(2);
    let discountAmount = (finalPriceBeforeDiscount * discountPercentage).toFixed(2);
    let finalPriceAfterDiscount = (finalPriceBeforeDiscount - discountAmount).toFixed(2);
    let output = `The final price is: ${finalPriceAfterDiscount} lv.\nThe discount is: ${discountAmount} lv.`;
    console.log(output);
}

calculatorExpenses(550);
calculatorExpenses(150);

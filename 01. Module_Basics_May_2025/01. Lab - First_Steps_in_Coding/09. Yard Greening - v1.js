function calculatorExpenses(area){
    let priceSqM = 7.61;
    let discountPercentage = 0.18;
    let finalPriceBeforeDiscount = area * priceSqM;
    let finalPriceAfterDiscount = finalPriceBeforeDiscount * (1 - discountPercentage);
    let discountAmount = finalPriceBeforeDiscount * discountPercentage;
    let output = `The final price is: ${finalPriceAfterDiscount.toFixed(2)} lv.\nThe discount is: ${discountAmount.toFixed(2)} lv.`;
    console.log(output);
}

calculatorExpenses(550);
calculatorExpenses(150);

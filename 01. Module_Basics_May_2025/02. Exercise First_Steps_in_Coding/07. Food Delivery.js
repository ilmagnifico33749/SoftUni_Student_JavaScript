function calculator(chickenMenuNum, fishMenuNum, veggieMenuNum) {
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let veggieMenuPrice = 8.15;
    let deliveryPrice = 2.50;
    let finalCostMainMeal = (chickenMenuNum * chickenMenuPrice) + (fishMenuNum * fishMenuPrice) + (veggieMenuNum * veggieMenuPrice);
    let desertPrice = finalCostMainMeal * 0.20;
    let finalCostTotal = finalCostMainMeal + desertPrice + deliveryPrice;
    
    console.log(finalCostTotal);
}

calculator(2, 4, 3);
calculator(9, 2, 6);

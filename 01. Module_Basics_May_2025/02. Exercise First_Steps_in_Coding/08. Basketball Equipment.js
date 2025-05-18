function calculator(taxYear) {
    let shoesPrice = taxYear * 0.6;
    let clothesPrice = shoesPrice * 0.8;
    let ballPrice = clothesPrice  * 0.25;
    let accessoirsPrice = ballPrice * 0.2;
    let expensesTotal= taxYear + shoesPrice + clothesPrice + ballPrice + accessoirsPrice;

    console.log(expensesTotal);
}

calculator(365);
calculator(550);

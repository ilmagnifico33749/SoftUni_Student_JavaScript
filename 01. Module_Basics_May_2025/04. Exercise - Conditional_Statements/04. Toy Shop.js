function solve(excursionPrice, puzzlesNum, dollNum, teddyBearNum, minionNum, truckNum) {
    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;
    let totalNumAllToys = puzzlesNum + dollNum + teddyBearNum + minionNum + truckNum;
    let orderBarRate = (puzzlesNum * puzzlePrice) + (dollNum * dollPrice) + (teddyBearNum * teddyBearPrice) + (minionNum * minionPrice) + (truckNum * truckPrice);
    let requirementDiscountNum = 50;
    let discoutForNum = 0.25;
    let storeRent = 0.10;
    let orderFinalPrice;
    let finalIncome;

    if (totalNumAllToys < requirementDiscountNum) {
        orderFinalPrice = orderBarRate;
    }
    else {
        orderFinalPrice = orderBarRate * (1 - discoutForNum);
    }

    finalIncome = orderFinalPrice * (1 - storeRent);

    if (finalIncome >= excursionPrice) {
        console.log(`Yes! ${(finalIncome - excursionPrice).toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${(excursionPrice - finalIncome).toFixed(2)} lv needed.`)
    }
}

solve(40.8, 20, 25, 30, 50, 10);
solve(320, 8, 2, 5, 5, 1);

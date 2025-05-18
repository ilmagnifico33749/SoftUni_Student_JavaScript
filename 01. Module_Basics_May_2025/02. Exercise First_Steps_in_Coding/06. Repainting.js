function calculator(nylonAmountInit, paintAmountInit, diluentAmountInit, hoursWorkers) {
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let diluentPrice = 5.00;
    let nylonAmountFinal = nylonAmountInit + 2;
    let paintAmountFinal = paintAmountInit * 1.10;
    let additionalExpenses = 0.40;
    let materialsExpensesFinal = (nylonAmountFinal * nylonPrice) + (paintAmountFinal * paintPrice) + (diluentAmountInit * diluentPrice) + additionalExpenses; 
    let workersPriceHour = materialsExpensesFinal * 0.3;
    let workersPriceFinal = workersPriceHour * hoursWorkers;
    let expencesTotalFinal = materialsExpensesFinal + workersPriceFinal;

    console.log(expencesTotalFinal);
}

calculator(10, 11, 4 , 8);
calculator(5, 10, 10, 1);

function calculator(depositAmount, period, interestRatepercentage) {
    let interestRateNet = interestRatepercentage / 100
    let gainedAmountPerYear = depositAmount * interestRateNet
    let amountPerMonth = gainedAmountPerYear / 12
    let gainedAmount = amountPerMonth * period
    let finalAmount = depositAmount + gainedAmount
    console.log(finalAmount)
}

calculator(200, 3, 5.7)
calculator(2350,6,7)

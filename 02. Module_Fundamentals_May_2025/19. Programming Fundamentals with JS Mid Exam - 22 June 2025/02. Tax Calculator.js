function taxCalculator(arrInput) {
    let arrVehicles = arrInput.toString().split(">>")
    let taxesTotalCollected = 0;

    for (let vehicle of arrVehicles) {
        let arrElements = vehicle.toString().split(" ")
        let carType = arrElements[0];
        let yearToPayTax = arrElements[1];
        let kmTravelled = arrElements[2];
        let baseTaxToPay = 0;
        let taxDiscountYearsUsed = 0;
        let taxIncreaseKmTravelled = 0;
        let finalTaxToPay = 0;
        let carTypeValidity = true;

        if (carType == "family") {
            baseTaxToPay = 50;
            taxDiscountYearsUsed = yearToPayTax * 5;
            taxIncreaseKmTravelled = 12 * Math.floor(kmTravelled / 3000)

        }
        else if (carType == "heavyDuty") {
            baseTaxToPay = 80;
            taxDiscountYearsUsed = yearToPayTax * 8;
            taxIncreaseKmTravelled = 14 * Math.floor(kmTravelled / 9000);


        }
        else if (carType === "sports") {
            baseTaxToPay = 100;
            taxDiscountYearsUsed = yearToPayTax * 9;
            taxIncreaseKmTravelled = 18 * Math.floor(kmTravelled / 2000);
        }

        else {
            carTypeValidity = false;
            console.log(`Invalid car type.`);
        }

        finalTaxToPay = baseTaxToPay - taxDiscountYearsUsed + taxIncreaseKmTravelled;
        taxesTotalCollected += finalTaxToPay;
        
        let messageIndividual = `A ${carType} car will pay ${finalTaxToPay.toFixed(2)} euros in taxes.`
        
        if (carTypeValidity) {
            console.log(messageIndividual);
        }
    }

    let messageFinal = `The National Revenue Agency will collect ${taxesTotalCollected.toFixed(2)} euros in taxes.`
    return console.log(messageFinal);
}

taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);

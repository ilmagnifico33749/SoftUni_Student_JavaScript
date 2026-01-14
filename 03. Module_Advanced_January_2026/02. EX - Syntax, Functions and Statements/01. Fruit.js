function fruitCostCalc(fruitName, weightGrams, priceKilogram) {
    let weightKilograms = Number(weightGrams)/1000;
    let cost = Number(weightKilograms) * Number(priceKilogram);
    let output = `I need $${cost.toFixed(2)} to buy ${weightKilograms.toFixed(2)} kilograms ${fruitName}.`;

    console.log(output);
}

fruitCostCalc('orange', 2500, 1.80);
fruitCostCalc('apple', 1563, 2.35);

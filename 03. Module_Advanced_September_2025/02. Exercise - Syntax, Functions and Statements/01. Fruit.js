function fruit(name, weight, price) {
    const fruitName = name;
    const fruitWeightGr = weight;
    const fruitPricePerKg = price;

    const fruitWeightKg = fruitWeightGr / 1000 

    const fruitFinalPrice = fruitWeightKg * fruitPricePerKg;

    const result = `I need $${fruitFinalPrice.toFixed(2)} to buy ${fruitWeightKg.toFixed(2)} kilograms ${fruitName}.`
    console.log(result);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);


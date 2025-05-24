function flowersCalculator(flowersType, flowersNum, budget) {
  let flowerPrice;
  let discount = 0.00;
  let calculationFormula;
  let resolution;

  switch (flowersType) {
    case "Roses":
      flowerPrice = 5;
      if (flowersNum > 80) {
        discount = 0.10;
      };
      break;
    
    case "Dahlias":
      flowerPrice = 3.80;
      if (flowersNum > 90) {
        discount = 0.15;
      };
      break;
      
    case "Tulips":
      flowerPrice = 2.80;
      if (flowersNum > 80) {
        discount = 0.15;
      };
      break;
      
    case "Narcissus":
      flowerPrice = 3;
      if (flowersNum < 120) {
        discount = -0.15;
      };
      break;
      
    case "Gladiolus":
    flowerPrice = 2.50;
      if (flowersNum < 80) {
        discount = -0.20;
      };
      break;
  }
  
  calculationFormula = (flowersNum * flowerPrice) * (1 - discount);
  balance = Math.abs(budget - calculationFormula)
  if (calculationFormula > budget) {
    resolution = `Not enough money, you need ${balance.toFixed(2)} leva more.`;
  }
  else {
    resolution = `Hey, you have a great garden with ${flowersNum} ${flowersType} and ${balance.toFixed(2)} leva left.`;
  }
  
  console.log(resolution);
}

flowersCalculator("Roses", 55, 250);
flowersCalculator("Tulips", 88, 260);
flowersCalculator("Narcissus", 119, 360);

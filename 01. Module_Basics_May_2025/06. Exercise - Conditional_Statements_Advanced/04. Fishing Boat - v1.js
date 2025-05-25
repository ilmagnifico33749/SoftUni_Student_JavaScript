// Judge being Judge - getting only 60/100  

function fishingBoat(budget, season, fishersNum) {
  let boatPrice;
  let discount = 0.00;
  let calculationFormula;
  let resolution;
  let additionalDiscount = 0.00;
  let balance;
  
  switch (season) {
    case "Spring":
      boatPrice = 3000; break;
    case "Summer":
    case "Autumn":
      boatPrice = 4200; break;
    case "Winter":
      boatPrice = 2600; break;
  }
  
  if (fishersNum <= 6) {
    discount = 0.10;
  }
  else if (fishersNum >= 7 && fishersNum <= 11) {
    discount = 0.15;
  }
  else if (fishersNum >= 12) {
    discount = 0.25;
  }
  
  if (fishersNum % 2 === 0 && season != "Autumn") {
    additionalDiscount += 0.05;
  }
  
  balance = budget - (boatPrice * (1 - discount - additionalDiscount));
  
  if (balance >= 0) {
    resolution = `Yes! You have ${balance.toFixed(2)} leva left.`;
  }
  else {
    resolution = `Not enough money! You need ${(Math.abs(balance)).toFixed(2)} leva.`;
  }
  
  console.log(resolution);
}

fishingBoat(3000, "Summer", 11);
fishingBoat(3600, "Autumn", 6);
fishingBoat(2000, "Winter", 13);

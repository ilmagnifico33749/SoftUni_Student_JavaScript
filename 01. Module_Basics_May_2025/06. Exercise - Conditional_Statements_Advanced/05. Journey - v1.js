function journey(budget, season) {
  let establishmentType;
  let destination;
  let establishmentCost;
//   let resolution;
  
  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      establishmentType = "Camp";
      establishmentCost = budget * 0.30;
    }
    
    else if (season ==="winter") {
      establishmentType = "Hotel";
      establishmentCost = budget * 0.70;
    }
  }
  
  else if (budget> 100 && budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      establishmentType = "Camp";
      establishmentCost = budget * 0.40;
    }
    else if (season === "winter") {
      establishmentType = "Hotel";
      establishmentCost = budget * 0.80;
    }
  }
  
  else if (budget > 1000) {
    destination = "Europe";
    establishmentType = "Hotel";
    establishmentCost = budget * 0.90;
  }
  
  console.log(`Somewhere in ${destination}`);
  console.log(`${establishmentType} - ${establishmentCost.toFixed(2)}`);
}

journey(50, "summer");
journey(75, "winter");
journey(312,"summer");
journey(678.53,"winter");
journey(1500, "summer");

function journey(budget, season) {
  let establishmentType;
  let destination;
  let establishmentCost;
//   let resolution;
  
  switch (season) {
    case "summer": 
      establishmentType = "Camp";
      if (budget > 1000) {
        destination = "Europe";
        establishmentType = "Hotel";
        establishmentCost = budget * 0.90;
      }
      
      else {
        establishmentType = "Camp";
        if (budget <= 1000 && budget > 100) {
          destination = "Balkans";
          establishmentCost = budget * 0.40;
        }
        else if (budget <= 100) {
          destination = "Bulgaria";
          establishmentCost = budget * 0.30;
        }
      };
      break;
    
    case "winter":
      establishmentType = "Hotel";
      if (budget > 1000) {
        destination = "Europe";
        establishmentType = "Hotel";
        establishmentCost = budget * 0.90;
      }
      
      else {
        establishmentType = "Hotel";
        if (budget <= 1000 && budget > 100) {
          destination = "Balkans";
          establishmentCost = budget * 0.80;
        }
        else if (budget <= 100) {
          destination = "Bulgaria";
          establishmentCost = budget * 0.70;
        }
      };
      break;
      
  }
  
  console.log(`Somewhere in ${destination}`);
  console.log(`${establishmentType} - ${establishmentCost.toFixed(2)}`);
}

journey(50, "summer");
journey(75, "winter");
journey(312,"summer");
journey(678.53,"winter");
journey(1500, "summer");

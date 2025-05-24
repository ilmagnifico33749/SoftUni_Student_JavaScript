function outfitRecomm(degrees, dayNigthTime) {
  let outfit;
  let shoes;
  let recommendation;
  
  switch (dayNigthTime) {
    case "Morning":
      if (degrees >=10 && degrees <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      }
      else if (degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      else if (degrees >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      };
      break;
      
      case "Afternoon":
        if (degrees >=10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
        }
        else if (degrees > 18 && degrees <= 24) {
          outfit = "T-Shirt";
          shoes = "Sandals";
        }
        else if (degrees >= 25) {
          outfit = "Swim Suit";
          shoes = "Barefoot";
        };
        break;
        
        case "Evening":
        if ((degrees >=10 && degrees <= 18) || (degrees > 18 && degrees <= 24) || (degrees >= 25)) {
        outfit = "Shirt";
        shoes = "Moccasins";
        }
        break;
  }
  
  recommendation = `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;
  console.log(recommendation);
}


outfitRecomm(16, "Morning");
outfitRecomm(22, "Afternoon");

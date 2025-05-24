function outfRec(degrees, dayNightPart) {
  let outfit;
  let shoes;
  
  if (degrees >= 10 && degrees <= 18) {
    if (dayNightPart === "Morning") {
    outfit = "Sweatshirt";
    shoes = "Sneakers";
    }
    else if (dayNightPart === "Afternoon") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
    else if (dayNightPart === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  
  else if (degrees > 18 && degrees <=24) {
    if (dayNightPart === "Morning") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
    else if (dayNightPart === "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
    else if (dayNightPart === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  
  else if (degrees >= 25) {
    if (dayNightPart === "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
    else if (dayNightPart === "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    }
    else if (dayNightPart === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  
  let output = `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;
  console.log(output);
}

outfRec(16, "Morning");
outfRec(22, "Afternoon");

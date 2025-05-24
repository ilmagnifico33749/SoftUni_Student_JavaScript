function cinema(projectionType, rows, columns) {
  let price;
  let formulaIncomeFull = price * (rows * columns);
  
  if (projectionType === "Premiere") {
    price = 12.00;
  }
  else if (projectionType === "Normal") {
    price = 7.50;
  }
  else if (projectionType === "Discount")
    price = 5.00;
    
  console.log(formulaIncomeFull)
}

cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);

function radioCrystals(arrInp){
  let desiredFinalThickness = arrInp[0];
  let arrCrystalsThickness = arrInp.slice(1);
  let thickness;
  let arrManipulations = ["Cut", "Lat", "Grind", "Etch", "X-ray"]
  
  function cut(currThick) {
    let manipulationName = "Cut";
    let newThick = currThick / 4;
    return newThick;
  }

  function lap(currThick) {
    let manipulationName = "Lat";
    let newThick = currThick * 0.8;
    return newThick;
  }

  function grind(currThick) {
    let manipulationName = "Grind";
    let newThick = currThick - 20;
    return newThick;
  }

  function etch(currThick) {
    let manipulationName = "Etch";
    let newThick = currThick -2;
    return newThick;
  }

  function xray(currThick) {
    let manipulationName = "X-ray";
    let newThick = currThick + 1;
    return newThick;
  }

  function transportingAndWashing(currThick) {
    let manipulationName = "Transpoting and washing";
    let newThick = Math.floor(currThick);
    return newThick;
  }

  function manipulate(currThick) {
    let currCrystalThickness = currThick;
    let expectedResult;
    let countCurrManipulation = 0;
    let namePreviousManipulation;
    let message;

    for (let index=0; index<arrManipulations.length;index++) {
      let nameCurrentManipulation = arrManipulations[index];
      switch (nameCurrentManipulation) {
      case "Cut":
        expectedResult = cut(currCrystalThickness); break;
      case "Lap": 
        expectedResult = lap(currCrystalThickness); break;
      case "Grind": 
        expectedResult = grind(currCrystalThickness); break;
      case "Etch":
        expectedResult = etch(currCrystalThickness); break;
      case "X-ray":
        expectedResult = xray(currCrystalThickness); break;
    }

      while (expectedResult)

      if ((expectedResult > desiredFinalThickness) && (desiredFinalThickness-expectedResult)>1) {
        if (namePreviousManipulation && nameCurrentManipulation!=namePreviousManipulation) {
          countCurrManipulation++;
        }
        else {
          countCurrManipulation = 0;
        }
        currCrystalThickness = expectedResult;
      }

    }
  }

  for (let crystal of arrCrystalsThickness) {
    manipulate(crystal);
  }


}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);

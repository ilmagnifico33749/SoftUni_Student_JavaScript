function numberModification(num) {

  function calculateAverageValue(number) {
    let numberString = number.toString();
    let sumNumsNum = 0;
    let countElements = 0;
    let higherEqThanFive;

    for (let index=0; index<numberString.length; index++) {
      let currentElement = numberString[index];
      sumNumsNum+=Number(currentElement);
      countElements++;
    }

    if (sumNumsNum/countElements>=5) {
      higherEqThanFive = true;
    }
    else {
      higherEqThanFive = false;
    }
    return higherEqThanFive;
  }

  while (calculateAverageValue(num) != true) {
    num = Number(num.toString()+9);
  } 
  
  return console.log(num);
} 

numberModification(101);
numberModification(5835);

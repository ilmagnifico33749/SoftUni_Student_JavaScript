function solve(num1, num2, num3) {
  let biggestNum;
  
  if (num1 >= num2) {
    if (num1 >= num3) {
      biggestNum = num1;
    }
    else {
      biggestNum = num3;
    }
  }
  else if (num2 >= num3) {
    biggestNum = num2;
  }
  else {
    biggestNum = num3;
  }
  
  
  console.log(biggestNum);
}

solve(-2, 7, 3);
solve(130, 5, 99);
solve(43, 43.2, 43.1);
solve(2, 2, 2);

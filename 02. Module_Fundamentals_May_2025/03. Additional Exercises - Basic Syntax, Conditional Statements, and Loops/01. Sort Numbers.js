function solve(num1, num2, num3) {
	let highestNum, midNum, lowestNum;
	
  if (num1 >= num2 && num1 >= num3) {
  	highestNum = num1;
    if (num2 >= num3) {
    	midNum = num2;
      lowestNum = num3;
    }
    else if (num2 <= num3) {
    	midNum = num3;
      lowestNum = num2;
    }
  }
  else if (num1 <= num2 && num1 >= num3) {
    highestNum = num2;
    midNum = num1;
    lowestNum = num3;
  }
  
  else if (num1 >= num2 && num1 <= num3) {
    highestNum = num3;
    midNum = num1;
    lowestNum = num2;
  }
  
  else if (num1 <= num2 && num1<= num3) {
    lowestNum = num1;
    if (num2 <= num3) {
      midNum = num2;
      highestNum = num3;
    }
    else if (num2 >= num3) {
      midNum = num3;
      highestNum = num2;
    }
  }
  
  else if (num2 >= num3) {
    midNum = num3;
    highestNum = num2;
  }
  
  else {
    highestNum = num1;
    midNum = num2;
    lowestNum = num3;
  }
  
  
  console.log(highestNum);
  console.log(midNum);
  console.log(lowestNum);
}

solve(2, 1 ,3);
solve(-2, 1, 3);
solve(0, 0, 2);

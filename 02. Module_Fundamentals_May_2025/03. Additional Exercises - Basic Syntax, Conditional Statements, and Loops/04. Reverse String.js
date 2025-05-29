function solve(userInput) {
  let reversedString="";
  let userInputString = userInput.toString();
  for (i=(userInputString.length-1); i >= 0; i--) {
    reversedString += userInputString[i];
  }  
  console.log(reversedString);
}

solve("Hello");
solve("SoftUni");
solve("1234");

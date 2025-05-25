function solve(N1, N2, operator) {
  let result;
  let resultEvenOdd;
  let outputMessage;
  
  switch (operator) {
    case "+":
    case "-":
    case "*":
      if (operator === "+") {
      result = N1 + N2;
      }
      else if (operator === "-") {
        result = N1 - N2;
      }
      else if (operator === "*") {
        result= N1 * N2;
      }
      
      if (result % 2 === 0) {
        resultEvenOdd = "even";
      }
      else if (result % 2 != 0) {
        resultEvenOdd = "odd";
      }
      outputMessage = `${N1} ${operator} ${N2} = ${result} - ${resultEvenOdd}`;
      console.log(outputMessage);
      break;
    
    case "/":
    case "%":
      if (N2 === 0) {
        outputMessage = `Cannot divide ${N1} by zero`;
      }
      else {
        if (operator === "/") {
          result = (N1 / N2).toFixed(2);
        }
        else if (operator === "%") {
          result = N1 % N2;
        }
      outputMessage = `${N1} ${operator} ${N2} = ${result}`;
      };
      console.log(outputMessage);
      break;
  }
}

solve(10, 12, "+");
solve(10,1,"-");
solve(7, 3, "*");
solve(123, 12, "/");
solve(10, 3, "%");
solve(112, 0, "/");
solve(10, 0, "%");

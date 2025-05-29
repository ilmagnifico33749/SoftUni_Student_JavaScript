function solve(num) {
  let lastNum = num%10;

  switch (lastNum) {
    case 0:
      outputLastnumToText = "zero"; break;
    case 1:
      outputLastnumToText = "one"; break;
    case 2:
      outputLastnumToText = "two"; break;
    case 3:
      outputLastnumToText = "three"; break;
    case 4:
      outputLastnumToText = "four"; break;
    case 5:
      outputLastnumToText = "five"; break;
    case 6:
      outputLastnumToText = "six"; break;
    case 7:
      outputLastnumToText = "seven"; break;
    case 8:
      outputLastnumToText = "eight"; break;
    case 9:
      outputLastnumToText = "nine"; break;
    default:
      console.log('error');
      break;
  }
      
  console.log(outputLastnumToText);
}

solve(512);
solve(1);
solve(1643);

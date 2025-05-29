function solve(digit) {
  let digitOutp;
  switch (digit) {
    case "zero":
      digitOutp = 0;
      break;
    case "one": 
      digitOutp = 1;
      break;
    case "two":
      digitOutp = 2;
      break;
    case "three":
      digitOutp = 3;
      break;
    case "four":
      digitOutp = 4;
      break
    case "five":
      digitOutp = 5;
      break;
    case "six":
      digitOutp = 6;
      break;
    case "seven":
      digitOutp = 7;
      break;
    case "eight":
      digitOutp = 8;
      break;
    case "nine":
      digitOutp = 9;
      break;
  }
  console.log(digitOutp);
}

solve("nine");
solve("two");
solve("zero");

function solve(num) {
  let primeNumber=true;
  for (i=2; i < num; i++) {
    if (num % i === 0) {
      primeNumber = false; break;
    }
  }
  console.log(primeNumber);
}

solve(7);
solve(8);
solve(81);

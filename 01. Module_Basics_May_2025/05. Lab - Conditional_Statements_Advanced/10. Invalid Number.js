function solve(number) {
    let isValid = number >= 100 && number <= 200 || number === 0;
    if (!isValid) {
        console.log('invalid');
    }
}

solve(75);
solve(150);
solve(220);
solve(199);
solve(-1);
solve(100);
solve(200);
solve(0);

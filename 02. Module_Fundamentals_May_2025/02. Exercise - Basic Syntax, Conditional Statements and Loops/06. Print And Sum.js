function solve(num1, num2) {
    let allNums = "";
    let sum = 0;
    while (num1 <= num2) {
        allNums += `${num1} `;
        sum += num1;
        num1 += 1;        
    }
    console.log(allNums);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);

function solve(n) {
    for (let count = 1; count <= n; count++) {
        let strinToPrint = '';
        for (let j = 1; j <= count; j++) {
            strinToPrint += `${count} `;
        }
        console.log(strinToPrint);
    }
}

solve(3);
solve(5);
solve(6);

function solve(n) {
    let count = 1;
    while (count <= n) {
        console.log(`${count} `.repeat(count));
        count ++;
    }
}

solve(3);
solve(5);
solve(6);

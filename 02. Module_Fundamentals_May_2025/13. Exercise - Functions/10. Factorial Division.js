function factorialDivision(n, m) {
    let factorialN = 1;
    let factorialM = 1;

    for (let i = 1; i<=n; i++) {
        factorialN *= i;
    }

    for (let j = 1; j<=m; j++) {
        factorialM *= j;
    }
    result = (factorialN/factorialM).toFixed(2);

    return console.log(result);
}

factorialDivision(5, 2);
factorialDivision(6, 2);

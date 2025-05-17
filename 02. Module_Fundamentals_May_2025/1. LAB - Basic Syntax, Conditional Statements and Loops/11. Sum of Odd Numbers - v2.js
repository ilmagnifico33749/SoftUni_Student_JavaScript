function solve(n) {
    let i = 1
    let sum = 0;
    let count = n;
    while(count>0) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            count--;
        }
        i++;
    }
    console.log(`Sum: ${sum}`)
}

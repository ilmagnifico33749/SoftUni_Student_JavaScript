function solve(n) {
    let sum = 0;
    let count = n;
    
    for (let i=1; count>0; i++) {
        if (i%2 !== 0) {
            console.log(i);
            sum+=i;
            count--
        }
    } 
    console.log(`Sum: ${sum}`)
}

function solve(num) {
    num = num.toString();
    let sum = 0;
    
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let result = sum.toString().includes('9');
    console.log(result ? 
        `${num} Amazing? True`: 
        `${num} Amazing? False`);
}

solve(1233);
solve(999);


// function solve(num) {
//     num = num.toString();
//     let sum = 0;

//     for (let i = 0; i < num.length; i++)
//     sum += Number(num[i]);


//     let result = sum.toString().includes('9');
//     console.log(result ? 
//         `${num} Amazing? True`:
//         `${num} Amazing? False`);
// }
// solve(1233);
// solve(999);
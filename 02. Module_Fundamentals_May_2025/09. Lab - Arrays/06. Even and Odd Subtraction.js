function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let element of arr) {
        if (element % 2 === 0) {
            sumEven += element;
        }
        else {
            sumOdd += element;
        }
    }
    
    let diffEvenOdd = sumEven - sumOdd;
    console.log(diffEvenOdd);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);

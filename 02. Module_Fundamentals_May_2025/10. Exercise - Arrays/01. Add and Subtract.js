function solve(arr) {
    let sumArrOrig = 0;
    let sumArrNew = 0;

    for (let element of arr) {
        sumArrOrig += element;
    }

    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] + i;
        }
        else if (arr[i] % 2 !== 0) {
            arr[i] = arr[i] - i;
        }
    }

    for (let element of arr) {
        sumArrNew += element;
    }

    console.log(arr);
    console.log(sumArrOrig);
    console.log(sumArrNew);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);

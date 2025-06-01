function solve(arr, num) {
    let pairElements = [];
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if ((arr[i]+arr[j] === num)) {
                pairElements.push(arr[i], arr[j]);
                console.log(pairElements.join(" "))
                pairElements = [];
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);

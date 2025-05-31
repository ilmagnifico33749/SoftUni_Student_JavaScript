function solve(arr, numRot) {
 for (let i = 0; i<numRot; i++ ) {
    let currFirstEl = arr[i];
    arr[i] = null;
    arr[arr.length] = currFirstEl;
    console.log(arr);
 }

 console.log(arr.join(" "));
}

solve([51, 47, 32, 61, 21], 2);
// solve([32, 21, 61, 1], 4);
// solve([2, 4, 15, 31], 5);

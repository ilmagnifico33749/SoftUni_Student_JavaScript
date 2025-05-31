// UNFINISHED!!! 

function solve(arr, numRot) {
 for (let i = 0; i<numRot; i++ ) {
    for (let j=0; j<arr.length; j++) {
        let elCurrLeftPosition = j
        let elCurrLeftValue = arr[elCurrLeftPosition];

        let elNextLeftPosition = j+1;
        let elNextLeftValue = arr[elNextLeftPosition]

        let elCurrRightPosiion = (arr.length - 1) - j;
        let elCurrRightValue = arr[arr.length - 1];



        arr[elCurrLeftPosition] = 
    }
 }

 console.log(arr.join(" "));
}

solve([51, 47, 32, 61, 21], 2);
// solve([32, 21, 61, 1], 4);
// solve([2, 4, 15, 31], 5);

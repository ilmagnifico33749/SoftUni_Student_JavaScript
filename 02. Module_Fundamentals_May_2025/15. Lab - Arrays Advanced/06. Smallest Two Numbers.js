function smallestTwoNumbers(arrInp) {
    let sortedArray = arrInp.sort((a,b ) => (a-b));
    console.log(`${sortedArray[0]} ${sortedArray[1]}`);
    
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);


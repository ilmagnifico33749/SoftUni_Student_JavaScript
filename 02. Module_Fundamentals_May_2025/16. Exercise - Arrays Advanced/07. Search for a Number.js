function searchNumber(arr1, arr2) {
    let arrayElsToMan = arr1;
    let numElsToTake = arr2.shift();
    let numElsToDel = arr2.shift();
    let numToSearchFor = arr2.pop();

    let count = arrayElsToMan
        .splice(0, numElsToTake)
        .splice(numElsToDel)
        .filter(x => x==numToSearchFor)
        .length;

    console.log(`Number ${numToSearchFor} occurs ${count} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);

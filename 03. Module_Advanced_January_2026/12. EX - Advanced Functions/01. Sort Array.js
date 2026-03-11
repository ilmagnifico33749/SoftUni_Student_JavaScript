function arraySorting(usrInpArr, sortingType) {

    let sortedArray = [];

    function arrSortAsc(arr) {
        return arr.sort((a, b) => (a-b));
    };

    function arrSortDesc(arr) {
        return arr.sort((a, b) => (b-a));
    };

    function print(arr) {
        return arr;
    }

    if (sortingType === "asc") {
        sortedArray = arrSortAsc(usrInpArr);
    }

    else if (sortingType === "desc") {
        sortedArray = arrSortDesc(usrInpArr);
    }

    return print(sortedArray)
}


// Sample Input 1:
arraySorting([14, 7, 17, 6, 8], 'asc');

// Sample Input 2:
arraySorting([14, 7, 17, 6, 8], 'desc');

function sortingByTwoCriteria(arrInp) {
    let arrSorted = arrInp.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length-b.length;
        };
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
    console.log(arrSorted.join("\n"))
}

sortingByTwoCriteria(['alpha','beta','gamma']);
sortingByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

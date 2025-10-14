function sortingArrByTwoCrit(arrInp) {
    let sortedArr = arrInp.sort((a, b) => 
        (a.length - b.length)
    ||
        a.toLowerCase().localeCompare(b.toLowerCase())
    );

    sortedArr.forEach(
        element => {console.log(element)}
    );

}

sortingArrByTwoCrit(['alpha','beta','gamma']);
sortingArrByTwoCrit(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortingArrByTwoCrit(['test', 'Deny', 'omen', 'Default']);

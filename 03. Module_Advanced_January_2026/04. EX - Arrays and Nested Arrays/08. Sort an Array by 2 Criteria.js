function sortingArrByTwoCrit(arrInp) {
    let arrUsrInp = arrInp;
    let sortedArr = arrUsrInp.sort((a, b) => {
        if (a.length!== b.length) {
            return a.length - b.length;
        }

        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    console.log(sortedArr.join('\n'));
}

sortingArrByTwoCrit(['alpha','beta','gamma']);
sortingArrByTwoCrit(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortingArrByTwoCrit(['test', 'Deny', 'omen', 'Default']);

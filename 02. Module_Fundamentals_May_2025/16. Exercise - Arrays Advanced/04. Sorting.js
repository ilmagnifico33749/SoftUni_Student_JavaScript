function sorting(arrInp) {
    let sortedArrInp = arrInp.sort((a, b) => b-a);
    let finalArr = [];
    while (sortedArrInp.length > 0) {
        finalArr.push(sortedArrInp.shift());
        finalArr.push(sortedArrInp.pop());
    }

    console.log(finalArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
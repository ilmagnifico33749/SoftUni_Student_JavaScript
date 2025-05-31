function solve(arr1, arr2) {
    let newArr = [];
    for (let i=0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i % 2 === 0 && i===j) {
                newArr.push(Number(arr1[i]) + Number(arr2[j]));
            }
            else if (i % 2 !== 0 && i===j) {
                newArr.push(arr1[i].toString() + arr2[j].toString());
            };
        }
    }

    console.log(newArr.join(" - "))
}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);

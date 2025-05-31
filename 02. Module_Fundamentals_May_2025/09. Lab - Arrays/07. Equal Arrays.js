function solve(arr1, arr2) {
    let indenticalityStatus;
    let sumElementsArr1 = 0;

    for (let i=0; i <arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            indenticalityStatus = false;
            break
        }
    }

    if (indenticalityStatus != false) {
        for (let element of arr1) {
            sumElementsArr1 += Number(element);
        }
        console.log(`Arrays are identical. Sum: ${sumElementsArr1}`);
    }
}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);

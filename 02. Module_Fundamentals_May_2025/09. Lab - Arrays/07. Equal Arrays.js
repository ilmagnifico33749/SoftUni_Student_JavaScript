function solve(arr1, arr2) {
    let indenticalityStatus;
    let sumElementsArr1 = 0;

    console.log(arr1 == arr2)
    console.log(['10','20','30'] != ['10','20','30'])

    if (arr1 == arr2) {
        indenticalityStatus = true;
    }
    else {

    }

    if (indenticalityStatus == true) {
        for (let element of arr1) {
    sumElementsArr1 += element;
        }
        console.log(`Arrays are ${identical}. Sum: ${sumElementsArr1}}`);
    }
    else {
        console.log(`Not identical`)
    }
}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);

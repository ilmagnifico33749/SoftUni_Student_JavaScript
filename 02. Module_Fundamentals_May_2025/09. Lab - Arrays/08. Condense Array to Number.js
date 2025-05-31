function solve(arr) {
    let currArr=arr;
    let elementsSum=0;

    while (currArr.length>1) {
        let condensedArr = []
        for (let i=0; i <(currArr.length-1); i++) {
            let condensedNum = Number(currArr[i]) + Number(currArr[i+1]);
            condensedArr.push(condensedNum)
        }
        currArr = condensedArr;
    }
    
    console.log(currArr.join())
}

solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);

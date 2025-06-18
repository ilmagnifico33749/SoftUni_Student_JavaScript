function solve(userArray) {
    let origArr = userArray;
    let step = Number(userArray[userArray.length - 1]);
    let newArr = [];
    for (let i=0; i < origArr.length-1; i+=step) {
        newArr.push(origArr[i]);
    }
    console.log(newArr.join(" "));
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);

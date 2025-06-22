function nxnMatrix(num) {
    let matrixArr = [];
    for (let i = 0; i<num; i++) {
        let currentRow = [];
        for (let j = 0; j<num; j++) {
            currentRow.push(num);
        }
        matrixArr.push(currentRow.join(" "));
    }

    console.log(matrixArr.join("\n"))
}

nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);

function lastKNumsSeq(n, k) {
    let sequence = [1];
    
    for (let i = 1; i<n; i++) {
        let sumElements = 0;
        let start = i -k;

        for (let j = start; j <= i-1; j++) {
            if (j>=0) {
                sumElements += sequence[j];
            }
        }
        sequence.push(sumElements);
    }
    console.log(sequence.join(" "));
}

lastKNumsSeq(6, 3);
lastKNumsSeq(8, 2);

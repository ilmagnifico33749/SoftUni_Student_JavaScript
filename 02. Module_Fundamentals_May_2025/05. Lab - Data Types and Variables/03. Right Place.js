function triplets(num) {
    for (let i = 0; i < num; i++) {            // Changed condition to i < num
        let letter = String.fromCharCode(97 + i);
        for (let j = 0; j < num; j++) {          // Changed condition to j < num
            let letterb = String.fromCharCode(97 + j);
            for (let y = 0; y < num; y++) {      // Changed condition to y < num
                let letterc = String.fromCharCode(97 + y);
                let result = letter + letterb + letterc;  // Build the triple in one go
                console.log(result);
            }
        }
    }
}
triplets(3);
triplets(2);

function triplets(num) {
    for (let i=0; i<num; i++){
        let letterFirst = String.fromCharCode(97+i);
        for (let j=0; j < num; j++) {
            let letterSecond = String.fromCharCode(97+j);
            for (let y=0; y < num; y++) {
                let letterThird = String.fromCharCode(97+y);
                let result = letterFirst + letterSecond + letterThird;
                console.log(result);
            }
        }
    }
}

triplets(3);
triplets(2);

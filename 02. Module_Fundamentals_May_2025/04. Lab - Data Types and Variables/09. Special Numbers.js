function specialNumbers(num) {

    for (let i=1; i <=num; i++){
        let sumNumberChar = 0;
        let currNumString = i.toString();
        let currNumLength = currNumString.length;
        let specialStatus = false;
    
        for (let j=0; j<=(currNumLength-1); j++) {
            let currentChar = currNumString[j];
            let currCharToNum = parseInt(currentChar);
            sumNumberChar += currCharToNum;
        }
        if (sumNumberChar === 5 || sumNumberChar === 7 || sumNumberChar === 11) {
            specialStatus = true;
        }

        console.log(`${i} -> ${specialStatus? `True`:`False`}`)
    }
}

specialNumbers(15);
specialNumbers(20);
 
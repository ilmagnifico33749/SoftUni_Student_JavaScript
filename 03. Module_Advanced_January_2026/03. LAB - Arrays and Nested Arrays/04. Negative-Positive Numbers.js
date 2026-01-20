function negativePositiveNumbers(inpArr){
    let finalArr = []
    
    for (let index in inpArr) {
        let currentElement = Number(inpArr[index]);
        if (currentElement<0) {
            finalArr.unshift(currentElement);
        }
        else if (currentElement>=0) {
            finalArr.push(currentElement);
        }
    }
    for (let element of finalArr) {
        console.log(element);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);

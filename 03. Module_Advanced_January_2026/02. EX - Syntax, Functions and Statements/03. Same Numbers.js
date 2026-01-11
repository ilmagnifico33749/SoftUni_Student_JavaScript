function sameNumbers(intUserInp) {
    let status = true;
    let sumAllDigits = 0;
    let arrIntUserInp = String(intUserInp).split("");

    for (let index in arrIntUserInp) {
        let currentElement = arrIntUserInp[index];
        sumAllDigits += Number(currentElement);

        if (index > 0) {
            let pastElement = arrIntUserInp[index-1];

            if (pastElement !== currentElement) {
                status = false;
            }
        }
    }

    console.log(status);
    console.log(sumAllDigits);
};

sameNumbers(2222222);
sameNumbers(1234);

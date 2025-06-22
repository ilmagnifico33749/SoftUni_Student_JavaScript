function palindromeIntegers(ArrIntegers) {
    for (let integer of ArrIntegers) {
        let arrElementsInteger = integer.toString().split("");
        let palindrome;
        for (let index = 0; index < arrElementsInteger.length/2; index++) {
            let leftElement = arrElementsInteger[index];
            let rightElement = arrElementsInteger[arrElementsInteger.length-1-index];
            if (leftElement === rightElement) {
                palindrome = true;
            }
            else {
                palindrome = false;
                break;
            }
        }
        console.log(palindrome);
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);

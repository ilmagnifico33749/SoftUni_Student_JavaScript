function addAndSubtract(num1, num2, num3) {
    function sum(x, y) {
        return x+y;
    }

    function subtract(t, z) {
        return t-z;
    }
    
    result = subtract(sum(num1, num2), num3);

    return console.log(result);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

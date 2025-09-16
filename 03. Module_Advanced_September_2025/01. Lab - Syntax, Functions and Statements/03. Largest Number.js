function largestNum(num1, num2, num3) {
    let largestNumber = Number();
    if (num1 >= num2) {
        if (num1 >= num3) {
            largestNumber = num1;
        }
        else {
            largestNumber = num3;
        }
    }
    else {
        if (num2 >= num3) {
            largestNumber = num2;
        }
        else {
            largestNumber = num3;
        }
    }

    console.log(`The largest number is ${largestNumber}`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);

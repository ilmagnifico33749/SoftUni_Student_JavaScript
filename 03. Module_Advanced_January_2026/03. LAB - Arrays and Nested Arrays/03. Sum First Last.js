function sumFirstLast(arrInp) {
    let firstNum = Number(arrInp.shift());
    let lastNum = Number(arrInp.pop());
    let output = firstNum + lastNum;
    console.log(output);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);

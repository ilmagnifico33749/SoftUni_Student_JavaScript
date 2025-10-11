function sumFirstLast(arrInp) {
    const firstElement = Number(arrInp.shift());
    const lastElement = Number(arrInp.pop());
    const sum = firstElement + lastElement;
    
    console.log(sum);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);

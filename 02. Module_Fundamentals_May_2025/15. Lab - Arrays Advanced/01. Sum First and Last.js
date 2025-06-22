function sumFirstLast(arrayInput) {
    let elementFirst = Number(arrayInput.shift());
    let elementLast = Number(arrayInput.pop());
    result = elementFirst + elementLast;
    
    return console.log(result);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);

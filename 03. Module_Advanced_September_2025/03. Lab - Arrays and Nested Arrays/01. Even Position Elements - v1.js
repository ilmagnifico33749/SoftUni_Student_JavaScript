function evenPositionElement(arrInp) {
    let output = "";
    for (let i=0; i < arrInp.length; i++) {
        if (i%2==0) {
            output += `${arrInp[i]} `
        }
    }
    console.log(output.trim());
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);

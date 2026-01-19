function evenPositionElements(inpArr) {
    let output = [];

    for (let index in inpArr) {
        let currentElement = inpArr[index];
        if (index % 2 == 0) {
            output.push(currentElement);
        }
    }
    
    console.log(output.join(" "));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);

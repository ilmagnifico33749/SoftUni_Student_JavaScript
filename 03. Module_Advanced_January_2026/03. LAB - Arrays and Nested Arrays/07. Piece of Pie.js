function pieceOfPie(arrInp, flavorOne, flavorTwo) {
    let startingIndex = undefined;
    let endingIndex = undefined;
    let arrFinal = [];

    for (let index in arrInp) {
        let currentFlavor = arrInp[index];
        if (currentFlavor == flavorOne) {
            startingIndex = Number(index);
        }
        else if (currentFlavor == flavorTwo) {
            endingIndex = Number(index);
        }
    }

    arrFinal = arrInp.splice(startingIndex, (endingIndex-startingIndex+1));
    
    return arrFinal;
}

pieceOfPie(
    [
        'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
    );

pieceOfPie(
    [
        'Apple Crisp', 
        'Mississippi Mud Pie', 
        'Pot Pie', 
        'Steak and Cheese Pie', 
        'Butter Chicken Pie', 
        'Smoked Fish Pie'
    ], 
    'Pot Pie', 
    'Smoked Fish Pie'
);

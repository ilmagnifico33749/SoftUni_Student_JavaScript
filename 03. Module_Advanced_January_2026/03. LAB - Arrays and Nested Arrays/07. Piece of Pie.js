function pieceOfPie(arrInp, flavorOne, flavorTwo) {
    let startingIndex = undefined;
    let endingIndex = undefined;
    let arrFinal = [];

    for (let index in arrInp) {
        let currentFlavor = arrInp[index];
        if (currentFlavor == flavorOne) {
            startingIndex = index;
        }
        else if (currentFlavor == flavorTwo) {
            endingIndex = index;
        }
    }

    arrFinal = arrInp.splice(startingIndex, endingIndex);
    
    return arrFinal;
}


// -------------------------------------------------------------------------------
// OR

// function pieceOfPie(arrInpAllFlavors, targetFlavorOne, targetFlavorTwo) {
//     const indexOfFlavorOne = arrInpAllFlavors.indexOf(targetFlavorOne);
//     const indexOfFlavorTwo = arrInpAllFlavors.indexOf(targetFlavorTwo);
//     let newArr = arrInpAllFlavors.slice(indexOfFlavorOne, indexOfFlavorTwo+1);
    
//     return newArr;
// }
// -------------------------------------------------------------------------------

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

function storeProvisions(arrInp1, arrInp2) {
    let listCurrentStock = arrInp1;
    console.log(listCurrentStock);
    let listAllOrders = arrInp2;
    console.log(listAllOrders);
    let listFinalStock = [];

    for (let index=0; index < listAllOrders.length; index+=2) {
        let currentItemName = listAllOrders[index];
        let currentItemQuantity = listAllOrders[index+1];
        console.log(currentItemName);
        console.log(currentItemQuantity);
    }

}

storeProvisions(
    [ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], 
    [ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]
);
// storeProvisions(
//     [ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], 
//     [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]
// );

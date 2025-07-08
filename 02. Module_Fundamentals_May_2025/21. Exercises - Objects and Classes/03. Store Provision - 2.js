function storeProvisions(arrInp1, arrInp2) {
    let listCurrentStock = arrInp1;
    let listAllOrders = arrInp2;
    let listFinalStock = [];

    for (let index = 0; index <listCurrentStock.length; index+=2) {
        let currentItemName = listCurrentStock[index];
        let currentItemQuantity = Number(listCurrentStock[index+1]);
        let itemObject = {
            name: currentItemName,
            quantity: currentItemQuantity
        }
        listFinalStock.push(itemObject)
    }

    for (let index=0; index < listAllOrders.length; index+=2) {
        let currentItemName = listAllOrders[index];
        let currentItemQuantity = Number(listAllOrders[index+1]);
        let inStock = false;
        let currentItemObject = {
                    name: currentItemName,
                    quantity: currentItemQuantity
                }

        for (let currentItemInStock of listFinalStock) {
            if (currentItemInStock.name == currentItemObject.name) {
                currentItemInStock.quantity += Number(currentItemObject.quantity);
                inStock = true;
                break;
            }
        }
        if (inStock == false) {
                listFinalStock.push(currentItemObject);
            }
        
    } 

    for (let itemObjectInStock of listFinalStock) {
      let currentItemObjectInStockValues = Object.values(itemObjectInStock);
      console.log(currentItemObjectInStockValues.join(" -> "));
    }
}

storeProvisions(
    [ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], 
    [ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]
);
storeProvisions(
    [ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], 
    [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]
);

function storeCatalogue(arrInp) {
    let catalogue = {};
    let sortedArrProducts = arrInp.sort((a, b) => { 
        let nameA = a.split(" : ")[0].toLowerCase();
        let nameB = b.split(" : ")[0].toLowerCase();
        return nameA.localeCompare(nameB);
        }
    );
    // console.log(sortedArrProducts);

    for (let productInfo of sortedArrProducts) {
        let [productName, productPrice] = productInfo.split(" : ");
        let initial = productName[0];

        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {
            }
        }

        catalogue[initial][productName] = {
            name: productName,
            price: productPrice
        };
    }

    for (let initial of Object.keys(catalogue).sort()) {
        console.log(initial);
        for (let product of Object.keys(catalogue[initial]).sort()) {
            const item = catalogue[initial][product];
            console.log(` ${item.name}: ${item.price}`);
        }
    }      

}

storeCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);

storeCatalogue(
    [
        'Banana : 2', 
        "Rubic's Cube : 5", 
        'Raspberry P : 4999', 
        'Rolex : 100000', 
        'Rollon : 10', 
        'Rali Car : 2000000', 
        'Pesho : 0.000001', 
        'Barrel : 10'
    ]
);

function lowestPricesinCities(arrInp) {
    let registerProducts = {};

    for (let info of arrInp) {
        let [cityName, productName, productPrice] = info.split(" | ");

        if (!registerProducts.hasOwnProperty(productName)) {
            registerProducts[productName] = {
                price: Number(productPrice),
                city: cityName
            };
        }

        else {
            if (registerProducts[productName].price > Number(productPrice)) {
                registerProducts[productName].price = Number(productPrice);
                registerProducts[productName].city = cityName;
            }
        }
    }

    for (let product in registerProducts) {
        let currentProduct = registerProducts[product];
        console.log(`${product} -> ${currentProduct.price} (${currentProduct.city})`)
    }

}


// Input 1:

lowestPricesinCities(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sample Town | Sample Product | 999',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
);

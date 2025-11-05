function lowestPricesinCities(arrInp) {
    let registerProducts = {};

    for (let info of arrInp) {
        let [cityName, productName, price] = info.split(" | ");
        console.log(cityName, productName, price);
        if (
            (!registerProducts.hasOwnProperty(productName)) 
            || 
            (registerProducts.hasOwnProperty(productName)
            &&
            registerProducts[productName].price < price)
            ) {
            registerProducts[productName].price = price;
            registerProducts[productName].city = cityName;
        }
    }

    for (let product of registerProducts) {
        console.log(product)
    }
}


// Input 1:

lowestPricesinCities(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
);

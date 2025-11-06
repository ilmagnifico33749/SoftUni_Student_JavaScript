function lowestPricesinCities(arrInp) {
    let registerProducts = {};

    for (let info of arrInp) {
        let [cityName, productName, productPrice] = info.split(" | ");
        if (
            (!registerProducts.hasOwnProperty(productName)) 
            || 
            (registerProducts.hasOwnProperty(productName)
                &&
            registerProducts[productName].price > Number(productPrice))
            ) 
                {
            registerProducts[productName] = {
                price: Number(productPrice),
                city: cityName
            }
        }
    }

    for (let product in registerProducts) {
        console.log(`${product} -> ${registerProducts[product].price} (${registerProducts[product].city})`)
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

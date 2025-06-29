function listOfProducts(arrProd) {
    let result = arrProd
        .sort()
        .map((pr, i) => `${i+1}.${pr}`)
    
    for (let product of result) {
        console.log(product);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);

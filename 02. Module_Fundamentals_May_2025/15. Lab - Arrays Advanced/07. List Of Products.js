function listOfProducts(arrInp) {
    let arrSorted = arrInp.sort();

    for (let index=0; index<arrSorted.length; index++) {
        let currentElement = arrSorted[index];
        console.log(`${index+1}. ${currentElement}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);

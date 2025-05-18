function solve(product) {
    let productType;
    switch (product) {
        case 'banana':
        case 'apple':
        case 'kiwi': 
        case 'cherry':
        case 'lemon':
        case 'grapes':
            productType = 'fruit'; break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            productType = 'vegetable'; break;
        default:
            productType = 'unknown';break
    }
    console.log(productType);
}

solve('banana');
solve('apple');
solve('tomato');
solve('water');

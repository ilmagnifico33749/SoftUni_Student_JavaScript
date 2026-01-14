function cookingByNumbers(arrInp) {
    console.log(arrInp);
    [number, ...arrOperations] = arrInp;
    console.log(number);
    console.log(arrOperations);
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

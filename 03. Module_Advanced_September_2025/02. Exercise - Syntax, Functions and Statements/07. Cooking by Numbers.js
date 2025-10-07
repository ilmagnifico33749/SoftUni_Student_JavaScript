function cookingByNumbers(...params) {
    let num = params.shift();
    let arrOperations = params;

    for (let operation of arrOperations) {
        let currentOperation = operation;
        if (currentOperation === "chop") {
            num /= 2;
        }

        else if (currentOperation === "dice") {
            num = Math.sqrt(num);
        }

        else if (currentOperation === "spice") {
            num += 1;
        }

        else if (currentOperation === "bake") {
            num *= 3;
        }

        else if (currentOperation === "fillet") {
            num -= num*0.2;
        }

        console.log(num)
     }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');

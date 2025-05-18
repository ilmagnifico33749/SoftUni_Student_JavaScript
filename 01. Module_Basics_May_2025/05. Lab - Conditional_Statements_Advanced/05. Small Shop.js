function solve(productName, cityName, productQuantity) {
    let productPrice;
    let expensesTotal;

    if (productName === 'coffee') {
        if (cityName === 'Sofia') {
            productPrice = 0.50;
        }
        else if (cityName === 'Plovdiv') {
            productPrice = 0.40;
        }
        else if (cityName === 'Varna') {
            productPrice = 0.45;
        }
    }

    else if (productName === 'water') {
        if (cityName === 'Sofia') {
            productPrice = 0.80;
        }
        else if (cityName === 'Plovdiv' || cityName === 'Varna') {
            productPrice = 0.70;
        }
    }

    else if (productName === 'beer') {
        if (cityName === 'Sofia') {
            productPrice = 1.20;
        }
        else if (cityName === 'Plovdiv') {
            productPrice = 1.15;
        }
        else if (cityName === 'Varna') {
            productPrice = 1.10;
        }
    }

    else if (productName === 'sweets') {
        if (cityName === 'Sofia') {
            productPrice = 1.45;
        }
        else if (cityName === 'Plovdiv') {
            productPrice = 1.30;
        }
        else if (cityName === 'Varna') {
            productPrice = 1.35;
        }
    }

    else if (productName === 'peanuts') {
        if (cityName === 'Sofia') {
            productPrice = 1.60;
        }
        else if (cityName === 'Plovdiv') {
            productPrice = 1.50;
        }
        else if (cityName === 'Varna') {
            productPrice = 1.55;
        }
    }

    expensesTotal = productQuantity * productPrice;
    console.log(expensesTotal)
}

solve("coffee","Varna",2);
solve("peanuts", "Plovdiv", 1);
solve("beer", "Sofia", 2);
solve("water", "Plovdiv", 2);
solve("sweets", "Sofia", 2.23);

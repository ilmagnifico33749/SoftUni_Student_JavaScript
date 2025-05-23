function tradeCommission(city, volume) {
    let commissionPerc;
    let commissionFormula;
    let invalidCity = false;
    let invalidVolume = false;

    if (city === "Sofia") {
        if (volume >= 0 && volume <= 500){
            commissionPerc = 5;
        }
        else if (volume > 500 && volume <= 1000) {
            commissionPerc = 7;
        }
        else if (volume > 1000 && volume <= 10000) {
            commissionPerc = 8;
        }
        else if (volume > 10000) {
            commissionPerc = 12;
        }
        else {
            invalidVolume = true;
        }
    }

    else if (city === "Varna") {
        if (volume >= 0 && volume <= 500){
            commissionPerc = 4.5;
        }
        else if (volume > 500 && volume <= 1000) {
            commissionPerc = 7.5;
        }
        else if (volume > 1000 && volume <= 10000) {
            commissionPerc = 10;
        }
        else if (volume > 10000) {
            commissionPerc = 13;
        }
        else {
            invalidVolume = true;
        }
    }

    else if (city === "Plovdiv") {
        if (volume >= 0 && volume <= 500){
            commissionPerc = 5.5;
        }
        else if (volume > 500 && volume <= 1000) {
            commissionPerc = 8;
        }
        else if (volume > 1000 && volume <= 10000) {
            commissionPerc = 12;
        }
        else if (volume > 10000) {
            commissionPerc = 14.5;
        }
        else {
            invalidVolume = true
        }
    }

    else {
        invalidCity = true;
    }

    if (!invalidCity && !invalidVolume) {
        commissionFormula = (volume * (commissionPerc / 100)).toFixed(2);
        console.log(commissionFormula);
    }
    else{
        console.log("error");
    }
}

tradeCommission("Sofia", 1500);
tradeCommission("Plovdiv", 499.99);
tradeCommission("Varna", 3874.50);
tradeCommission("Kaspichan", -50);

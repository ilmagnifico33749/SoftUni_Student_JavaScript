function carFactory(carObjectRequirements) {
    const carEngineTypes = {
        "Small Engine": { power: 90, volume: 1800 },
        "Normal Engine": { power: 120, volume: 2400 },
        "Monster Engine": { power: 200, volume: 3500 }
    }

    const carCarriageTypes = {
        "Hatchback": { type: 'hatchback', color: undefined},
        "Coupe": { type: 'coupe', color: undefined}
    }
    
    function carEngineSpecsDeterm(carObject) {
        let carEngineTypeCurrent = "";
        let carEngineTypeFinal;
        if (carObject.power < 90) {
            carEngineTypeCurrent = "Small Engine";
        }

        else if (carObject.power > 90 & carObject.power < 120) {
            carEngineTypeCurrent = "Normal Engine";
        }

        else if (carObject.power > 120 && carObject.power < 200) {
            carEngineTypeCurrent = "Monster Engine";
        }

        else if (carObject.power > 200) {
            carEngineTypeCurrent = "Monster Engine";
        }

        if (carEngineTypes.hasOwnProperty(carEngineTypeCurrent)) {
            carEngineTypeFinal = carEngineTypes[carEngineTypeCurrent];
        }
    } 

    function carCarriageSpecsDeterm(carObject) {
        let carCarriageCurrent = "";
        let carCarriagefinal;
        if (carObject.carriage == "hatchback") {
            carCarriageCurrent = "Hatchback";
        }
        else if (carObject.carriage == "coupe") {
            carCarriageCurrent = "Coupe";
        }
        if (carCarriageTypes.hasOwnProperty(carCarriageCurrent)) {
            carCarriagefinal = carCarriageTypes[carCarriageCurrent]
        };
        carCarriagefinal.color = carObject.color;
        }
        return carCarriagefinal;
    }

    function carWheelsSpecsDeterm(carObject) {
        let currentCarWheels = Math.floor(Number(carObject.wheelsize));
        while (currentCarWheels % 2 != 0) {
            currentCarWheels -= 1;
        }

        const finalCarWheels = new Array(4).fill(10);
        return finalCarWheels;
    }
    

    let carObjectFinal = {
        model: carObjectRequirements.model,
        engine: carEngineSpecsDeterm(carObjectRequirements),
        carriage: carCarriageSpecsDeterm(carObjectRequirements),
        wheels: carWheelsSpecsDeterm(carObjectRequirements)
    };

    console.log(carObjectFinal);
    return carObjectFinal;
}

carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
);

carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);

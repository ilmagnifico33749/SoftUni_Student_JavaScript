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
        const currentCarPowerRequirements = carObject.power;
        let currentCarEngineSpecs= {};

        for (let engineType in carEngineTypes) {
            let currentEngineType = carEngineTypes[engineType];
            if (currentCarPowerRequirements <= currentEngineType.power) {
                currentCarEngineSpecs.power = currentEngineType.power;
                currentCarEngineSpecs.volume = currentEngineType.volume;
                break;
            }
        }

        // console.log(currentCarEngineSpecs);
        return currentCarEngineSpecs;
    }
    // carEngineSpecsDeterm(carObjectRequirements);

    function carCarriageSpecsDeterm(carObject) {
        const currentCarCarriageType = carObject.carriage.toLowerCase();
        let currentCarCarriageSpecs = {};

        for (let carriageType in carCarriageTypes) {
            let currentCarriageType = carCarriageTypes[carriageType];
            if (currentCarCarriageType == currentCarCarriageType) {
                currentCarCarriageSpecs.type = currentCarCarriageType;
                currentCarCarriageSpecs.color = carObject.color;
            }
        }

        // console.log(currentCarCarriageSpecs);
        return currentCarCarriageSpecs;

    }
    // carCarriageSpecsDeterm(carObjectRequirements);


    function carWheelsSpecsDeterm(carObject) {
        let currentCarWheelsType = Math.floor(Number(carObject.wheelsize));
        let currentCarWheelsSpecs;
        while (currentCarWheelsType % 2 == 0) {
            currentCarWheelsType -= 1;
        }

        currentCarWheelsSpecs = new Array(4).fill(currentCarWheelsType);
        // console.log(currentCarWheelsSpecs)
        return currentCarWheelsSpecs;
    }
    // carWheelsSpecsDeterm(carObjectRequirements);

    

    let carObjectFinalSpecs = {
        model: carObjectRequirements.model,
        engine: carEngineSpecsDeterm(carObjectRequirements),
        carriage: carCarriageSpecsDeterm(carObjectRequirements),
        wheels: carWheelsSpecsDeterm(carObjectRequirements)
    };

    console.log(carObjectFinalSpecs);
    return carObjectFinalSpecs;
}


// Test Input 1:
carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
);

// Test Input 2:
carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);

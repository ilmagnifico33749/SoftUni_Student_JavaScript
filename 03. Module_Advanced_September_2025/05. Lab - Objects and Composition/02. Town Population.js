function townPopulation(arrInp) {
    let arrObjectsCities = {};
    arrInp.map(x => {
        let [city, pops] = x.split(" <-> ");
        pops = Number(pops);
        
        if (!arrObjectsCities.hasOwnProperty(city)) {
            arrObjectsCities[city] = 0;
        }

        arrObjectsCities[city] += pops;
    }
    );

    Object.entries(arrObjectsCities).map(([city, pops]) => {
        console.log(`${city} : ${pops}`);
    })
}

townPopulation(
    [
        'Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ]
);

townPopulation(
    [
        'Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]
);

function solve(distanceMeters) {
    let distanceKm = distanceMeters / 1000;
    let distanceMiles = (distanceKm * 0.621371).toFixed(2);

    console.log(`${distanceMeters} meters is equal to ${distanceKm} kilometers.`)
    console.log(`${distanceKm} kilometers is equal to ${distanceMiles} miles.`)
}

solve(1852);
solve(798);

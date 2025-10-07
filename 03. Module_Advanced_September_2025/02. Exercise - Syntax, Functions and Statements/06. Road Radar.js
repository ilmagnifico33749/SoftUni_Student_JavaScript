function roadRadar(speed, townPlaceType) {
    let status = "";
    const speedKmH = Number(speed);
    let speedLimit = Number();
    const settlementType = townPlaceType;

    // Setting the speed limit according to the type of settlement.
    if (townPlaceType === "motorway") {
        speedLimit = 130;
    }
    else if (townPlaceType === "interstate") {
        speedLimit = 90;
    }
    else if (townPlaceType === "city") {
        speedLimit = 50;
    }
    else if (townPlaceType === "residential") {
        speedLimit = 20;
    }

    // Setting the status according to the current speed and the speed limit withing the corresponding type of settlement.
    const speedComparisonCurrentVsLimit = speedKmH - speedLimit;

    if (speedComparisonCurrentVsLimit <= 0) {
        status = "within the limit";
    }

    else if (speedComparisonCurrentVsLimit > 0 && speedComparisonCurrentVsLimit <= 20) {
        status = "speeding";
    } 

    else if (speedComparisonCurrentVsLimit > 20 && speedComparisonCurrentVsLimit <= 40) {
        status = "excessive speeding";
    }

    else if (speedComparisonCurrentVsLimit > 40) {
        status = "reckless driving";
    }

    // Message output according to the status
    const outputMessageWithinLimits = `Driving ${speedKmH} km/h in a ${speedLimit} zone`;
    const outputMessageOverLimits = `The speed is ${speedComparisonCurrentVsLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        
    if (status === "within the limit") {
        console.log(outputMessageWithinLimits);
    }

    else if (status === "speeding" || status === "excessive speeding" || status === "reckless driving") {
        console.log(outputMessageOverLimits);
    }

    else {
        console.log("Error");
    }

}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

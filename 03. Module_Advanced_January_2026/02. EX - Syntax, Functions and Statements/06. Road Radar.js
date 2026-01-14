function roadRadar(speed, area) {
    let driverSpeed = Number(speed);
    let speedLimit = undefined;
    let outputMessage = undefined;
    let status = undefined;

    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break
    }

    let speedDiff = driverSpeed - speedLimit;

    if (driverSpeed <= speedLimit) {
        outputMessage = `Driving ${driverSpeed} km/h in a ${speedLimit} zone`
    }
    else {
        if (speedDiff <= 20) {
            status = "speeding";
        }
        else if (speedDiff>20 && speedDiff<=40) {
            status = "excessive speeding";
        }
        else if (speedDiff>40) {
            status = "reckless driving";
        }
        outputMessage = `The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    console.log(outputMessage);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

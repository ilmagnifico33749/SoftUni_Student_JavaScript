function timeToWalk(steps, footprintMeters, speedKmH) {
    let distanceMeters = steps*footprintMeters;
    let numberOfBreaks = Math.floor(distanceMeters / 500);
    let speedMeterSeconds = speedKmH / 3.6;
    let timeWalkingTotalSeconds = distanceMeters/speedMeterSeconds;
    let timeTotalSeconds = timeWalkingTotalSeconds + (numberOfBreaks*60);
    let timeMinutes = Math.floor(timeTotalSeconds/60);
    let timeSeconds = Math.ceil(timeTotalSeconds%60);
    let timeHours = Math.floor(timeMinutes/60);

    if (timeHours < 10) {
        timeHours = `0${timeHours}`;
    }

    if (timeMinutes < 10) {
        timeMinutes = `0${timeMinutes}`;
    }

    if (timeSeconds < 10) {
        timeSeconds = `0${timeSeconds}`;
    }
    let timeFinalFormat = `${timeHours}:${timeMinutes}:${timeSeconds}`
    
    console.log(timeFinalFormat)
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);

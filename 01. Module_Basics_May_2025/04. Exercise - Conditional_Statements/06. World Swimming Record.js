function solve(recordSeconds, distanceMeters, timeForMeter) {
    let distanceDelayWaterResistanceMeters = 15;
    let timeDelayWaterResistanceSeconds = 12.5;
    let timeReqNoWaterResist = distanceMeters * timeForMeter;
    let timesDelayed = Math.floor(distanceMeters / distanceDelayWaterResistanceMeters);
    let additionalTimeDueWaterResistance = timesDelayed * timeDelayWaterResistanceSeconds;
    let totalTimeRequired = timeReqNoWaterResist + additionalTimeDueWaterResistance;
    let result;
    
    if (totalTimeRequired < recordSeconds) {
        result = `Yes, he succeeded! The new world record is ${totalTimeRequired.toFixed(2)} seconds.`;
    }
    else {
        result = `No, he failed! He was ${(Math.abs(recordSeconds - totalTimeRequired)).toFixed(2)} seconds slower.`
    }

    console.log(result);
}

solve(10464, 1500, 20);
// solve(55555.67, 3017, 5.03);

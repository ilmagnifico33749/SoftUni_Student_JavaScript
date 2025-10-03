function timeToWalk(numSteps, studentFootprintMeters, studentSpeedKmH) {
    const distanceMeters = numSteps * studentFootprintMeters;
    const distanceKm = distanceMeters / 1000;
    const studentSpeedMSec = studentSpeedKmH * 1000 / 3600;
    const numBreaks = Math.floor(distanceMeters/500);
    let timePureSecs = distanceMeters / studentSpeedMSec;
    let timeFinalSecs = timePureSecs + numBreaks*60;

    const timeHours = Math.floor(timeFinalSecs / 3600);
    const timeMinutes = Math.floor((timeFinalSecs % 3600) / 60);
    const timeSeconds = Math.round(timeFinalSecs % 60);

    const outputFormattedTime = `${timeHours.toString().padStart(2, '0')}:${timeMinutes
        .toString().padStart(2, '0')}:${timeSeconds.toString().padStart(2, '0')}`;
    
    console.log(outputFormattedTime);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5); 

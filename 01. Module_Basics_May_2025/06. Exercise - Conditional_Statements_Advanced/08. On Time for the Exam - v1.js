function solve(examHour, examMinutes, arrivalHour, arrivalMinutes) {
    let hoursDiff = 0;
    let minutesDiff;
    let totalDiffMinutes
    let arrivalStatus;
    let resolution;
    
    if (examHour === arrivalHour) {
        hoursDiff = 0;
        if (examMinutes < arrivalMinutes) {
            arrivalStatus = "Late";
            minutesDiff = arrivalMinutes - examMinutes;
            resolution = `${minutesDiff} minutes after the start`;
        }
        else if (examMinutes === arrivalMinutes) {
            arrivalStatus = "On time";
        }
        else if (examMinutes > arrivalMinutes) {
            arrivalStatus = "On time";
            minutesDiff = examMinutes - arrivalMinutes;
            resolution = `${minutesDiff} minutes before the start`
        }
    }

    else if (examHour > arrivalHour || examHour < arrivalHour) {

        if ((examHour > arrivalHour && examMinutes >= arrivalMinutes)) {
            totalDiffMinutes = ((Math.abs(examHour - arrivalHour)) * 60) + Math.abs(examMinutes - arrivalMinutes);
        }

        else if ((examHour < arrivalHour && examMinutes <= arrivalMinutes)) {
            totalDiffMinutes = ((Math.abs(examHour - arrivalHour)) * 60) - Math.abs(examMinutes - arrivalMinutes);
        }

        else if ((examHour > arrivalHour && examMinutes < arrivalMinutes)) {
            totalDiffMinutes = ((Math.abs(examHour - arrivalHour)) * 60) - (Math.abs(arrivalMinutes - examMinutes));
        }
        else if (examHour < arrivalHour && examMinutes > arrivalMinutes) {
            totalDiffMinutes = ((Math.abs(examHour - arrivalHour)) * 60) - (Math.abs(arrivalMinutes - examMinutes));
        }

    if (totalDiffMinutes >= 60) {
        hoursDiff = (totalDiffMinutes/60).toFixed(0);
        minutesDiff = totalDiffMinutes % 60;
        if (minutesDiff < 10) {
            minutesDiff = `0${minutesDiff}`;
        }
    }
    else {
        minutesDiff = totalDiffMinutes;
    }

    if (examHour < arrivalHour) {
        arrivalStatus = "Late";
        if (hoursDiff < 1) {
            resolution = `${minutesDiff} minutes after the start`;
        }
        else if (hoursDiff >= 1) {
            resolution = `${hoursDiff}:${minutesDiff} hours after the start`;
        }
    }
    else if (examHour > arrivalHour) {
        if (hoursDiff < 1 && minutesDiff <= 30) {
        arrivalStatus = "On time";
        }
        else if (hoursDiff < 1 && minutesDiff >30 || hoursDiff >= 1 && minutesDiff >= 30 || hoursDiff >= 1 && minutesDiff <= 30) {
            arrivalStatus = "Early";
        }

        if (hoursDiff < 1) {
            resolution = `${minutesDiff} minutes before the start`;
        }
        else if (hoursDiff >= 1) {
            resolution = `${hoursDiff}:${minutesDiff} hours before the start`;
        }

    }
    }
    
    console.log(arrivalStatus);
    if (resolution) {
        console.log(resolution);
    }
}

solve(9, 30, 9, 50);
solve(9, 00, 8, 30);
solve(16, 00, 15, 00);
solve(9, 00, 10, 30);
solve(14, 00, 13, 55);
solve(11, 30, 8, 12);
solve(10, 00, 10, 00);
solve(11, 30, 10, 55);
solve(11, 30, 12, 29);

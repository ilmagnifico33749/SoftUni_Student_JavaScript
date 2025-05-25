function solve(examHour, examMinutes, arrivalHour, arrivalMinutes) {
    let arrivalStatus;
    let minsInOneHour = 60 
    let resolution;
    
    let examTimeAbsMins = (examHour * 60) + examMinutes;
    let arrivalTimeAbsMins = (arrivalHour * 60) + arrivalMinutes;
    let diffExamArrivalMins = Math.abs(examTimeAbsMins - arrivalTimeAbsMins);

    let hoursDiff = 0;
    let minutesDiff = 0;

    if (diffExamArrivalMins >= 60) {
        hoursDiff = Math.trunc(diffExamArrivalMins / 60); 
        minutesDiff = diffExamArrivalMins % 60;
            if (minutesDiff < 10) {
                minutesDiff = `0${minutesDiff}`;
            }
        }
    else {
        minutesDiff = Math.abs(diffExamArrivalMins);
    }


    if (examTimeAbsMins < arrivalTimeAbsMins) {
        arrivalStatus = "Late";
        
        if (hoursDiff > 0) {
            resolution = `${hoursDiff}:${minutesDiff} hours after the start`;
        }
        else if (hoursDiff < 1) {
            resolution = `${minutesDiff} minutes after the start`;
        }
    }
    else if (examTimeAbsMins === arrivalTimeAbsMins) {
        arrivalStatus = "On time";
    }
    else if (examTimeAbsMins >= arrivalTimeAbsMins && Math.abs(diffExamArrivalMins) <= 30) {
        arrivalStatus = "On time";
        resolution = `${Math.abs(minutesDiff)} minutes before the start`;
    }
    else if (examTimeAbsMins >= arrivalTimeAbsMins && Math.abs(diffExamArrivalMins) > 30) {
        arrivalStatus = "Early";
        if (diffExamArrivalMins < 60) {
            resolution = `${minutesDiff} minutes before the start`;
        }
        else if (diffExamArrivalMins >= 60) {
            resolution = `${hoursDiff}:${minutesDiff} hours before the start`;
        }
    }
    
    console.log(arrivalStatus);
    if (resolution) {
        console.log(resolution);
    };
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

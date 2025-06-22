function loadingBar(num) {
    let progressBar = [];
    let progresStatus;
    for (let i = 0; i<100; i+=10) {
        if (i < num) {
            progressBar.push("%");
        }
        else {
            progressBar.push(".");
        }
    }

    if (num < 100) {
        progresStatus = `Still loading...`;
        message = `${num}% [${progressBar.join("")}]\n${progresStatus}`
    }
    else if (num = 100) {
        progresStatus = `Complete!`
        message = `${num}% ${progresStatus}\n[${progressBar.join("")}]`
    }

    return console.log(message);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);

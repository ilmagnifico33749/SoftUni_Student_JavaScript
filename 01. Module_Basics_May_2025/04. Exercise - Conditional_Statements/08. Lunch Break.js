function solve(seriesName, episodeLength, breakLength) {
    let timeForLunch = breakLength * (1/8);
    let timeForRest = breakLength * (1/4);
    let timeLeftForWatching = breakLength - timeForLunch - timeForRest;
    let timeLeftAfterEverything = Math.ceil(Math.abs(timeLeftForWatching - episodeLength));
    let verdict;

    if (timeLeftForWatching >= episodeLength) {
        verdict = `You have enough time to watch ${seriesName} and left with ${timeLeftAfterEverything} minutes free time.`;
    }
    else {
        verdict = `You don't have enough time to watch ${seriesName}, you need ${timeLeftAfterEverything} more minutes.`;
    }

    console.log(verdict);
}

solve("Game of Thrones", 60, 96);
solve("Teen Wolf", 48, 60);

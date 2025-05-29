function solve(startingYield) {
    let crewConsumption = 26;
    let totalYield = 0;
    let daysOperational = 0;

    for (let i = startingYield; i >= 100; i -= 10) {
        daysOperational++;
        totalYield += i;
        totalYield -= crewConsumption;
        
    }
    if (totalYield >= crewConsumption) {
            totalYield -= crewConsumption;
        }
    console.log(daysOperational);
    console.log(totalYield);
}

solve(111);
solve(450);

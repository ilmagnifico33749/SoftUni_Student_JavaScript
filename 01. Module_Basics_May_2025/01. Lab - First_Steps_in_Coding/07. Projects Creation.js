function solve(architectName, projectsNumber) {
    hoursToComplete = projectsNumber * 3;
    result = `The architect ${architectName} will need ${hoursToComplete} hours to complete ${projectsNumber} project/s.`;
    console.log(result);
}

solve("Michael", 4)
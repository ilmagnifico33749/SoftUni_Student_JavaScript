function constructionCrew(workerObject) {
    if (workerObject.dizziness == true) {
        let waterIntake = 0.1 * workerObject.weight * workerObject.experience;
        workerObject.levelOfHydrated += waterIntake;
        workerObject.dizziness = false;
    }

    console.log(workerObject);
    return workerObject;
    
}

constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
);

constructionCrew(
    {
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true 
    }
);

constructionCrew(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }
);

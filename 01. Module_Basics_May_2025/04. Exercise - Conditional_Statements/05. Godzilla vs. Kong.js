function solve(movieBudget, backgroundActorsNum, costumeBackgroundActorCost) {
    let movieDecorsCost = movieBudget * 0.10;
    let requirementDiscountCostumesActorsNum = 150;
    let discountCostumesActors = 0.10;
    let totalCostCostumesBackgrArt;
    let totalBudgetRequired;
    let situation;

    if (backgroundActorsNum > requirementDiscountCostumesActorsNum) {
        totalCostCostumesBackgrArt = (backgroundActorsNum * costumeBackgroundActorCost) * (1 - discountCostumesActors);
    }
    else {
        totalCostCostumesBackgrArt = backgroundActorsNum * costumeBackgroundActorCost;
    }

    totalBudgetRequired = movieDecorsCost + totalCostCostumesBackgrArt;
    let balance = movieBudget - totalBudgetRequired;

    if (totalBudgetRequired > movieBudget) {
        situation = `Not enough money!\nWingard needs ${Math.abs(balance).toFixed(2)} leva more.`;
    }
    else if (totalBudgetRequired <= movieBudget) {
         situation = `Action!\nWingard starts filming with ${balance.toFixed(2)} leva left.`;
    }
    
    console.log(situation);
}

solve(20000, 120, 55.5);
solve(15437.62, 186, 57.99);
solve(9587.88, 222, 55.68);

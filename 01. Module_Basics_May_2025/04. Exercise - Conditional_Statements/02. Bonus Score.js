function solve(pointInit) {
    let pointsBonus;
    if (pointInit <= 100) {
        pointsBonus = 5;
    }
    else if (pointInit > 100 && pointInit <= 1000) {
        pointsBonus = pointInit * 0.20;
    }
    else if (pointInit > 1000) {
        pointsBonus = pointInit * 0.10;
    }

    if (pointInit % 2 === 0) {
        pointsBonus += 1;
    }
    else if (pointInit % 10 === 5) {
        pointsBonus += 2;
    }

    let pointsGrandTotal = pointInit + pointsBonus;

    console.log(pointsBonus);
    console.log(pointsGrandTotal);
}

solve(20);
solve(175);
solve(2703);
solve(15875);

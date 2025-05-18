//Judge doesn't like the way the "verdict" is calculated and gives 30/100.
// Upon substitutin "balance" in the final if-else statement with it's essense Judge gives 100/100.

function solve(budget, gpuNum, cpuNum, ramNum) {
    let gpuPrice = 250;
    let totalGpuExpenses = gpuNum * gpuPrice;
    let cpuPrice = totalGpuExpenses * 0.35;
    let cpuExpenses = cpuNum * cpuPrice; 
    let ramPrice = totalGpuExpenses * 0.10;
    let ramExpenses = ramNum * ramPrice;
    let totalExpensesNoDiscount = totalGpuExpenses + cpuExpenses + ramExpenses;
    discountPercentage = 15;
    let totalExpensesWithDiscount;
    let totalExpensesFinal;
    let verdict;
    let balance;

    if (gpuNum > cpuNum) {
        totalExpensesWithDiscount = totalExpensesNoDiscount * (1 - (discountPercentage/100));
        totalExpensesFinal = totalExpensesWithDiscount
    }
    else {
        totalExpensesFinal = totalExpensesNoDiscount
    }

    balance = (budget - totalExpensesFinal).toFixed(2)

    if (budget >= totalExpensesFinal) {
        verdict = `You have ${balance} leva left!`;
    }
    else {
        verdict = `Not enough money! You need ${Math.abs(balance)} leva more!`
    }

    console.log(verdict);
}

    solve(900, 2, 1, 3);
    solve(920.45, 3, 1, 1);

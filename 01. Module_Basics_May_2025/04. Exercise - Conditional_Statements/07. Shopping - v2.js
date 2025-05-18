// This is the version which Judge approves and gives 100/100

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

    balance = Math.abs((budget - totalExpensesFinal).toFixed(2))

    if (budget >= totalExpensesFinal) {
        verdict = `You have ${(budget - totalExpensesFinal).toFixed(2)} leva left!`;
    }
    else {
        verdict = `Not enough money! You need ${(totalExpensesFinal - budget).toFixed(2)} leva more!`
    }

    console.log(verdict);
}

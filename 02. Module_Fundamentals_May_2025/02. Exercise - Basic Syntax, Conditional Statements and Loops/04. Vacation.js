function solve(groupSize, groupType, day) {
    let totalCost;
    let pricerPerPerson;
    let discount = 0;

    switch (groupType) {
        case "Students":
            if (day === "Friday") {
                pricerPerPerson = 8.45;
            }
            else if (day === "Saturday") {
                pricerPerPerson = 9.80;
            }
            else if (day === "Sunday") {
                pricerPerPerson = 10.46;
            }

            if (groupSize >= 30) {
                discount = 0.15;
            };
            break;

        
        case "Business":
            if (day === "Friday") {
                pricerPerPerson = 10.90;
            }
            else if (day === "Saturday") {
                pricerPerPerson = 15.60;
            }
            else if (day === "Sunday") {
                pricerPerPerson = 16;
            }

            if (groupSize >= 100) {
                groupSize -= 10;
            };
            break;

        case "Regular":
            if (day === "Friday") {
                pricerPerPerson = 15;
            }
            else if (day === "Saturday") {
                pricerPerPerson = 20;
            }
            else if (day === "Sunday") {
                pricerPerPerson = 22.50;
            }

            if (groupSize >= 10 && groupSize <= 20) {
                discount = 0.05;
            };
            break;
    }

    totalCost = groupSize * pricerPerPerson * (1 - discount);
    console.log(`Total price: ${totalCost.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40,"Regular","Saturday");

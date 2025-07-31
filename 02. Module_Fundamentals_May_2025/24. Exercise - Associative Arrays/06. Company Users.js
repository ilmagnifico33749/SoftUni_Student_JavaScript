function companyUsersFunction(arrInp) {
    let companiesMap = new Map;
    
    for (let info of arrInp) {
        let [companyName, employeeID] = info.split(" -> ");
        
        if (companiesMap.has(companyName)) {
            
            let companyEmployeesIDs = new Set (companiesMap.get(companyName));
            companyEmployeesIDs.add(employeeID);
            companiesMap.set(companyName, companyEmployeesIDs);
        }

        else if (!companiesMap.has(companyName)) {
            companiesMap.set(companyName, [employeeID]);
        }
    }

    // for (let [companyName, employeesIDsSet] of companiesMap) {
    //     console.log(companyName);
    //     for (let employeeID of employeesIDsSet) {
    //         console.log(`-- ${employeeID}`);
    //     }
    // }

    let companiesArraySorted = Array.from(companiesMap.entries()).sort((a, b) => a[0].localeCompare(b[0]))
    
    for (let [companyName, employeesIDs] of companiesArraySorted) {
        console.log(companyName);
        for (let employeeID of employeesIDs) {
            console.log(`-- ${employeeID}`)
        }
    }
}


companyUsersFunction(
    [
        'SoftUni -> AA12345', 
        'SoftUni -> BB12345', 
        'Microsoft -> CC12345', 
        'HP -> BB12345'
    ]
);

companyUsersFunction(
    [
        'SoftUni -> AA12345', 
        'SoftUni -> CC12344', 
        'Lenovo -> XX23456', 
        'SoftUni -> AA12345', 
        'Movement -> DD11111'
    ]
);

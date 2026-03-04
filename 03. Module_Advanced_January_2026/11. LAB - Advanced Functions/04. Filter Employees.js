function filterEmployees(data, criteria) {

    let dataConvToArr = JSON.parse(data);
    // console.log(dataConvToArr);
    // console.log(criteria);
    let [criteriaKey, criteriaValue] = criteria.split("-");
    // console.log(criteriaKey, criteriaValue);

    let filteredEmployeesArr = dataConvToArr
        .filter((currentObject) => criteria === "all" || currentObject[criteriaKey] == criteriaValue)
        .forEach((currentObject, index) =>
            console.log(`${index}. ${currentObject.first_name} ${currentObject.last_name} - ${currentObject.email}`) 
            );
}

// Sample Input
filterEmployees(
    `[
        {"id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female"}, 
        {"id": "2", "first_name": "Kizzee", "last_name": "Jost", "email": "kjost1@forbes.com", "gender": "Female"},
        {"id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male"}
    ]`, 
    'gender-Female');

filterEmployees(
    `[
        {"id": "1", "first_name": "Kaylee", "last_name": "Johnson", "email": "k0@cnn.com", "gender": "Female"}, 
        {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female"}, 
        {"id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }
    ]`,
    'last_name-Johnson'
)

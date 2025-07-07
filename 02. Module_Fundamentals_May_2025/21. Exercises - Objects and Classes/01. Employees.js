function employees(arrInp) {
    let listEmployees = [];
    class Employee{
        constructor(name) {
            this.name = name;
            this.personalNumber = this.name.length;
        }
    }

    for (let person of arrInp) {
        let employee = new Employee(person);
        listEmployees.push(employee);
    }

    for (let currentEmployee of listEmployees) {
        console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.personalNumber}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);

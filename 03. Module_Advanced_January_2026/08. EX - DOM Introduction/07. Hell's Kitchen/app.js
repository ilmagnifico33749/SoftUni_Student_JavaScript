function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let userInput = document.querySelectorAll('textarea')[0].value;
      
      let arrayDataFromUserInput = JSON.parse(userInput)
      // console.log(arrayDataFromUserInput);

      //---------------------------
      // Objects Templates
      //---------------------------
      function createRestaurantObject () {
         return {
            name: "",
            employees: [],
            salaryAverage: 0,
            salaryMax: 0
         }
      }

      function createEmployeeObject () {
         return {
            name: "",
            salary: 0
         }
      }

      let restaurantsData = [];

      //---------------------------
      // Phase 1: Building the data
      //---------------------------
      for (let index=0; index<arrayDataFromUserInput.length; index++) {
         let currentElement = arrayDataFromUserInput[index];
         // console.log(currentElement);
         let [restaurantNameString, restaurantEmployeesString] = currentElement.split(" - ");
         
         // Check if the restaurant already exists
         let existingRestaurant = restaurantsData.find(r => r.name === restaurantNameString) 

         let currentRestaurantObject;

         if (existingRestaurant) {
            currentRestaurantObject = existingRestaurant;
         }
         
         else {
            currentRestaurantObject = createRestaurantObject();
            currentRestaurantObject.name = restaurantNameString;
            restaurantsData.push(currentRestaurantObject);
         }

         // Add employees (no salary calculations yet)
         for (let employeeInfo of restaurantEmployeesString.split(", ")) {

            let [currentEmployeeName, currentEmployeeSalary] = employeeInfo.split(" ");
            currentEmployeeSalary = Number(currentEmployeeSalary);

            let currentEmployeeObject = createEmployeeObject();
            currentEmployeeObject.name = currentEmployeeName;
            currentEmployeeObject.salary = currentEmployeeSalary;
            currentRestaurantObject.employees.push(currentEmployeeObject);
         }
      }

      //---------------------------
      // Phase 2: Calculate stats
      //---------------------------
      for (let restaurant of restaurantsData) {
         let totalSalary = 0;
         let maxSalary = 0;
         let restaurantEmployeesNum = restaurant.employees.length;

         for (let employee of restaurant.employees) {
            totalSalary += employee.salary;
            if (employee.salary > maxSalary) {
               maxSalary = employee.salary;
            }
         }

         restaurant.salaryAverage = totalSalary / restaurantEmployeesNum;
         restaurant.salaryMax = maxSalary;
      }

      //-------------------------------------
      // Phase 3: Finding the best restaurant
      //-------------------------------------
      let bestRestaurantObject = null;
      let bestAverageSalary = 0;

      for (let restaurant of restaurantsData) {
         if (restaurant.salaryAverage > bestAverageSalary) {
            bestAverageSalary = restaurant.salaryAverage;
            bestRestaurantObject = restaurant;
         }
      }

      
      //----------------------------------------------------
      // Phase 4: Sorting the workers of the best restaurant
      //----------------------------------------------------
      bestRestaurantObject.employees.sort((a, b) => b.salary - a.salary);

      //----------------------------------------------------
      // Phase 5: Output to the DOM
      //----------------------------------------------------
      let bestRestaurantParagraph = document.querySelector('#bestRestaurant p');
      let workersParagraph = document.querySelector('#workers p');

      let bestRestaurantText = 
         `Name: ${bestRestaurantObject.name} ` + 
         `Average Salary: ${bestRestaurantObject.salaryAverage.toFixed(2)} ` + 
         `Best Salary: ${bestRestaurantObject.salaryMax.toFixed(2)} `;
      
         bestRestaurantParagraph.textContent = bestRestaurantText;

      let workersText = "";

      for (let employee of bestRestaurantObject.employees) {
         workersText += `Name: ${employee.name} With Salary: ${employee.salary} `;
      }

      workersParagraph.textContent = workersText.trim();

   }
}

["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
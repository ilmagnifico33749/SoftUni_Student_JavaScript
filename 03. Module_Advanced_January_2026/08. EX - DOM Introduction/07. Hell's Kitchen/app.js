function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let userInput = document.querySelectorAll('textarea')[0].value;
      

      let arrayDataFromUserInput = JSON.parse(userInput)
      console.log(arrayDataFromUserInput);

      let restaurantObj = new Object ({
         name: "",
         employees: [],
         salaryAverage: undefined,
         salaryMax: undefined
      })

      let employeeObj = {
         name: "",
         salary: undefined
      }


      let restaurantsData = [];

      for (let index=0; index<arrayDataFromUserInput.length; index++) {
         let currentElement = arrayDataFromUserInput[index];
         console.log(currentElement);
         let [restaurantNameString, restaurantEmployeesString] = currentElement.split(" - ");
         console.log(restaurantNameString);
         console.log(restaurantEmployeesString);
         let currentRestaurantObject = restaurantObj
         currentRestaurantObject.name = restaurantNameString;
         for (let employeeInfo of restaurantEmployeesString.split(", ")) {
            console.log(employeeInfo);
         }
      }

   }
}

["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
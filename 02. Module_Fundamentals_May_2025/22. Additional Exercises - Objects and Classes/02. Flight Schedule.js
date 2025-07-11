function flightScheduleFunction(userInpArr) {
  class Flight {
  constructor(flightNumber, destination, status="") {
    this.flightNumber = flightNumber;
    this.destination = destination;
    this.status = status;
  }

  printFlightDetails() {
      console.log(`{ Destination: '${this.destination}', Status: '${this.status}' }`);
    }
}

  class FlightSchedule {
    constructor() {
      this.schedule = [];
    }

    addFlight(flight) {
      this.schedule.push(flight);
    }

    updateStatus(flightNumber, newStatus) {
      let flight = this.schedule.find(f => f.flightNumber === flightNumber);
      if (flight) {
        flight.status = newStatus;
      }
    }
  }

  let allFlights = userInpArr.shift();
  let newlyModifiedFlights = userInpArr.shift();
  let newlyModifiedFlightsArray = [];
  let flightsStatusToPrint = userInpArr.pop()[0];
  let flightScheduleInstance = new FlightSchedule();

  for (let flight of allFlights) {
    let currFlightDetails = flight.split(" ");
    let currFlightNumber = currFlightDetails.slice(0, 1).join(" ");
    let currFlightDestination = currFlightDetails.slice(1).join(" ");
    let currentFlightObject = new Flight(currFlightNumber, currFlightDestination);
    flightScheduleInstance.addFlight(currentFlightObject);
  }

  for (let modifiedFlight of newlyModifiedFlights) {
    let [modifiedFlightNumber, modifiedFlightNewStatus] = modifiedFlight.split(" ");
    flightScheduleInstance.updateStatus(modifiedFlightNumber, modifiedFlightNewStatus);
    newlyModifiedFlightsArray.push(modifiedFlightNumber);
  }

  if (flightsStatusToPrint === "Ready to fly") {
    for (let flight of flightScheduleInstance.schedule) {
      if (!newlyModifiedFlightsArray.includes(flight.flightNumber)) {
        flightScheduleInstance.updateStatus(flight.flightNumber, "Ready to fly");
        flight.printFlightDetails();
      }
    }
  }
  else {
    for (let flight of flightScheduleInstance.schedule) {
      if (newlyModifiedFlightsArray.includes(flight.flightNumber)) {
        flight.printFlightDetails();
      }
    }
  }
}

[[
  'WN269 Delaware',
  'FL2269 Oregon',
  'WN498 Las Vegas',
  'WN3145 Ohio',
  'WN612 Alabama',
  'WN4010 New York',
  'WN1173 California',
  'DL2120 Texas',
  'KL5744 Illinois',
  'WN678 Pennsylvania'
  ],
  [
    'DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'
  ],
  [
    'Cancelled'
    ]
]

[
  [
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'
    ], 
    [
    'DL2120 Cancelled', 
    'WN612 Cancelled', 
    'WN1173 Cancelled', 
    'SK330 Cancelled'
    ], 
    [
      'Ready to fly'
    ]
  ]

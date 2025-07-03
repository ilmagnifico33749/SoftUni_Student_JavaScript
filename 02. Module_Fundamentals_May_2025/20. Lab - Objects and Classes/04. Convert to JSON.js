function convertToJson(firstname, lastname, haircolor) {
  let currentObject = {
    name: firstname,
    lastName: lastname,
    hairColor: haircolor,
  }

  console.log(JSON.stringify(currentObject));
}

convertToJson('{"name": "George", "age": 40, "town": "Sofia"}');
convertToJson('Peter', 'Smith', 'Blond');

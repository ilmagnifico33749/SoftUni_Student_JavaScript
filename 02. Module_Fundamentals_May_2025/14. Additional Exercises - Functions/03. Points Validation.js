function pointsValidation(arrCoordinates) {
  let [x1, y1, x2, y2] = arrCoordinates;
  let cartesianCoordinateSystem = [0, 0];
  let messageToPritnt;
  let coordinatesToCheck = [[x1, y1, cartesianCoordinateSystem[0], cartesianCoordinateSystem[1]], [x2, y2, cartesianCoordinateSystem[0], cartesianCoordinateSystem[1]], [x1, y1, x2, y2]];

  function calculateDistance(a, b, c, d) {
    let dx = c - a;
    let dy = d - b;
    return Math.sqrt(dx * dx + dy * dy)
  }

  function validityCheck(arrCoordinates) {
    let xx1 = arrCoordinates[0];
    let yy1 = arrCoordinates[1];
    let xx2 = arrCoordinates[2];
    let yy2 = arrCoordinates[3];
    let validity;
    let messageValid = `{${xx1}, ${yy1}} to {${xx2}, ${yy2}} is valid`;
    let messageInvalid = `{${xx1}, ${yy1}} to {${xx2}, ${yy2}} is invalid`;

    if (Number.isInteger(calculateDistance(xx1, yy1, xx2, yy2))) {
      validity = true;
      messageToPritnt = messageValid;
    }

    else {
      validity = false;
      messageToPritnt = messageInvalid;
    }

    return console.log(messageToPritnt);
  }

  for (let coordinates of coordinatesToCheck) {
    validityCheck(coordinates);
  }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);

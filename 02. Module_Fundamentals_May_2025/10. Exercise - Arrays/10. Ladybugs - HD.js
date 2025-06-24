function ladybugs(arrInp) {
  let fieldSize = Number(arrInp[0]);
  let ladybugsPositionsArr = arrInp[1].split(" ").map(Number);
  let commandsArr = [];

  for (let index = 2; index < arrInp.length; index++) {
    commandsArr.push(arrInp[index]);
  }

  let field = new Array(fieldSize).fill(0);

  for (let pos of ladybugsPositionsArr) {
    if (pos >= 0 && pos < fieldSize) {
      field[pos] = 1;
    }
  }

  for (let element of commandsArr) {
    let currentCommandArr = element.split(" ");
    let initialPosition = Number(currentCommandArr[0]);
    let direction = currentCommandArr[1];
    let movementStep = Number(currentCommandArr[2]);

    if (initialPosition < 0 || initialPosition >= fieldSize) continue;
    if (field[initialPosition] !== 1) continue; 

    field[initialPosition] = 0;

    let nextPosition = initialPosition;

    if (movementStep < 0) {
      movementStep = Math.abs(movementStep);
      direction = direction === 'right' ? 'left' : 'right';
    }

    while (true) {
      if (direction === 'right') {
        nextPosition += movementStep;
      } else {
        nextPosition -= movementStep;
      }

      if (nextPosition < 0 || nextPosition >= fieldSize) {
        break;
      }

      if (field[nextPosition] === 0) {
        field[nextPosition] = 1;
        break;
      }
    }
  }

  console.log(field.join(" "));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1' ]);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);

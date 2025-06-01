function solve(userInput) {
    let fieldSizeColumns = userInput[0];
    let fieldSizeRows = 1;
    let initialPositionsLadybugs = userInput[1];
    let currentPositionsLadybugs = initialPositionsLadybugs;
    for (let indexFuturePosition = 2; indexFuturePosition < userInput.length; indexFuturePosition++) {
        let finalNewPosition;
        let nextPosition = userInput[indexFuturePosition];
        console.log(nextPosition);
        let elementsNextPosition = nextPosition.split(" ");
        console.log(elementsNextPosition);
        let currentPosition = elementsNextPosition[0];
        let directionNewPostion = elementsNextPosition[1];
        let newPositionColumn = elementsNextPosition[2];

        if (directionNewPostion === "left)" {
            
        }
        
    }

}

solve([ 3, '0 1', '0 right 1', '2 right 1' ]);
// solve([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// solve([ 5, '3', '3 left 2', '1 left -2']);

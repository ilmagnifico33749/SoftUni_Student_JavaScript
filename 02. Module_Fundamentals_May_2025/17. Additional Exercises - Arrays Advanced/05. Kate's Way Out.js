// NOT FINISHED

function mazeWayOut(arrInp) {
    let mazeSize = arrInp.shift();
    let maze = arrInp.map(x => x.split(""));
    console.log(maze);
    let initialPosition;
    let currentPosition = initialPosition;
    let [currentPositionRow, currentPositionColumn] = currentPosition;
    let mazeRowSize = maze[0].length;
    let escapeRoutes = [];
    let mazeExits = [];
    let escaped = false;

    for (row in maze) {
        console.log(maze[row])
        let positionK = maze[row].indexOf("k");
        if (positionK !== -1) {
            initialPosition = [row, positionK].map(Number);            
            break;
        } 
    }
    
    function validPosition(currentPosition, nextPosition) {
        let validity;
        if ((Math.abs(currentPosition[0] - nextPosition[0]) === 1) && (Math.abs(currentPosition[1] - nextPosition[1]))) {
            validity = true;
        }
        else {
            validity = false;
        }
        return validity;
    }

    while (escaped === false) {
        let startingRow;
        let endRow;
        let startingColumn;
        let endColumn;

        if ((currentPositionRow - 1) >= 0 && (currentPositionRow+1) <= mazeSize) {
            let startingRow = (currentPositionRow-1);
            let endRow = currentPositionRow+1
        }
        else {
            startingRow = currentPositionRow;
            if (startingRow + 2 <= mazeSize) {
                endRow = startingRow + 2;
            } 
            else if 
        }

        if ((currentPositionColumn - 1) >= 0 && (currentPositionColumn+1) <= mazeRowSize) {
            let startingColumn = currentPositionColumn-1;
            let endColumn=startingColumn+1;
        }

    }

    let currentMatrix;
    
    for (let indexRow = currentPosition[0]-1; (indexRow <= currentPosition[0]+1); indexRow++);
        for (let indexColumn = currentPosition[1]-1; (indexColumn <=currentPosition[1]+1); indexColumn++) {

        }

    for (let rowIndex = currentPosition[0]; rowIndex >= 0; rowIndex--) {
        let currentRowIndex = rowIndex;
        let previousRowIndex = currentRowIndex-1;
        let nexRowIndex = currentRowIndex+1;
        let openSpacesCurrentRow = [];
        let openSpacesPreviousRow = [];
        let openSpacesNextRow = [];

        for (let columnIndex of maze[rowIndex]) {
            if (columnIndex === " ") {
                openSpacesCurrentRow.push([rowIndex, columnIndex]);
            }
        };

        for (let columnIndex of maze[previousRowIndex]) {
            if (columnIndex === " ") {
                openSpacesPreviousRow.push([previousRowIndex, columnIndex]);
        }
        
        for (let columnIndex of maze[nexRowIndex]) {
            if (columnIndex === " ") {
                openSpacesNextRow.push([nexRowIndex, columnIndex]);
        }
        if (openSpacesNextRow)
    }
}



mazeWayOut(
    [
        4,
        "######",
        "## k#",
        "## ###",
        "## ###"
    ]
);

mazeWayOut(
    [
        5,
        "######",
        "## k#",
        "## ###",
        "######",
        "## ###"
    ]
);

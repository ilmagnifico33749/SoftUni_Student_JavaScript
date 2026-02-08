function generateReport() {
    let columnsCheckBoxes = document.querySelectorAll('thead input[type="checkbox"]');
    let arrayColumnsCheckBoxes = Array.from(columnsCheckBoxes);
    let outputMessageLocation = document.getElementById('output');
    let rowsTable = document.querySelectorAll('tbody tr');
    let arrayRowsTable = Array.from(rowsTable);
    let checkedColumns = [];
    let output = [];

    for (let columnIndex in arrayColumnsCheckBoxes) {
        let columnCurrent = columnsCheckBoxes[columnIndex];
        let statusChecked = columnCurrent.checked;
        if (statusChecked) {
            checkedColumns.push([columnIndex, columnCurrent]);
        }
    }

    for (let row of arrayRowsTable) {
        let rowElements = row.querySelectorAll('td');
        let newSelectionObject = {}
        for (let columnInfo of checkedColumns) {
            let columnTableIndex = columnInfo[0];
            let selectedColumn = columnInfo[1];
            let selectedColumnRowCellValue = rowElements[columnTableIndex].textContent;
            newSelectionObject[selectedColumn.name] = selectedColumnRowCellValue;
            
        }
        output.push(newSelectionObject);
    }

    outputMessageLocation.value = JSON.stringify(output);
}

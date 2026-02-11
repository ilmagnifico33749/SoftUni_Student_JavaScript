function deleteByEmail() {
    let rowsTable = document.querySelectorAll('table tbody tr');
    let emailToDelete = document.getElementsByName("email")[0].value;
    let deletionStatusField = document.getElementById('result')
    
    for (let row of rowsTable) {
        console.log(row)
        let emailAddressCurrentRow = row.querySelectorAll('td')[1].textContent;
        console.log(emailAddressCurrentRow);
        if (emailAddressCurrentRow == emailToDelete) {
            row.parentNode.removeChild(row);
            deletionStatusField.textContent = "Deleted.";
            return;
        }
    deletionStatusField.textContent = "Not found.";
    }
}
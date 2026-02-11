function addItem() {
    let newLiItem = document.createElement('li');
    let listOfItems = document.getElementById('items');
    let userInputTextField = document.getElementById('newItemText');
    newLiItem.textContent = userInputTextField.value;

    listOfItems.appendChild(newLiItem)
    userInputTextField.value = '';

}
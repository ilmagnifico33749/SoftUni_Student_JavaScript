function addItem() {
    let newLiItem = document.createElement('li');
    let listOfItems = document.getElementById('items');
    let userInputTextField = document.getElementById('newItemText');

    if (userInputTextField.value.length === 0) return;

    newLiItem.textContent = userInputTextField.value;

    // Creating the deletion link
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';

    // Attaching the deletion behavior
    deleteLink.addEventListener('click', deleteItemFunction);
    listOfItems.appendChild(deleteLink);

    function deleteItemFunction() {
        newLiItem.remove();
    }
    
    
    newLiItem.appendChild(deleteLink);

    listOfItems.appendChild(newLiItem)

    userInputTextField.value = '';
    Event: mouse

}
function addItem() {
    let usrInp = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(usrInp.value));
    let items = document.getElementById('items');
    items.appendChild(newLi);
    usrInp.value = '';
}
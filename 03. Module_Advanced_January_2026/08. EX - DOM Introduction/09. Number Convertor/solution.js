function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');
    selectMenuTo.children[0].textContent = "Choose option";


    // Add options when the user clicks the dropdown
    selectMenuTo.addEventListener('click', () => {
        // Prevent adding duplicates
        if (selectMenuTo.children.length > 1) return;

        const binary = document.createElement('option');
        binary.value = 'binary';
        binary.textContent = 'Binary';

        const hex = document.createElement('option');
        hex.value = 'hexadecimal';
        hex.textContent = 'Hexadecimal';

        selectMenuTo.appendChild(binary);
        selectMenuTo.appendChild(hex);

    });
    document.getElementById('result').value = "N/A"

}

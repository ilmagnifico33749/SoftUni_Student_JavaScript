function validate() {
    const input = document.getElementById('email');

    input.addEventListener('change', () => {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(input.value)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    });
}

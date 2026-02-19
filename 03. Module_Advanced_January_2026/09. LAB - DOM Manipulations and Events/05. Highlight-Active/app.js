function focused() {
    let inputsSections = Array.from(document.querySelectorAll("input"));
    
    inputsSections.forEach(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    });

    function onFocus(e) {
        e.target.parentElement.classList.add('focused');
    }

    function onBlur(e) {
        e.target.parentElement.classList.remove('focused');
    }

}

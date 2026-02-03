function toggle() {
 
    let button = document.getElementsByClassName("button")[0];
    let buttonText = document.getElementsByClassName('button')[0];
    let extraText = document.getElementById('extra').style
    
    if (extraText.display == 'none' || extraText.display == '') {
        extraText.display = 'block';
        buttonText.textContent = 'Less';
    }

    else if (extraText.display == 'block') {
        extraText.display = 'none';
        buttonText.textContent = 'More';
    }

}

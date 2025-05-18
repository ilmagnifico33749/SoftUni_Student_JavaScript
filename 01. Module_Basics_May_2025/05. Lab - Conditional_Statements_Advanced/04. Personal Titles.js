function personalTitles(age, sex) {
    let title;
    if (sex === 'm') {
        if (age>=16) {
            title = 'Mr.';
        }
        else if (age<16) {
            title = 'Master';
        }
    }

    else if (sex === 'f') {
        if (age>=16) {
            title = 'Ms.';
        }
        else if (age<16) {
            title = 'Miss';
        }
    }

    console.log(title);
}

personalTitles(12, 'f');
personalTitles(17, 'm');
personalTitles(25, 'f');
personalTitles(13.5, 'm');

function funGradeType(grade) {
    var gradeType = ''
    if (grade >= 5.50) {
        gradeType = 'Excellent';
    } else {
        gradeType = 'Not excellent';
    }
    console.log(gradeType);
}

funGradeType(5.49)
funGradeType(5.50)

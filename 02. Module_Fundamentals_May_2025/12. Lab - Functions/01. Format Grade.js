function formatGrade(grade) {
    let gradeNum = grade.toFixed(2);
    let gradeWords;
    
    if (gradeNum < 3.00) {
        gradeWords = 'Fail';
        gradeNum = 2;
    }
    else if (gradeNum >= 3.00 && gradeNum < 3.50) {
        gradeWords = `Poor`;
    }
    else if (gradeNum >= 3.50 && gradeNum < 4.50) {
        gradeWords = `Good`;
    }
    else if (gradeNum >= 4.50 && gradeNum < 5.50) {
        gradeWords = `Very good`;
    }
    else if (gradeNum >= 5.50) {
        gradeWords = `Excellent`;
    } 
    let result = `${gradeWords} (${gradeNum})`;
    
    return console.log(result);
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);

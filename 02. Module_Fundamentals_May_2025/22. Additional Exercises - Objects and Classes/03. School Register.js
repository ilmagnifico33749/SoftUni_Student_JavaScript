function schoolRegisterFunction(arrInp) {
    let allGrades = [];

    class Student {
        constructor(name, grade, averageScore) {
            this.name = name;
            this.gradeNumber = grade;
            this.averageScore = averageScore;
        }
    }

    class Grade {
        constructor(gradeNumber) {
            this.gradeNumber = gradeNumber;
            this.studentsList = [];
            this.scoresAllStudentsPrevGrade = [];
            this.averageScorePrevGrade = 0;
        }

        calculateAverageScore() {
            let sumAllGrades = 0;
            for (let grade of this.scoresAllStudentsPrevGrade) {
                sumAllGrades += grade
            }
            let countNumGrades = this.scoresAllStudentsPrevGrade.length;
            let result = sumAllGrades / countNumGrades;
            this.averageScorePrevGrade = result.toFixed(2);
        }

        info() {
            console.log(`${this.gradeNumber} Grade`);
            console.log(`List of students: ${this.studentsList.map(x => x.name).join(", ")}`);
            this.calculateAverageScore();
            console.log(`Average annual score from last year: ${this.averageScorePrevGrade}`);
        }
    }


    for (let studentGenInfo of arrInp) {
        let studentInfoArr = studentGenInfo.split(", ");
        let studentInfoName = studentInfoArr[0].split(": ").pop();
        let studentInfoGrade = Number(studentInfoArr[1].split(": ").pop());
        let studentInfoAverageScore = Number(studentInfoArr[2].split(": ").pop());
        let newStudentObject = new Student(studentInfoName, studentInfoGrade, studentInfoAverageScore);
        
        if (newStudentObject.averageScore > 3) {
            newStudentObject.gradeNumber++;
        
            let gradeObject = allGrades.find(g => g.gradeNumber === newStudentObject.gradeNumber);

            if (gradeObject) {
                gradeObject.studentsList.push(newStudentObject);
                gradeObject.scoresAllStudentsPrevGrade.push(newStudentObject.averageScore);
            } else {
                let newGrade = new Grade(newStudentObject.gradeNumber);
                newGrade.studentsList.push(newStudentObject);
                newGrade.scoresAllStudentsPrevGrade.push(newStudentObject.averageScore);
                allGrades.push(newGrade);
            }
        }
    }

    allGrades.sort((a, b) => a.gradeNumber - b.gradeNumber);

    for (let grade of allGrades) {
        grade.info();   
        console.log(``)
    }
}


schoolRegisterFunction(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", 
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", 
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05", 
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", 
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
);

schoolRegisterFunction(
    [
        'Student name: George, Grade: 5, Graduated with an average score: 2.75',
        'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
        'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
        'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
        'Student name: John, Grade: 9, Graduated with an average score: 2.90',
        'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
        'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
);

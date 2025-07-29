function schoolGradesFunction(arrInp) {
    let schoolGradesMap = new Map;

    for (let info of arrInp) {
        let infoDetails = info.split(" ");
        let [name, ...grades] = infoDetails;
      
        if (schoolGradesMap.has(name)) {
            let currentGrades = schoolGradesMap.get(name);
            schoolGradesMap.set(name, currentGrades.concat(grades));
        }

        else {
            schoolGradesMap.set(name, grades)
        }
    }

    let schoolGradesArraySorted = Array.from(schoolGradesMap)
        .sort((a,b) => a[0].localeCompare(b[0]));


    for (let [name, grades] of schoolGradesArraySorted) {
        let sumGrades = 0;
        for (let grade of grades.map(Number)) {
            sumGrades += grade;
        }
        let averageGrade = sumGrades / grades.length;
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}


schoolGradesFunction(
    [
        'Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6'
    ]
);

schoolGradesFunction(
    [
        'Steven 3 5 6 4',
        'George 4 6',
        'Tammy 2 5 3',
        'Steven 6 3'
    ]
);

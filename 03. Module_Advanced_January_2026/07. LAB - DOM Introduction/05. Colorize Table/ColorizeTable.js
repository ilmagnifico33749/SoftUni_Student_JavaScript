function colorize() {
    // for (let index=0; index<document.getElementsByTagName('tr').length; index++) {
    // let currentRow = document.getElementsByTagName('tr')[index];
    //     if ((index !== 0) && (index % 2 !== 0)) {
    //         currentRow.style.background = 'teal';
    //     }
    // };

    for (let index=0; index<document.querySelectorAll('table tr').length; index++) {
        let currentRow = document.querySelectorAll(`table tr`)[index];
        if (index !== 0 && index % 2 !== 0) {
            currentRow.style.background = "teal";
        }
    }

    // let rows = document.querySelectorAll("table tr")
    // let index = 0;
    // for (let row of rows) {
    //     index++;
    //     if (index % 2 == 0) {
    //         row.style.background = "teal";
    //     }
    // } 

}

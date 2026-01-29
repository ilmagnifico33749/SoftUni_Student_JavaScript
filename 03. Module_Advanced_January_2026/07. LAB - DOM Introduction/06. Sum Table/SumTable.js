function sumTable() {
    // select first table
    // select all rows
    // filter first and last rows (headers and output)
    // for each row
    // -- select columns (children)
    // -- take last column
    // -- parse content as Number and add to sum
    // print output in element with id "sum"

    const rows = Array.from(document.querySelector('table').querySelectorAll('tr')).slice(1, -1);

    let sum = 0;

    for (let row of rows) {
        const lastColumn = row.lastElementChild;
        sum += Number(lastColumn.textContent);
    }

    console.log(sum)

    document.getElementById('sum').textContent = sum.toFixed(2);
    
}
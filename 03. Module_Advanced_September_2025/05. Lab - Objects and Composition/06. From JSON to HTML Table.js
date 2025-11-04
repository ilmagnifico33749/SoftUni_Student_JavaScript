function jsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let keys = Object.keys(arr[0]);
        return `  <tr>${keys.map(key => `<th>${escapeHtml(key)}</th>`).join('')}</tr>`;
    }

    function makeValueRow(obj) {
        return `  <tr>${Object.values(obj).map(val => `<td>${escapeHtml(val)}</td>`).join('')}</tr>`;
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    console.log(outputArr.join('\n'));
}


// Input 1:
jsonToHtmlTable(`[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]`);

// Input 2:
jsonToHtmlTable(`[{"Name":"Pesho", "Score":4, " Grade":8},
{"Name":"Gosho", "Score":5, " Grade":8},
{"Name":"Angel", "Score":5.50, " Grade":10}]`);

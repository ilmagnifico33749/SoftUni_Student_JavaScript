function extractText() {
    // select all list items
    // extract and join text content
    // print result in output filed

    const items = Array.from(document.getElementsByTagName('li'));
    const text = items.map(i => i.textContent);

    const output = document.getElementById('result');
    output.value = text.join('\n');
}
function extractText() {
    // select all list items
    // extract and join text content
    // print result in output filed

    // const items = Array.from(document.getElementsByTagName('li'));
    // or
    const items = Array.from(document.getElementById('items').children);

    const text = items.map(i => i.textContent);

    const output = document.getElementById('result');
    output.value = text.join('\n');
}

function echo(parameter) {
    const dataType = typeof parameter;
    console.log(dataType);

    if (dataType === 'string' || dataType === 'number') {
        console.log(parameter);
    }
    else {
        console.log('Parameter is not suitable for printing')
    }
}

echo('Helo, JavaScript!');
echo(18);
echo(null);

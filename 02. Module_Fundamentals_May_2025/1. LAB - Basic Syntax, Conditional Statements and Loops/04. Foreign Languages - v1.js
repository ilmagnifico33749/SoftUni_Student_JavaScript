function countLang(countryName) {
    var language = ''
    if (countryName === 'England' || countryName === 'USA') {
        language = 'English';
    }
    else if (countryName === 'Spain' || countryName === 'Argentina' || countryName === 'Mexico')  {
        language = 'Spanish';
    }
    else {
        language = 'unknown';
    }

console.log(language);
}

countLang('USA')
countLang('Spain')
countLang('Brazil')
function countLang(countryName) {
    language = ''
    switch(countryName) {
        case 'England':
        case 'USA':
            language = 'English';
            break;

        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            language = 'Spanish';
            break;
        default:
            language = 'unknown'
    }
    console.log(language)
}

countLang('USA')
countLang('Spain')
countLang('Brazil')
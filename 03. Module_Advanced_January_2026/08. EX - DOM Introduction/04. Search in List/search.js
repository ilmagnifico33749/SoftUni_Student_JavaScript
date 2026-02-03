function search() {
   let numberOfMatches = 0;
   let cities = document.querySelectorAll('ul li')
   const citiesCopy = cities;
   let lettersToSearch = document.getElementById('searchText').value;
   let fieldResult = document.getElementById('result')

   cities.forEach( li => {
      li.style.fontWeight = '';
      li.style.textDecoration = '';
   })

   for (let index=0; index < cities.length; index++) {
      let currentCity = cities[index];
      let currentCityName = currentCity.textContent;

      if (currentCityName.includes(lettersToSearch) && lettersToSearch !== '') {
         numberOfMatches++;
         currentCity.style.fontWeight = 'bold';
         currentCity.style.textDecoration = 'underline';
      }
   }

   let outputMessage = `${numberOfMatches} matches found`

   fieldResult.textContent = outputMessage;

   // numberOfMatches = 0;
   // lettersToSearch = '';
   // cities = citiesCopy;
}

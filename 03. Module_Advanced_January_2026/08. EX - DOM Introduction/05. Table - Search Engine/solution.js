function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById("searchField")
      let searchParameter = searchField.value;
      // console.log(searchParameter);
      let tableRows = document.querySelectorAll('table tr');

      // Clearing the previous highlight
      tableRows.forEach(row => row.classList.remove('select'));

      if (searchParameter !== '') {
         for (let index=2; index<tableRows.length; index++) {
            let currentRow = tableRows[index];
            // console.log(currentRow);
            let columnsInRow = currentRow.getElementsByTagName('td');
            let matchStatus = false;

            for (let column of columnsInRow) {
               let currentColumnText = column.textContent;
               // console.log(currentColumnText)

               if (currentColumnText.includes(searchParameter)) {
                  matchStatus = true;
                  break;
               }
            }

            if (matchStatus == true) {
               // TO SOMEHWO ADD CLASS SELECT
               currentRow.classList.add('select');
            }
         }
      }

      searchField.value = '';
   }
}

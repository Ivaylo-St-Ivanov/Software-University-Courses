function search() {

   'use strict';
   const towns = Array.from(document.querySelectorAll('li'));
   const input = document.getElementById('searchText').value;
   let matches = 0;

   for (const town of towns) {
      if ((town.textContent).includes(input)) {
         matches++;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = '';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}

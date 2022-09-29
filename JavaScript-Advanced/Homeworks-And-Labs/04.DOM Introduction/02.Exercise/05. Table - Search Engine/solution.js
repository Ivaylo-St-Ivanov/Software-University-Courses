function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      'use strict';
      const input = document.getElementById('searchField').value;
      const table = [...document.querySelectorAll('tbody tr')];

      for (const row of table) {
         row.classList.remove('select');

         if ((row.textContent).includes(input)) {
            row.className = 'select';
         }
      }
   }
}
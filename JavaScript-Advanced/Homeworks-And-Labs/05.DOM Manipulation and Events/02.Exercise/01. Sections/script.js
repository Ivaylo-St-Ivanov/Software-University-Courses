function create(words) {

   'use strict';
   for (const current of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = current;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', onClick);
      document.getElementById('content').appendChild(div);
   }

   function onClick(event) {
      event.target.children[0].style.display = '';
   }
}
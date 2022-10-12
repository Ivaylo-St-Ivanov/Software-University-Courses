function validate() {

    'use strict';
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    const input = document.getElementById('email');

    input.addEventListener('change', (e) => {
        e.preventDefault();
          
        if (!pattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}
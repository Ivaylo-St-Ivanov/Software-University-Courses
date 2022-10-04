function validate() {

    'use strict';
    const input = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+.[a-z]+/gm;
    input.addEventListener('change', onChange);

    function onChange(event) {
        if (pattern.test(event.target.value)) {
            event.target.removeAttribute('class');
        } else {
            input.className = 'error';
        }
    }
}
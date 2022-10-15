function lockedProfile() {

    'use strict';
    const buttons = [...document.querySelectorAll('.profile button')];

    for (const button of buttons) {
        button.addEventListener('click', showMore);
    }

    function showMore(event) {
        const isUnlock = event.target.parentNode.querySelector('input[value="unlock"]').checked;

        if (isUnlock) {
            const hiddenDiv = [...event.target.parentNode.querySelectorAll('div')]
                .find(x => x.id.includes('Hidden'));

            if (event.target.textContent == 'Show more') {
                hiddenDiv.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                hiddenDiv.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}

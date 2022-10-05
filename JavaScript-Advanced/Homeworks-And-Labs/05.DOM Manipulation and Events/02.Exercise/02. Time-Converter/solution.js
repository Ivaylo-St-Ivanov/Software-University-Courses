function attachEventsListeners() {

    'use strict';
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', days);
    hoursBtn.addEventListener('click', hours);
    minutesBtn.addEventListener('click', minutes);
    secondsBtn.addEventListener('click', seconds);

    function days() {
        const days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 24 * 60;
        secondsInput.value = days * 24 * 60 * 60;
    }

    function hours() {
        const hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    }

    function minutes() {
        const minutes = minutesInput.value;
        hoursInput.value = minutes / 60;
        daysInput.value = minutes / 60 / 24;
        secondsInput.value = minutes * 60;
    }

    function seconds() {
        const seconds = secondsInput.value;
        minutesInput.value = seconds / 60;
        hoursInput.value = seconds / 60 / 60;
        daysInput.value = seconds / 60 / 60 / 24;
    }
}
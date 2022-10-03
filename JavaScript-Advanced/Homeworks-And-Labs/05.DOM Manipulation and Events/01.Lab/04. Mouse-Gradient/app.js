function attachGradientEvents() {

    'use strict';
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', mouseMove);
    const result = document.getElementById('result');

    function mouseMove(event) {
        result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%';
    }
}
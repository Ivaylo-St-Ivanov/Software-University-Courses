window.addEventListener("load", solve);

function solve() {

    'use strict';
    const product = document.querySelector('#right form select');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');

    document.querySelector('#right form button').addEventListener('click', getInfo);
    document.querySelector('#completed-orders button').addEventListener('click', clear);

    const receivedElement = document.getElementById('received-orders');
    const completedElement = document.getElementById('completed-orders');

    function getInfo(e) {
        e.preventDefault();

        if (!description.value || !clientName.value || !clientPhone.value) {
            return;
        }

        const div = document.createElement('div');
        div.className = 'container';

        const h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${product.value}`;
        div.appendChild(h2);

        const h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;
        div.appendChild(h3);

        const h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description.value}`;
        div.appendChild(h4);

        const startBtn = document.createElement('button');
        startBtn.addEventListener('click', () => {
            finishBtn.disabled = false;
            startBtn.setAttribute('disabled', 'disabled');
        });
        startBtn.textContent = `Start repair`;
        startBtn.className = 'start-btn';
        div.appendChild(startBtn);

        const finishBtn = document.createElement('button');
        finishBtn.textContent = `Finish repair`;
        finishBtn.className = 'finish-btn';
        finishBtn.setAttribute('disabled', 'disabled');
        finishBtn.addEventListener('click', finishRepair);
        div.appendChild(finishBtn);

        receivedElement.appendChild(div);

        description.value = '';
        clientName.value = '';
        clientPhone.value = '';

        function finishRepair() {
            completedElement.appendChild(div);

            startBtn.remove();
            finishBtn.remove();
        }
    }

    function clear() {
        Array.from(completedElement.querySelectorAll('.container'))
            .forEach(el => el.remove());
    }
}

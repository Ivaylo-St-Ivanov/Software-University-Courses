function solve() {
    const info = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let currentStop = {
        next: 'depot'
    }

    async function depart() {
        try {
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`);

            if (response.ok == false) {
                throw new Error('Error');
            }

            currentStop = await response.json();

            info.textContent = `Next stop ${currentStop.name}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            info.textContent = `Error`;
            departBtn.disabled = false;
            arriveBtn.disabled = false;
        }
    }

    async function arrive() {
        info.textContent = `Arriving at ${currentStop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
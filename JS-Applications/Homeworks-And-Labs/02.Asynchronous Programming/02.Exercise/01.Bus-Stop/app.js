async function getInfo() {

    const input = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    try {
        busesList.replaceChildren();

        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${input.value}`);

        if (response.status != 200) {
            throw new Error('Error');
        }
        
        const data = await response.json();
        stopName.textContent = data.name;

        for (const [bus, time] of Object.entries(data.buses)) {
            busesList.innerHTML += `<li>Bus ${bus} arrives in ${time} minutes</li>`;
        }
        input.value = '';
    } catch (error) {
        stopName.textContent = 'Error';
    }
}
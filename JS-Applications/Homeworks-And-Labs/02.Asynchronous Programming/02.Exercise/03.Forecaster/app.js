const icons = {
    'Sunny': '&#x2600',
    'Partly sunny': '&#x26C5',
    'Overcast': '&#x2601',
    'Rain': '&#x2614',
    'Degrees': '&#176'
};

const locationRef = document.getElementById('location');
const result = document.getElementById('forecast');
const divCurrent = document.getElementById('current');
const divUpcoming = document.getElementById('upcoming');
const divLabel = divCurrent.querySelector('.label');

function attachEvents() {
    document.getElementById('submit').addEventListener('click', () => getWeather(locationRef.value));
}

async function getWeather(name) {
    try {
        if (locationRef.value) {
            const code = await getLocation(name);

            const [current, upcoming] = await Promise.all([
                getCurrent(code),
                getUpcoming(code)
            ]);
    
            if (divCurrent.children[1]) {
                divCurrent.children[1].remove();
                divUpcoming.children[1].remove();
            }
    
            const divForecasts = document.createElement('div');
            divForecasts.className = 'forecasts';
            divForecasts.innerHTML = `<span class="condition symbol">${icons[current.forecast.condition]}</span>
                                      <span class="condition">
                                          <span class="forecast-data">${current.name}</span>
                                          <span class="forecast-data">${current.forecast.low}${icons['Degrees']}/${current.forecast.high}${icons['Degrees']}</span>
                                          <span class="forecast-data">${current.forecast.condition}</span>
                                      </span>`;
            divCurrent.appendChild(divForecasts);
    
            const [days] = Object.values(upcoming);
    
            const divForecastInfo = document.createElement('div');
            divForecastInfo.className = 'forecast-info';
            for (const day of days) {
                divForecastInfo.innerHTML += `<span class="upcoming">
                                                <span class="symbol">${icons[day.condition]}</span>
                                                <span class="forecast-data">${day.low}${icons['Degrees']}/${day.high}${icons['Degrees']}</span>
                                                <span class="forecast-data">${day.condition}</span>
                                            </span>`;
            }
            divUpcoming.appendChild(divForecastInfo);
    
            divLabel.textContent = 'Current conditions';
            divUpcoming.style.display = 'block';
            result.style.display = 'block';
        } else {
            throw new Error();
        }
    } catch (error) {
        if (divCurrent.children[1]) {
            divCurrent.children[1].remove();
            divUpcoming.children[1].remove();
        }
        divLabel.textContent = 'Error';
        result.style.display = 'block';
        divUpcoming.style.display = 'none';
    }
}

async function getLocation(name) {
    const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
    const data = await response.json();

    if (!response.ok) {
       throw new Error('Error');
    }

    const location = data.find(x => x.name == name);
    locationRef.value = '';
    return location.code;
}

async function getCurrent(code) {
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error('Error');
    }
    
    return data;
}

async function getUpcoming(code) {
    const response = await fetch('http://localhost:3030/jsonstore/forecaster/upcoming/' + code);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Error');
    }
    
    return data;
}

attachEvents();


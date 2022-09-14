function roadRadar(speed, area) {

    'use strict';
    // • On the motorway, the limit is 130 km/h
    const motorwayLimit = 130;
    // • On the interstate, the limit is 90 km/h
    const interstateLimit = 90;
    // • In the city, the limit is 50 km/h
    const cityLimit = 50;
    // • Within a residential area, the limit is 20 km/h
    const residentialLimit = 20;
    let difference;
    let status;

    let print = function (speed, limit) {

        if (speed <= limit) {
            return `Driving ${speed} km/h in a ${limit} zone`;
        } else {
            difference = Math.abs(speed - limit);
            // For speeding up to 20 km/h over the limit, the status should be speeding.
            // For speeding up to 40 km/h over the limit, the status should be excessive speeding.
            // For anything else, status should be reckless driving.
            if (difference > 40) {
                status = 'reckless driving';
            } else if (difference > 20) {
                status = 'excessive speeding';
            } else {
                status = 'speeding';
            }
            return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
        }
    }

    switch (area) {
        case 'motorway': console.log(print(speed, motorwayLimit)); break;
        case 'interstate': console.log(print(speed, interstateLimit)); break;
        case 'city': console.log(print(speed, cityLimit)); break;
        case 'residential': console.log(print(speed, residentialLimit)); break;
    }
}
roadRadar(200, 'motorway');
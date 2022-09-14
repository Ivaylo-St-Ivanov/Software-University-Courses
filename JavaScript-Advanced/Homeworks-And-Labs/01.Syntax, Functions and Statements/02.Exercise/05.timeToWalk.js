function timeToWalk(steps, lengthOfFootprint, speedInKmPerHour) {

    'use strict';
    let distanceInMeters = steps * lengthOfFootprint;
    let timeInSec = 3600 / (speedInKmPerHour * 1000) * distanceInMeters;
    let hours = Math.floor(timeInSec / 3600);
    let minutes = Math.floor(timeInSec / 60);
    // Every 500 meters the student rests and takes a 1-minute break.
    let restsTime = Math.floor(distanceInMeters / 500);
    minutes += restsTime;
    let seconds = Number((timeInSec % 60).toFixed(0));
    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;

    let formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}
timeToWalk(9564, 0.70, 5.5);
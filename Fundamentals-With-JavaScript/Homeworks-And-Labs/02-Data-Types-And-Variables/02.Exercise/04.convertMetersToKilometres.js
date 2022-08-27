function convertMetersToKilometres(distanceInMeters) {

    const kilometers = (distanceInMeters / 1000).toFixed(2);
    console.log(kilometers);
}
convertMetersToKilometres(1852);
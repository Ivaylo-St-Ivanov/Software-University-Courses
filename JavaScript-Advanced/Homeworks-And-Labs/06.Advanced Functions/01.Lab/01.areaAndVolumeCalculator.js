function areaAndVolumeCalculator(areaFunc, volumeFunc, coordinates) {

    'use strict';
    return JSON.parse(coordinates).map(x => ({ area: areaFunc.call(x), volume: volumeFunc.call(x) }));
}
console.log(areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
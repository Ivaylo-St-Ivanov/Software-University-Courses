function piccolo(data) {

    let parkingLot = new Set();

    for (const current of data) {
        let [direction, car] = current.split(', ');

        switch (direction) {
            case 'IN':
                parkingLot.add(car);
                break;
            case 'OUT':
                parkingLot.delete(car);
                if (parkingLot.size === 0) {
                    console.log('Parking Lot is Empty');
                }
                break;
        }
    }

    let sortedCars = Array.from(parkingLot).sort();
    console.log(sortedCars.join('\n'));
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
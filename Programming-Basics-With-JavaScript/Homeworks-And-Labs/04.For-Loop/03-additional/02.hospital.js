function hospital(input) {

    let doctorsCount = 7;

    const period = Number(input[0]);
    let index = 1;

    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= period; i++) {
        let patientsForCurrentDay = Number(input[index]);
        index++;
        if (i % 3 === 0 && untreatedPatients > treatedPatients) {
            doctorsCount += 1;
        }

        if (patientsForCurrentDay > doctorsCount) {
            treatedPatients += doctorsCount;
            untreatedPatients += patientsForCurrentDay - doctorsCount;
        } else if (patientsForCurrentDay === doctorsCount || doctorsCount > patientsForCurrentDay) {
            treatedPatients += patientsForCurrentDay;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital(["3", "7", "7", "7"]);
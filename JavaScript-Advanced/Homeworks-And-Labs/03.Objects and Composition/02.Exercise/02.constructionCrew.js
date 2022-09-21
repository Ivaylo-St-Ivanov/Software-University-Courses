function constructionCrew(input) {

    'use strict';
    if (input.dizziness == true) {
        // The required amount is 0.1ml per kilogram per year of experience.
        const requiredAmountPerKgPerExperience = 0.1;
        const result = requiredAmountPerKgPerExperience * input.weight * input.experience;
        input.levelOfHydrated += result;
        input.dizziness = false;

        return input;
    } else {
        return input;
    }
}
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));
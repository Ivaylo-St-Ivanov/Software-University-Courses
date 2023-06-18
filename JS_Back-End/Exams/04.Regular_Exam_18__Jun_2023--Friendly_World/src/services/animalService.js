const Animal = require('../models/Animal');

exports.getAllAnimals = () => Animal.find();

exports.getAnimalById = (animalId) => Animal.findById(animalId);

exports.addAnimal = (animalData) => Animal.create(animalData);

exports.editAnimal = (animalId, animalData) => Animal.findByIdAndUpdate(animalId, animalData, { runValidators: true });

exports.deleteAnimal = (animalId) => Animal.findByIdAndDelete(animalId);

exports.donate = async (animalId, userId) => {
    const animal = await Animal.findById(animalId);

    animal.donations.push(userId);

    return animal.save();
};
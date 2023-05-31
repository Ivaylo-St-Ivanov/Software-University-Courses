const Cube = require('../models/Cube');

const getAllCubes = (search, from, to) => {
    let result = Cube.find();

    if (search) {
        result = result.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(c => c.level >= Number(from));
    }

    if (to) {
        result = result.filter(c => c.level <= Number(to));
    }

    return result;
};

const getCubeById = (id) => Cube.findById(id);

const addCube = async (cubeData) => {
    const cube = new Cube(cubeData);

    await cube.save();
};

module.exports = {
    getAllCubes,
    getCubeById,
    addCube
};
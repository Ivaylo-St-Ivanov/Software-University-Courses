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

const getCubeById = (id) => Cube.findById(id).populate('accessories');

const addCube = async (cubeData) => {
    const cube = new Cube(cubeData);

    await cube.save();
};

const attachAccessory = async (cubeId, accessoryId) => {
    return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } });

    // const cube = await Cube.findById(cubeId);
    // cube.accessories.push(accessoryId);

    // return cube.save();
};

module.exports = {
    getAllCubes,
    getCubeById,
    addCube,
    attachAccessory
};
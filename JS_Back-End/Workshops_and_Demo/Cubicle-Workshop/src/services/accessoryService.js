const Accessory = require('../models/Accessory');

exports.getAllAccessories = () => Accessory.find();

exports.create = (accessoryData) => Accessory.create(accessoryData);
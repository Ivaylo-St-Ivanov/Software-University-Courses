const Accessory = require('../models/Accessory');

exports.getAllAccessories = () => Accessory.find();

exports.getAvailable = (accessoriesIds) => Accessory.find({ _id: { $nin: accessoriesIds } });

exports.create = (accessoryData) => Accessory.create(accessoryData);
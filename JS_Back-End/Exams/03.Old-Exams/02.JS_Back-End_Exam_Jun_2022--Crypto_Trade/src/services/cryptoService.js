const Crypto = require('../models/Crypto');

exports.getAllCrypto = () => Crypto.find();

exports.getCryptoById = (cryptoId) => Crypto.findById(cryptoId);

exports.createCrypto = (cryptoData) => Crypto.create(cryptoData);

exports.editCrypto = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData, { runValidators: true });

exports.deleteCrypto = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);

exports.buyCrypto = async (cryptoId, userId) => {
    const crypto = await Crypto.findById(cryptoId);

    crypto.buyCrypto.push(userId);

    return crypto.save();
};
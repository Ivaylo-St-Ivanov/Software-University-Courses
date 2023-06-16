const Game = require('../models/Game');

exports.getAllGamesOffer = () => Game.find();

exports.getGameById = (gameId) => Game.findById(gameId);

exports.addGameOffer = (gameOffer) => Game.create(gameOffer);

exports.updateGame = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

exports.deleteGameById = (gameId) => Game.findByIdAndDelete(gameId);

exports.buyGame = async (gameId, user) => {
    const game = await Game.findById(gameId);

    game.boughtBy.push(user);

    return game.save();
};
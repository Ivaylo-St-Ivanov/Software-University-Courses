const Photo = require('../models/Photo');

exports.getAllPhotos = () => Photo.find().populate('owner');

exports.getPhotoById = (photoId) => Photo.findById(photoId).populate('owner');

exports.create = (photo) => Photo.create(photo);

exports.editPhoto = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);

exports.deletePhoto = (photoId) => Photo.findByIdAndDelete(photoId);

exports.addComment = async (photoId, comment) => {
    const photo = await Photo.findById(photoId);

    photo.comments.push(comment);

    return photo.save();
};

exports.getAllPhotosByOwner = (userId) => Photo.find({ owner: userId });
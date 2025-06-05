const express = require('express');
const getImageUploader = require('../controllers/Home/ImageController.js');
const { getEventImages, uploadEventImage, deleteEventGalleryImage } = require('../controllers/Event/EventImagesController.js');

const EventRouter =express.Router();
const upload = getImageUploader('/Event');


EventRouter.get('/getEventImages', getEventImages);
EventRouter.post('/uploadEventImages', upload.any(), uploadEventImage);


EventRouter.delete('/deleteEventGalleryImage', deleteEventGalleryImage);

module.exports = EventRouter;

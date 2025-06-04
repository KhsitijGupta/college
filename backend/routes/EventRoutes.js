const express = require('express');
const getImageUploader = require('../controllers/Home/ImageController.js');
const { getEventImages, uploadEventImage } = require('../controllers/Event/EventImagesController.js');

const EventRouter =express.Router();
const upload = getImageUploader('/Event');


EventRouter.get('/getEventImages', getEventImages);
EventRouter.post('/uploadEventImages', upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
  { name: 'image5', maxCount: 1 },
  { name: 'image6', maxCount: 1 },
  { name: 'image7', maxCount: 1 },
  { name: 'image8', maxCount: 1 },
  { name: 'image9', maxCount: 1 },
  { name: 'image10', maxCount: 1 },
]), uploadEventImage);



module.exports = EventRouter;

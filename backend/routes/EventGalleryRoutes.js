const getImageUploader = require('../controllers/Home/ImageController.js');
const {createOrAddImages ,getBannerImages, DeleteImages} = require('../controllers/Home/BannerController.js');
const express = require('express');

const EventRouter =express.Router();
const upload = getImageUploader('uploads/EventGallery');


EventRouter.post('/uploadEventImages', upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 }
]), createOrAddImages);

EventRouter.delete('/deleteBannerImages/:id', DeleteImages);


module.exports = EventRouter;

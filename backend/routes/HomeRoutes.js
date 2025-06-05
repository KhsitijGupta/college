const { getBannerImages, DeleteImage, createOrAddImages } = require('../controllers/Home/BannerController.js');
const getImageUploader = require('../controllers/Home/ImageController.js');
const express = require('express');
const { getPrograms, createProgram } = require('../controllers/Home/ServiceContoller.js');

const HomeRouter =express.Router();
const upload = getImageUploader('/Home');


HomeRouter.get('/bannerImages', getBannerImages);
HomeRouter.post('/uploadBannerImages', upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 }
]), createOrAddImages);

HomeRouter.delete('/deleteBannerImages', DeleteImage);

HomeRouter.get("/getAllPrograms", getPrograms);
HomeRouter.post("/uploadPrograms", createProgram);

module.exports = HomeRouter;

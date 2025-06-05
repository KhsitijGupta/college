const { getBannerImages, DeleteImage, createOrAddImages } = require('../controllers/Home/BannerController.js');
const getImageUploader = require('../controllers/Home/ImageController.js');
const express = require('express');
const { getPrograms, createProgram, editProgram, deleteProgram } = require('../controllers/Home/ServiceContoller.js');

const HomeRouter =express.Router();
const upload = getImageUploader('/Home');


HomeRouter.get('/bannerImages', getBannerImages);
HomeRouter.post(
  '/uploadBannerImages',
  upload.any(), // Accept any number of files with any field name
  createOrAddImages
);

HomeRouter.delete('/deleteBannerImages', DeleteImage);

HomeRouter.get("/getAllPrograms", getPrograms);
HomeRouter.post("/uploadPrograms", createProgram);

HomeRouter.put("/editProgram/:id", editProgram);
HomeRouter.delete("/deletePrograms/:id",deleteProgram );

module.exports = HomeRouter;
